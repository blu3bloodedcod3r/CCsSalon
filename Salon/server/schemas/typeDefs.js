const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  name: String!
  email: String!
  status: String
  appts: [Appt]
}
type Appt {
  _id: ID
  date: String!
  time: String!
  message: String
  service: Services
}
type Services {
  _id: ID
  name: String!
  description: String
  price: String
  duration: String
  image: String
  reviews: [Review]
}
type Review {
  _id: ID
  reviewText: String
  reviewAuthor: String
  reviewImg: String
}
type Auth {
  token: ID
  user: User
}
type Query {
  services: [Services]
  service(serviceId: ID!): Services
  me: User
  users: [User]
  appts: [Appt]
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(name: String!, email: String!, password: String!): Auth
  makeAppt(date: String!, time: String!, message: String, service: ID!): Appt
  deleteAppt(apptId: ID!): User 
  addService(name: String!, description: String, price: String!, duration: String!, image: String): Services
  deleteService(serviceId: ID!): Services
  addReview(serviceId: ID!, reviewText: String!, reviewAuthor: String!, reviewImg: String): Services
}
`;

module.exports = typeDefs;