// const nodemailer = require("nodemailer");

// const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
//     // create reusable transporter object using the default SMTP transport
//     const transporter = nodemailer.createTransport({
//         host: process.env.EMAIL_HOST,
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: process.env.EMAIL_USER, // generated ethereal user
//             pass: process.env.EMAIL_PASS // generated ethereal password
//         },
//       });

//     const options = {
//         from: sent_from,
//         to: send_to,
//         replyTo: reply_to,
//         subject: subject,
//         html: message
//     }

//     // Send Email
//     transporter.sendMail(options, (err, info) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(info)
//         }
//     })  
// };

// module.exports = sendEmail;