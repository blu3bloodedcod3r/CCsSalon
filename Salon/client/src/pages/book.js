import React, { useState } from 'react';
import { services } from './Services';
import AppointmentPicker from 'appointment-picker';

export default function Book() {
    
    const service = services[0]
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const BookSubmit = (e) => {
    e.preventDefault();
    alert("You have successfully scheduled your appointment. Looking forward to seeing you then.");
    setEmail("");
    setMessage("");
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 shadow bg-light apt-box">
                    <div className="col-12">
                        <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">Appointment Form</h3>
                    </div>
                    <form id="apptForm" action="" onSubmit={BookSubmit}>
                        <div className="row g-3">
                            <div className="col-md-12">
                                <input type="email" id="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className="col-md-6">
                                <input type="date" id="date" className="form-control" placeholder="Enter Date"></input>
                            </div>
                            <div className="col-md-6">
                                <input type="text" id="time-1" className="form-control" aria-live="assertive" aria-label="Use up or down arrow keys to change time"></input>
                            </div>
                            <div className="col-12">
                                <select className="form-select" id="description" aria-label="Default select example">
                                    <option selected>Select Service</option>

                                   {/* still working on the code here which allows for drop down of services */}
                                    <option value={service.id}>{service.name}</option>
                                    
                                </select>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control" id='message' placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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
    );
};

// <script src="./components/Appointment-picker/appointment-picker.min.js"></script>
// <script src="js/appointment.js"></script>