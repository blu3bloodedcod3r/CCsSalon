const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
// Node Emailer requirements
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const sendEmail = require('./utils/sendEmail');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

// Node Mailer Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/api/sendmail", async (req, res) => {
  const {email} = req.body;

  try {
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    const subject = "Thank you message"
    const message = `
    <p>Appointment Confirmation</p>
    <h3>Salon Reminder</h3>
    <p>Hi, ${req.body.name}. This is a reminder that you have an appointment scheduled on ${req.body.date} at ${req.body.time} for ${req.body.service}. <p>And any speaial request for the stylist: ${req.body.message}.Please reply <strong>YES to confirm</strong>, or to reschedule/cancel.</p>
    `
    await sendEmail(subject, message, send_to, sent_from, reply_to)
    res.status(200).json({success: true, message: "Email Sent!"})
  } catch (error) {
    res.status(500).json(error.message)
    console.log(err)
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  

  startApolloServer(typeDefs, resolvers);