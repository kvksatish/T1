const express = require("express");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { connection } = require("./Config/db.js");
const { UserModel } = require("./Models/User");
const passwordValidator = require("password-validator");
const validator = require("validator");
const cors = require("cors");
const authentication = require("./Middleware/authentication.js");
const app = express();
const { v4: uuid } = require("uuid");
const { createSession } = require("better-sse");

const multer = require("multer");

const upload = multer();
require("dotenv").config();
app.use(express.json());
app.use(cors());

const storage = multer.memoryStorage();
const { MailModel } = require("./Models/Maildata.js");
const csvToJson = require("./Middleware/csvToJson.js");
const managerofmails = require("./Functions/managerofmails.js");

app.get("/", (req, res) => {
  res.send("welcome");
});

app.post("/login", async (req, res) => {
  //  res.send("wrgnrggnrgngnnnnnyrn")
  let { email, password } = req.body;
  let user = await UserModel.findOne({ email });

  console.log(user);
  let hash = user.password;
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      var token = jwt.sign({ email: email }, "secret");
      console.log(token);
      res.send({ msg: "Login success", token: token });
    } else {
      res.send("Login Failed");
    }
  });
});

const passwordSchema = new passwordValidator();

// Define the password criteria
passwordSchema
  .is()
  .min(8) // Minimum length of 8 characters
  .has()
  .uppercase() // Must have at least one uppercase letter
  .has()
  .lowercase() // Must have at least one lowercase letter
  .has()
  .digits() // Must have at least one digit
  .has()
  .symbols() // Must have at least one symbol
  .has()
  .not()
  .spaces(); // Must not contain spaces

app.post("/signup", async (req, res) => {
  console.log(req.body);
  let { username, email, password } = req.body;

  // Validate the email
  if (!validator.isEmail(email)) {
    return res.status(400).send("Invalid email address");
  }

  // Validate the password
  if (!passwordSchema.validate(password)) {
    return res
      .status(400)
      .send(
        "Invalid password. Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one digit, one symbol, and no spaces."
      );
  }

  try {
    // Hash the password
    const hash = await bcrypt.hash(password, 6);

    // Create a new user with the hashed password
    const user = new UserModel({ username, email, password: hash });

    // Save the user to the database
    await user.save();

    res.send("Signup Successful");
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Something went wrong or invalid or used credentials. Please try again later."
      );
  }
});

app.post(
  "/multiple_mails_sender",
  authentication,
  upload.array("csvFile"),
  csvToJson,
  async (req, res) => {
    const newArray = req.data;
    console.log(newArray.length, "cccccccccc");
    try {
      let result = await MailModel.insertMany(newArray);
      res.send(result);
    } catch (error) {
      console.log(error);
      res.send("error");
    }
  }
);

// app.get("/batch_bulk_mailing/:batchid", authentication, async (req, res) => {
//   const session = await createSession(req, res);
//   const type = req.query.type;
//   let batchid = req.params.batchid;
//   console.log(batchid, "bid");
//   let data = await MailModel.find({
//     batchid,
//     status: { $in: type },
//   });
//   let batchids = await MailModel.distinct("batchid");
//   console.log(data, batchids);
//   session.push(`found data in database using batchid `);
//     try {
//       managerofmails(data, session);
//     } catch (error) {}
// });

// app.get("/batchwise_mails/:batchid", authentication, async (req, res) => {
//   try {
//     const {
//       params: { batchid },
//       query: { type, page, limit },
//     } = req;
//     const perPage = parseInt(limit) || 10;
//     const pageNumber = parseInt(page) || 1;
//     console.log(type, page, limit, batchid);
//     const count = await MailModel.countDocuments({
//       batchid,
//       status: { $in: type },
//     });
//     const data = await MailModel.find({ batchid, status: { $in: type } })
//       .skip((pageNumber - 1) * perPage)
//       .limit(perPage);

//     const totalPages = Math.ceil(count / perPage);
//     const response = {
//       data,
//       totalPages,
//       totalObjects: count,
//       currentPage: pageNumber,
//       hasPreviousPage: pageNumber > 1,
//       previousPage: pageNumber - 1,
//       hasNextPage: pageNumber < totalPages,
//       nextPage: pageNumber + 1,
//     };
//     console.log(response);
//     res.send(response);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.get("/mail_data/:uuid", authentication, async (req, res) => {
//   let ruuid = req.params.uuid;
//   const result = await MailModel.findOneAndUpdate(
//     { uuid: ruuid },
//     { $set: { open_time: Date.now(), status: "OPENED" } },
//     { new: true }
//   ).select("uuid");
// });

// app.get("/all_batchs_info", authentication, async (req, res) => {
//   const itemsPerPage = 10;

//   // Parse the current page from the query parameters
//   const page = parseInt(req.query.page) || 1;

//   let batchids = await MailModel.distinct("batchid");
//   let batchInfo = [];

//   for (let i = 0; i < batchids.length; i++) {
//     let mail = await MailModel.findOne({ batchid: batchids[i] }).sort({
//       uploadtime: -1,
//     });
//     let count = await MailModel.countDocuments({ batchid: batchids[i] });
//     let uploadtime = mail.uploadtime;
//     batchInfo.push({
//       batchid: batchids[i],
//       uploadtime: uploadtime,
//       totalmails: count,
//     });
//   }

//   // Sort the batchInfo array by uploadtime in descending order
//   batchInfo.sort((b, a) => new Date(a.uploadtime) - new Date(b.uploadtime));

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(batchInfo.length / itemsPerPage);

//   // Calculate the index of the first item on the current page
//   const startIndex = (page - 1) * itemsPerPage;

//   // Calculate the index of the last item on the current page
//   const endIndex = startIndex + itemsPerPage;

//   // Get the current page of items
//   const currentBatchInfo = batchInfo.slice(startIndex, endIndex);

//   // Construct the response object with the current page of items and pagination metadata
//   const response = {
//     batchInfo: currentBatchInfo,
//     currentPage: page,
//     totalPages: totalPages,
//     hasPreviousPage: page > 1,
//     previousPage: page - 1,
//     hasNextPage: endIndex < batchInfo.length,
//     nextPage: page + 1,
//   };

//   console.log(response);
//   res.send(response);
// });

app.listen(7500, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (err) {
    console.log("not connected");
    console.log(err);
  }
  console.log("linstening to port 7500");
  // console.log(process.env.NAME)
  //console.log(process.env.MONGO_URL)
});
