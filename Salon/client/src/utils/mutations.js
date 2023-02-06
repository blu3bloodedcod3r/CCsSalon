import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      name
      email
      status
      appts {
        _id
        date
        time
        message
        service {
          _id
          name
          description
          price
          duration
          image
          reviews {
            _id
            reviewText
            reviewAuthor
            reviewImg
          }
        }
      }
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
      status
      appts {
        _id
        date
        time
        message
        service {
          _id
          name
          description
          price
          duration
          image
          reviews {
            _id
            reviewText
            reviewAuthor
            reviewImg
          }
        }
      }
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

export const ADD_SERVICE = gql`
mutation addService($name: String!, $description: String, $price: String!, $duration: String!, $image: String) {
  addService(name: $name, description: $description, price: $price, duration: $duration, image: $image) {
    _id
    name
    description
    price
    duration
    image
    reviews {
      _id
      reviewText
      reviewAuthor
      reviewImg
    }
  }
}
`;

export const DELETE_SERVICE = gql`
mutation deleteService($serviceId: ID!) {
  deleteService(serviceId: $serviceId) {
    _id
    name
    description
    price
    duration
    image
    reviews {
      _id
      reviewText
      reviewAuthor
      reviewImg
    }
  }
}
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;