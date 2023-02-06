// Node Emailer requirements
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");
const {email} = req.body;

const app = express();

// View Engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("BookingForm");
});

app.post("/send", (req, res) => {
  const output = `
    <p>Appointment Confirmation</p>
    <h3>Salon Reminder</h3>
    <p>Hi, ${req.body.name}. This is a reminder that you have an appointment scheduled on ${req.body.date} at ${req.body.time} for ${req.body.service}. <p>And any speaial request for the stylist: ${req.body.message}.Please reply <strong>YES to confirm</strong>, or to reschedule.</p>
    `;
});

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASS // generated ethereal password
  },
  tls: {
  rejectUnauthorized:false 
  }
});

// send mail with defined transport object
let mailOptions = {
  from: process.env.EMAIL_USER, // sender address
  to: email, // list of receivers
  subject: "Confirmation", // Subject line
  text: "Hello", // plain text body
  html: output // html body
};

// Send Email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    return  console.log(err);
  }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });

app.listen(3001, () => console.log("Server running..."));
