import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_SINGLE_SERVICE } from "../utils/queries";
import { MAKE_APPT } from "../utils/mutations";
import BookingForm from '../components/BookingForm'
import "./styles/style.css";

// import AppointmentPicker from 'appointment-picker';

const Book = () => {
  const { serviceId } = useParams();
  console.log(serviceId);

  const { loading, data } = useQuery(QUERY_SINGLE_SERVICE, {
    // pass URL parameter
    variables: { serviceId: serviceId },
  });
  const service = data?.service || {};
  console.log(service)


  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <aside className="main-content">
      <div className="page">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3 border p-4 shadow bg-light apt-box">
              <div className="col-12">
                <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">
                  Appointment For: <strong>{service.name}</strong>
                </h3>
                <h5> {service.description}</h5>
                <p>Duration: {service.duration} </p>
                <p>Price: {service.price}</p>
              </div>
              <div className="col-md-6 offset-md-3 border p-4 shadow bg-light apt-box">
                <BookingForm serviceId={service._id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

// <script src="./components/Appointment-picker/appointment-picker.min.js"></script>
// <script src="js/appointment.js"></script>

export default Book;
