import React from "react";
// import {apptPicker} from '../components/Appointment-picker/appointment-picker'
// import User from './user'
import { Link } from "react-router-dom";
import "./styles/style.css";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_APPTS } from "../utils/queries";

export default function Admin() {
  const { loading, data } = useQuery(QUERY_ALL_APPTS);
  console.log(data)
  const appts = data?.appts || [];

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <aside className="main-content">
      <div className="modifyServices">
        <Link to="/modservices">
          <button className="btn btn-primary mod-btn" id="modify">
            Add / Modify Services
          </button>
        </Link>
      </div>

      <div className="col-md-12 appt-list mt-5">
        <h3>Current Appointments</h3>
       
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Client</th>
                <th scope="col">Service</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            {appts.map((appt) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row" key={appt._id}>
                      {appt.date}
                    </th>
                    <td>{appt.time}</td>
                    <td></td>
                    <td>{appt.service.name}</td>
                    <td>{appt.message}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
      </div>
    </aside>
  );
}
