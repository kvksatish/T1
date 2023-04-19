const express = require("express")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { connection } = require("./Config/db.js")
const { UserModel } = require("./Models/User")
const passwordValidator = require('password-validator');
const validator = require('validator');
const cors = require('cors');
const authentication = require("./Middleware/authentication.js");
const cloudinary = require("./cloudinary.js");
const { default: axios } = require("axios");
const nodemailer=require('nodemailer')
const app = express()
const {v4:uuid}=require('uuid')

require("dotenv").config()
app.use(express.json())
app.use(cors());

// const multer = require('multer');
// const { ImagesModel } = require("./Models/ImagesData.js");
// const storage = multer.memoryStorage();
const { MailModel } = require("./Models/Maildata.js");

// const upload = multer({ storage: storage }).single('image');

app.get("/", (req, res) => {
    res.send("welcome")
})

app.post("/login", async (req, res) => {

    //  res.send("wrgnrggnrgngnnnnnyrn")
    let { email, password } = req.body
    let user = await UserModel.findOne({ email })

    console.log(user)
    let hash = user.password
    bcrypt.compare(password, hash, function (err, result) {

        if (result) {
            var token = jwt.sign({ email: email }, 'secret');
            console.log(token)
            res.send({ "msg": "Login success", "token": token })

        }

        else {
            res.send("Login Failed")
        }

    })
})

const passwordSchema = new passwordValidator();

// Define the password criteria
passwordSchema
    .is().min(8) // Minimum length of 8 characters
    .has().uppercase() // Must have at least one uppercase letter
    .has().lowercase() // Must have at least one lowercase letter
    .has().digits() // Must have at least one digit
    .has().symbols() // Must have at least one symbol
    .has().not().spaces(); // Must not contain spaces

app.post("/signup", async (req, res) => {
    console.log(req.body)
    let { username, email, password } = req.body

    // Validate the email
    if (!validator.isEmail(email)) {
        return res.status(400).send("Invalid email address");
    }

    // Validate the password
    if (!passwordSchema.validate(password)) {
        return res.status(400).send("Invalid password. Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one digit, one symbol, and no spaces.");
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
        res.status(500).send("Something went wrong or invalid or used credentials. Please try again later.");
    }
});



