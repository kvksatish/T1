const mongoose = require("mongoose")

const MailSchema = new mongoose.Schema({
    // company_name: {
    //     type: String,
    //     required: true
    // },
    // date_of_registration: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // place: {
    //     type: String,
    //     required: true
    // },
    // activity: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    sent_time: {
        type: String,
        required: true,
        default: Date.now
    },
    uuid: {
        type: String,
        required: true
    },
    open_time: {
        type: String,
        default: false
    },
   
})
const MailModel = mongoose.model("mails", MailSchema)


module.exports = { MailModel }