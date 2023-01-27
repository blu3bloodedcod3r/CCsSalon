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
}
`;

module.exports = typeDefs;