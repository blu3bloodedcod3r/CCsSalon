const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3001;

function sendEmail() {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const options = {
    from: "BizCCsSalon@outlook.com",
      to: "brown.calah@hotmail.com",
      subject: "Testing",
      text: "texting"
    } 
    transporter.sendMail(options, (err, info) => {
        if (err) {
          console.log(err);
          return reject({message: `An error has occured`})
        } else {
          console.log(info);
          return resolve({message: `Email Sent`}) 
        }
      })
  })
}

app.get('/', (req, res) => {
  sendEmail()
  .then(response => res.send(response.message))
  .catch(error => res.status(500).send(error.message))
});


app.listen(port, () => {
  console.log(`nodemailProject is listening at http://localhost:${port}`);
});
