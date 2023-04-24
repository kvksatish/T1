const csv = require("csvtojson");
const { v4: uuid } = require("uuid");

function csvToJson(req, res, next) {
  let data = req.files[0];
  let narr = [];
  let bid = uuid();
  // Convert the CSV data to JSON
  csv()
    .fromString(data.buffer.toString("utf8"))
    .then((json) => {
      // Attach t JSON data to the request object
      console.log(data.length);
      json.map((ele) => {
        let nobj = {
          company_name: ele["COMPANY NAME"],
          date_of_registration: ele["DATE OF REGISTRATION"],
          state: ele["STATE"],
          activity: ele["ACTIVITY DESCRIPTION"],
          address: ele["REGISTERED OFFICE ADDRESS"],
          email: ele["EMAIL"],
          //  email: ele["EMAIL"],
          uuid: uuid(),
          batchid: bid,
        };
        narr.push(nobj);
      });

      req.data = narr;
      next();
    })
    .catch((err) => {
      console.log(err);
      res.send("error parsing csv file");
    });
}

module.exports = csvToJson;
