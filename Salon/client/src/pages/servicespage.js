import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_SERVICES, QUERY_ME } from "../utils/queries";

import "./styles/style.css";

const Service = () => {
  const { loading, data } = useQuery(QUERY_ALL_SERVICES);
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
              src={service.image}
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
              <Link to={`/appointment/${service._id}`}>
                <button className="btn btn-primary mod-btn" id="modify">
                  Reserve an appointment now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Service;
