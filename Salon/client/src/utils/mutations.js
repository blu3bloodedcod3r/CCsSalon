import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $name: String!, $password: String!) {
    login(email: $email, name: $name, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const MAKE_APPT = gql`
mutation makeAppt($date: String, $time: String, $message: String, $service: ID!) {
    makeAppt(date: $date, time: $time, message: $message, service: $service) {
        _id
        date
        time
        message
        service {
            _id
            name
        }
    }
}
`;

export const ADD_SERVICES = gql`
mutation addServices($name: String!, $description: String, $price: String, $duration: String, $filename: String) {
    addServices(name: $name, description: $description, price: $price, duration: $duration, filename: $filename) {
        _id
        name
        description
        price
        duration
        filename
    }
  }
`;