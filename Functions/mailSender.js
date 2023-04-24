// const { MailModel } = require("../Models/Maildata.js");

// const nodemailer = require("nodemailer");

// function mailSender(fuuid, to) {
//   console.log(fuuid, to);
//   return new Promise((resolve, reject) => {
//     try {
//       const mail = new MailModel({ uuid: fuuid });

//       // Save the user to the database
//       //  mail.save();
//     } catch (error) {
//       reject(error);
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "kvksatish98@gmail.com",
//         pass: "xkvdtlmziwvokapy",
//       },
//     });

//     const options = {
//       from: "kvksatish98@gmail.com",
//       to,
//       subject: "testing nodemailer",
//       html: `<!DOCTYPE html>
//         <html>
//           <head>
//             <meta charset="utf-8">
//             <title>Beautiful Email Template</title>
//             <style>
//               /* Reset styles for email */
//               body, body * {
//                 box-sizing: border-box;
//                 font-family: Arial, sans-serif;
//                 font-size: 16px;
//                 line-height: 1.5;
//                 margin: 0;
//                 padding: 0;
//               }
//               /* Set background color */
//               body {
//                 background-color: #f7f7f7;
//               }
//               /* Wrapper for email content */
//               .email-wrapper {
//                 background-color: #ffffff;
//                 border-radius: 4px;
//                 box-shadow: 0 2px 8px rgba(0,0,0,0.05);
//                 margin: 50px auto;
//                 max-width: 600px;
//                 padding: 30px;
//               }
//               /* Header styles */
//               .email-header {
//                 border-bottom: 1px solid #f0f0f0;
//                 margin-bottom: 30px;
//                 padding-bottom: 20px;
//                 text-align: center;
//               }
//               .email-header h1 {
//                 color: #333333;
//                 font-size: 24px;
//                 font-weight: bold;
//                 margin: 0;
//               }
//               /* Body styles */
//               .email-body {
//                 margin-bottom: 30px;
//               }
//               .email-body p {
//                 margin-bottom: 20px;
//               }
//               /* Button styles */
//               .email-button {
//                 background-color: #3498db;
//                 border-radius: 4px;
//                 color: #ffffff;
//                 display: inline-block;
//                 font-size: 16px;
//                 font-weight: bold;
//                 padding: 12px 24px;
//                 text-align: center;
//                 text-decoration: none;
//               }
//               .email-button:hover {
//                 background-color: #2980b9;
//               }
//             </style>
//           </head>
//           <body>
//             <div class="email-wrapper">
//               <div class="email-header">
//                 <h1>Welcome to our Beautiful Email Template ${fuuid}</h1>
//               </div>
//               <img src="https://guideyu-backend.vercel.app/mail_data/${fuuid}" alt="img not avaliable">
//               <div class="email-body">
//                 <p>Hello there,</p>
//                 <p>Thanks for choosing our beautiful email template. We hope you find it easy to use and customize.</p>
//                 <p>If you have any questions or feedback, please don't hesitate to get in touch.</p>
//               </div>
//               <div class="email-footer">
//                 <p>Best regards,</p>
//                 <p>The Beautiful Email Template Team</p>
//               </div>
//               <div class="email-button-container">
//                 <a href="#" class="email-button">Get Started</a>
//               </div>
//             </div>
//           </body>
//         </html>
//         `,
//     };

//     transporter.sendMail(options, function (err, info) {
//       if (err) {
//         console.log(err);
//         reject(err);
//       }
//       console.log(info);
//       resolve(info);
//     });
//   });
// }

// module.exports = mailSender;
