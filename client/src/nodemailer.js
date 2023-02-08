const nodemailer = require("nodemailer");

 // create reusable transporter object 
const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const options = {
    from: "BizCCsSalon@outlook.com",
    to: "brown.calah@hotmail.com",
    subject: "Email Confirmation",
    text: `Hello, ${req.body.name}. This is CC's Hair Salon]. I have you scheduled for a ${req.body.service} with the Stylist on ${req.body.date} at ${req.body.time}. Is there anything else I can help you with?`
};

// Send Email
transporter.sendMail(options, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Sent" + info.response);
    }
});