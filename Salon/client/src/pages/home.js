import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> main
import { useQuery } from "@apollo/client";
import { QUERY_ALL_SERVICES } from "../utils/queries";

import "./styles/style.css";

const Service = () => {
  const { loading, data } = useQuery(QUERY_ALL_SERVICES);
<<<<<<< HEAD
  console.log(data)
=======
>>>>>>> main
  const services = data?.services || [];

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <aside className="main-content">
      <div className="card-container">
        {services.map((service) => (
          <div className="card" key={service.id}>
            <img
<<<<<<< HEAD
              src={require(`./images/${service.image}`) }
=======
              src={service.image}
>>>>>>> main
              className="card-img-top"
              alt="Service Placeholder"
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                <strong>{service.name}</strong>
              </h5>
              <div className="card-text">
                <ul>
                  <li key={service.description}>
                    Description: {service.description}
                  </li>
                  <li key={service.duration}>Duration: {service.duration}</li>
                  <li key={service.price}>Price: {service.price}</li>
                </ul>
              </div>
<<<<<<< HEAD
              <Link to={`/appointment/${service._id}`}>
                <button className="btn btn-primary mod-btn" id="modify">
                  Reserve an appointment now
                </button>
              </Link>
=======
              <a href="/appointment" className="btn btn-primary">
                Reserve an appointment now
              </a>
>>>>>>> main
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

<<<<<<< HEAD
export default Service;
=======
export default Service;
>>>>>>> main
