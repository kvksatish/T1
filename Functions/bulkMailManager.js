//const { MailModel } = require("../Models/Maildata");
//const mailSender = require("./MailSender");
// let f = 0;
// let s = 0;
// let tt = 0;
function bulkMailManager(data, session) {
  // tt = data.length;
  // session.push(`Bulk Mailing has started please dont close the window`);
  // for (const ele of data) {
  //   await mailchecker(ele.email, ele.uuid, session);
  //   await new Promise((resolve) => setTimeout(resolve, 500)); // wait for 1 second
  // }
  // session.push(`All Mails Are Successfully Sent`);
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // session.push(``);
  // f = 0;
  // s = 0;
  // tt = 0;
  return "vefv";
}

module.exports = bulkMailManager;

// async function mailchecker(email, id, session) {
//   try {
//     await mailSender(id, email);
//     const result = await MailModel.findOneAndUpdate(
//       { uuid: id },
//       { $set: { status: "DELIVERED" } },
//       { new: true }
//     );
//     session.push(
//       `uuid:${id} emailid:${email} SuccessfulMails:${++s} FailedMails:${f} RemainingMails:${
//         tt - (s + f)
//       } TotalMails:${tt}  sentsuccess`
//     );
//   } catch (err) {
//     const result = await MailModel.findOneAndUpdate(
//       { uuid: id },
//       { $set: { status: "FAILED" } },
//       { new: true }
//     );
//     session.push(
//       `uuid:${id} emailid:${email} SuccessfulMails:${s} FailedMails:${++f} RemainingMails:${
//         tt - (s + f)
//       } TotalMails:${tt}  Failed`
//     );
//     // handle error
//   }
// }
