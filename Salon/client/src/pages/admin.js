import React from 'react';
import apptPicker from '../components/Appointment-picker/appointment-picker'
import User from './User'

export default function Admin() {
    return (
        <div className="modifyServices">
                <a href="/admin/services">
                <button className="btn btn-primary mod-btn" id="modify" >Add / Modify 
                Services</button>
                </a>
        </div>,

        <div className="col-md-12 appt-list mt-5">
            <h3>Current Appointments</h3>
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
                {appts}
                <tbody>
                    <tr>
                    <th scope="row">{date}</th>
                    <td>{time}</td>
                    <td>{user_id}</td>
                    <td>{service_id}</td>
                    <td>{message}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}