import React from 'react';

export default function Admin() {
    return (
        <div class="modifyServices">
                <a href="/admin/services">
                <button class="btn btn-primary mod-btn" id="modify" >Add / Modify 
                Services</button>
                </a>
        </div>,

        <div class="col-md-12 appt-list mt-5">
            <h3>Current Appointments</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col" >Date</th>
                    <th scope="col" >Time</th>
                    <th scope="col" >Client</th>
                    <th scope="col" >Service</th>
                    <th scope="col" >Message</th>
                    </tr>
                </thead>
                {appts as |appt|}
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