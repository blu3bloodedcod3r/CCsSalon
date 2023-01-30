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
  date: String
  time: String
  message: String
  service: Services
}
type Auth {
  token: ID
  user: User
}

type Query {
  services: [Services]
  user: User
  appts: [Appt]
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(name: String!, email: String!, password: String!): Auth
  makeAppt(date: String, time: String, Message: String, service: ID!): User
  deleteAppt(_id: ID!): Appt
  addServices(name: String!, description: String, price: String, duration: String, filename: String): Services
  deleteServices(_id: ID!): Services
}
`;

module.exports = typeDefs;