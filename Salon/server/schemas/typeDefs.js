const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  name: String!
  email: String!
  status: String
  appts: [Appt]
}
type Services {
  _id: ID
  name: String!
  description: String
  price: String
  duration: String
  filename: String
}
type Appt {
  _id: ID
  date: String!
  time: String!
  message: String
  service: Services
}
type Auth {
  token: ID
  user: User
}
type Query {
  services: [Services]
  me: User
  users: [User]
  appts: [Appt]
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(name: String!, email: String!, password: String!): Auth
  makeAppt(date: String!, time: String!, message: String, service: ID!): Appt
  deleteAppt(apptId: ID!): User 
  addServices(name: String!, description: String, price: String!, duration: String!, filename: String): Services
  deleteServices(serviceId: ID!): Services
}
`;
// makeAppt do I need all the parameters or easier way to say it
module.exports = typeDefs;