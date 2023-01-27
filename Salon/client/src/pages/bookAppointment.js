import React from 'react';
import Appointments from '../components/Appointment-picker/appointment'
import apptPicker from '../components/Appointment-picker/appointment-picker'
import Services from '../pages/Services'
import {userId, name} from '../pages/user'

export default function BookAppt() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 shadow bg-light apt-box">
                    <div className="col-12">
                        <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">Appointment Form</h3>
                    </div>
                    <form id="apptForm" action="">
                        <div className="row g-3">
                            <div className="col-md-12">
                                <input type="email" id="email" className="form-control" placeholder="Enter Email"/>
                            </div>
                            <div className="col-md-6">
                                <input type="date" id="date" className="form-control" placeholder="Enter Date"/>
                            </div>
                            <div className="col-md-6">
                                <input type="text" id="time-1" className="form-control" aria-live="assertive" aria-label="Use up or down arrow keys to change time"/>
                            </div>
                            <div className="col-12">
                                <select className="form-select" id="description" aria-label="Default select example">
                                    <option selected>Select Service</option>
                                    {services}
                                    <option value={user.id}>{user.name}</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control" id='message' placeholder="Message"></textarea>
                            </div>
                            <div className="col-12 mt-3">                        
                                <button type="submit" className="btn btn-primary float-end">Book Appointment</button>
                                <button type="button" className="btn btn-outline-secondary float-end me-2">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

{/* <script src="js/appointment-picker.min.js"></script>
<script src="js/appointment.js"></script> */}