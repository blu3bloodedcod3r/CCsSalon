import React, { useState } from 'react';
import { services } from './Services';
import { Datepicker, CalendarPrev, CalendarNav, CalendarNext, CalendarToday, SegmentedGroup, SegmentedItem, setOptions } from '@mobiscroll/react';
import './styles/style.css'

export default function Book() {
    
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const BookSubmit = (e) => {
    e.preventDefault();
    alert("You have successfully scheduled your appointment. Looking forward to seeing you then.");
    setEmail("");
    setMessage("");
    }

    // appointmentPicker 20-43

    const myLabels = React.useMemo(() => {
        return [{
            start: '2023-02-02',
            textColor: '#e1528f',
            title: '3 SPOTS'
        }], 
        invalid: [
            {start: '2023-02-15T14:00',
            end: '2023-02-15T16:30'}
        ],
    }); 
    const myInvalid = React.useMemo(() => {
        return [{
            start: '2023-02-03T08:00',
            end: '2023-02-03T13:00'
        }, {
            start: '2023-02-03T15:00',
            end: '2023-02-03T17:00'
        }, {
            start: '2023-02-03T19:00',
            end: '2023-02-03T20:00'
        }];
    }, []);

    return (
        <aside className="main-content">
            <div className="page">
                {/* datepicker 47-80*/}
            <Datepicker
            inputComponent="input"
            controls={['calendar', 'timegrid']}
            min="2023-02-03T00:00"
            max="2023-08-03T00:00"
            minTime="08:00"
            maxTime="19:59"
            stepMinute={60}
            labels={myLabels}
            invalid={myInvalid}
            inputProps={{
                services:"services"
            }}
            display="anchored"
            selectMultiple={false}
            responsive={{
                xsmall: {
                    controls: ['calendar'],
                    display: 'bottom',
                    touchUi: true
                },
                small: {
                    controls: ['calendar'],
                    display: 'anchored',
                    touchUi: true
                },
                custom: { // Custom breakpoint
                    breakpoint: 800,
                    controls: ['calendar'],
                    display: 'anchored',
                    touchUi: false
                }
            }}
            />
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
                                    {/* <div className="col-12"> */}
                                        {/* <select className="form-select" id="description" aria-label="Default select example"> */}
                                            {/* <option selected>Select Service</option> */}

                                        {/* still working on the code here which allows for drop down of services */}
                                            {/* <option value={service.id}></option> */}
                                            
                                        {/* </select> */}
                                    {/* </div> */}
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
            </div>
        </aside>
    );
};