app.post("/dashboard", authentication, async (req, res) => {
    // const { image, email } = req.body
    // // console.log(email)
    // try {
    //     console.log("1")
    //     const result1 = await cloudinary.uploader.upload(image, {
    //         folder: "resimgs"
    //     })
    //     console.log("2")
    //     const result2 = await cloudinary.uploader.upload(image, {
    //         folder: "resimgs",
    //         width: 100,
    //         crop: "scale"
    //     })
    //     console.log("3")
    //     const result3 = await cloudinary.uploader.upload(image, {
    //         folder: "resimgs",
    //         width: 300,
    //         crop: "scale"
    //     })
    //     const imglinks = new ImagesModel({ email, imgslinks: [result2, result3, result1] });

    //     // Save the user to the database
    //     await imglinks.save();
    //     console.log(result1, result2, result3, "4")
    //     res.send({ result1, result2, result3 });


    // } catch (err) {
    //     console.error(err, "error");
    //     res.status(500).send("Error uploading file");
    // }
});
app.get("/multiple_mails_sender", async (req, res) => {
console.log("first",uuid())
let fuuid=uuid()

        try {
            const mail = new MailModel({ uuid:fuuid });

            // Save the user to the database
            await mail.save();
        } catch (error) {
            
        }

    

    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"kvksatish98@gmail.com",
            pass:"xkvdtlmziwvokapy"
        }
    })

    const options={
        from:"kvksatish98@gmail.com",
        to:"kvksatish105@outlook.com",
        subject:"testing nodemailer",
        html:`<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Beautiful Email Template</title>
            <style>
              /* Reset styles for email */
              body, body * {
                box-sizing: border-box;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.5;
                margin: 0;
                padding: 0;
              }
              /* Set background color */
              body {
                background-color: #f7f7f7;
              }
              /* Wrapper for email content */
              .email-wrapper {
                background-color: #ffffff;
                border-radius: 4px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                margin: 50px auto;
                max-width: 600px;
                padding: 30px;
              }
              /* Header styles */
              .email-header {
                border-bottom: 1px solid #f0f0f0;
                margin-bottom: 30px;
                padding-bottom: 20px;
                text-align: center;
              }
              .email-header h1 {
                color: #333333;
                font-size: 24px;
                font-weight: bold;
                margin: 0;
              }
              /* Body styles */
              .email-body {
                margin-bottom: 30px;
              }
              .email-body p {
                margin-bottom: 20px;
              }
              /* Button styles */
              .email-button {
                background-color: #3498db;
                border-radius: 4px;
                color: #ffffff;
                display: inline-block;
                font-size: 16px;
                font-weight: bold;
                padding: 12px 24px;
                text-align: center;
                text-decoration: none;
              }
              .email-button:hover {
                background-color: #2980b9;
              }
            </style>
          </head>
          <body>
            <div class="email-wrapper">
              <div class="email-header">
                <h1>Welcome to our Beautiful Email Template ${fuuid}</h1>
              </div>
              <img src="https://guideyu-backend.vercel.app/mail_data?uuid=${uuid}" alt="img not avaliable">
              <div class="email-body">
                <p>Hello there,</p>
                <p>Thanks for choosing our beautiful email template. We hope you find it easy to use and customize.</p>
                <p>If you have any questions or feedback, please don't hesitate to get in touch.</p>
              </div>
              <div class="email-footer">
                <p>Best regards,</p>
                <p>The Beautiful Email Template Team</p>
              </div>
              <div class="email-button-container">
                <a href="#" class="email-button">Get Started</a>
              </div>
            </div>
          </body>
        </html>
        `
    }

    transporter.sendMail(options,function(err,info){
        if(err){
            console.log(err)
            return
        }
        res.send(info.response)
    })

    // const { image, email } = req.body
    // // console.log(email)
    // try {
    //     console.log("1")
    //     const result1 = await cloudinary.uploader.upload(image, {
    //         folder: "resimgs"
    //     })
    //     console.log("2")
    //     const result2 = await cloudinary.uploader.upload(image, {
    //         folder: "resimgs",
    //         width: 100,
    //         crop: "scale"
    //     })
    //     console.log("3")
    //     const result3 = await cloudinary.uploader.upload(image, {
    //         folder: "resimgs",
    //         width: 300,
    //         crop: "scale"
    //     })
    //     const imglinks = new ImagesModel({ email, imgslinks: [result2, result3, result1] });

    //     // Save the user to the database
    //     await imglinks.save();
    //     console.log(result1, result2, result3, "4")
    //     res.send({ result1, result2, result3 });


    // } catch (err) {
    //     console.error(err, "error");
    //     res.status(500).send("Error uploading file");
    // }
});
app.get("/mail_data", async (req, res) => {

let ruuid=req.query.uuid
try {
    const result = await MailModel.findOneAndUpdate(
        { uuid: ruuid },
        { $set: { open_time: Date.now() } },
        { new: true }
    );
    if (result) {
        console.log("Mail document found and updated:", result);
        return res.send('https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg')
    } else {
        console.log("Mail document not found with UUID:", ruuid);
        return res.send('https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg')
    }
} catch (error) {
    console.error("Error updating mail document:", error);
    return res.send('https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg');
}
    

});

app.get("/getallimgs", authentication, async (req, res) => {
    // const { email } = req.body
    // // console.log(email)
    // try {
    //     let imglinks = await ImagesModel.find({ email })
    //     res.send(imglinks);


    // } catch (err) {
    //     console.error(err, "error");
    //     res.status(500).send("Error uploading file");
    // }
});


app.listen(7500, async () => {
    try {
        await connection
        console.log("connected")
    }
    catch (err) {
        console.log("not connected")
        console.log(err)
    }
    console.log("linstening to port 7500")
    // console.log(process.env.NAME)
    //console.log(process.env.MONGO_URL)
})