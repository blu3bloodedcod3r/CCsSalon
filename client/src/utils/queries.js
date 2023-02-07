import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      name
      email
      status
      appts {
        _id
        date
        time
        service
      }
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
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
`;

export const QUERY_ALL_SERVICES = gql`
  {
    services {
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

export const QUERY_SINGLE_SERVICE = gql`
  query Service($serviceId: ID!) {
    service(serviceId: $serviceId) {
      _id
      name
      description
      price
      duration
      image
    }
  }
`;

export const QUERY_ALL_APPTS = gql`
  {
    appts {
      _id
      date
      time
      message
      user {
        _id
        name
        email
      }
      service {
        _id
        name
        description
        price
        duration
      }
    }
  }
`;
