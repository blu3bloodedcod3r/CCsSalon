import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_SERVICES } from "../utils/queries";

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
              src={require(`./images/${service.image}`)}
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
              <a href="/appointment" className="btn btn-primary">
                Reserve an appointment now
              </a>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Service;
