const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const connection = mongoose.connect(
  "mongodb+srv://kvksatish:kvksatish@cluster0.ueotde6.mongodb.net/guideyu?retryWrites=true&w=majority"
);

module.exports = { connection };
