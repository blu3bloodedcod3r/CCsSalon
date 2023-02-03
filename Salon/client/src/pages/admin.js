import React from 'react';
import {apptPicker} from '../components/Appointment-picker/appointment-picker'
import User from './user'
import { Link } from 'react-router-dom';
import './styles/style.css'

export default function Admin() {
    return (
        <aside className="main-content">

            <div class="modifyServices">
            <Link to='/modservices'>
            <button class="btn btn-primary mod-btn" id="modify" >
            Add / Modify 
            Services</button></Link>
            </div>


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
                    <tbody>
                        <tr>
                        <th scope="row">Test</th>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </aside>
    )
}