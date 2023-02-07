import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { MAKE_APPT } from "../utils/mutations";
import Auth from "../utils/auth";
import "../pages/styles/style.css";

const BookingForm = ({ serviceId }) => {
  const [apptState, setApptState] = useState({
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const [makeAppt, { error }] = useMutation(MAKE_APPT);

  const BookSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await makeAppt({
        variables: {
          ...apptState,
          service: serviceId,
          // email: Auth.getProfile().data.email,
        },
      });
      console.log(data);
      alert(
        "You have successfully scheduled your appointment. Looking forward to seeing you then."
      );

      setApptState({
        email: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name value", name, value);
    setApptState({
      ...apptState,
      [name]: value,
    });
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <form id="apptForm" onSubmit={BookSubmit}>
            <div className="row g-3">
              <div className="col-md-12">
                <input
                  value={apptState.email}
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  value={apptState.date}
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  placeholder="Enter Date"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  value={apptState.time}
                  type="time"
                  id="time-1"
                  name="time"
                  className="form-control"
                  aria-live="assertive"
                  aria-label="Use up or down arrow keys to change time"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <input
                  value={apptState.message}
                  type="text"
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  name="message"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary float-end">
                  Book Appointment
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary float-end me-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to make an appointment. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
      {/* error message collected once the mutation was invoked above */}
      {error && (
        <div className="col-12 my-3 bg-danger text-white p-3">
          Something went wrong...
        </div>
      )}
    </div>
  );
};

export default BookingForm;
