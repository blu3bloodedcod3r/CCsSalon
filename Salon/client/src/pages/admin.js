import React from 'react';
// import {apptPicker} from '../components/Appointment-picker/appointment-picker'
// import User from './user'
import { Link } from 'react-router-dom';
import './styles/style.css'
import { useQuery } from '@apollo/client';
import { QUERY_APPT } from '../utils/queries';


export default function Admin() {

    const { loading, data } = useQuery(QUERY_APPT, {
        fetchPolicy: "no-cache"
    });

    const apptList = data?.appointments || [];

    return (
        <aside className="main-content">

            <div className="modifyServices">
            <Link to='/modservices'>
            <button className="btn btn-primary mod-btn" id="modify" >
            Add / Modify 
            Services</button></Link>
            </div>


            <div className="col-md-12 appt-list mt-5">
                <h3>Current Appointments</h3>
                {loading ? (
                    <div>Loading...</div>
                ) : ( 
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col" >Date</th>
                        <th scope="col" >Time</th>
                        <th scope="col" >Client</th>
                        <th scope="col" >Service</th>
                        <th scope="col" >Message</th>
                        </tr>
                    </thead>
                          {apptList.map((appointment) => {
                            return ( <tbody>
                                        <tr>
                                        <th scope="row" key={appointment._id}>{appointment.date}</th>
                                        <td>{appointment.time}</td>
                                        {/* <td>{appointment.user.name}</td> I think we need to add user with their Id to our schema to access user by id and name */}
                                        <td>{appointment.service.name}</td>
                                        <td>{appointment.message}</td>
                                        </tr>
                                    </tbody>
                            )
                          })}; 
                </table>
                )};
            </div>
        </aside>
    )
}