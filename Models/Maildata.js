const mongoose = require("mongoose");

const MailSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  date_of_registration: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  sent_time: {
    type: String,
    default: false,
  },
  status: {
    type: String,
    required: true,
    default: "UPLOADED",
  },
  uuid: {
    type: String,
    required: true,
  },
  open_time: {
    type: String,
    default: false,
  },
  uploadtime: {
    type: String,
    required: true,
    default: new Date(Date.now()).toISOString(),
  },
  batchid: {
    type: String,
    required: true,
  },
});
const MailModel = mongoose.model("mails", MailSchema);

module.exports = { MailModel };
