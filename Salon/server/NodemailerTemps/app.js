// // Node Emailer requirements
// const express = require("express");
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const nodemailer = require("nodemailer");
// const path = require('path');

// const app = express();
// app.get("/", (req, res) => {
//     res.render("Confimation");
//   });

// // View Engine setup
// app.engine('handlebars', exphbs());  
// app.set('view engine', 'handlebars');

// // Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// // Bodyparser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.listen(3001, () => console.log('Server running...')); 

