import React from 'react';

export default function Appointments() {

    var picker = new AppointmentPicker(document.getElementById('time-1'), {
        interval: 60,
        mode: '12h',
        minTime: 9,
        maxTime: 19,
        startTime: 9,
        endTime: 19,
        disabled: ['16:30', '17:00'],
        templateInner: '<li class="appo-picker-list-item {{disabled}}"><input type="button" tabindex="-1" value="{{time}}" {{disabled}}></li>',
        templateOuter: '<span class="appo-picker-title">{{title}}</span><ul class="appo-picker-list">{{innerHtml}}</ul>'
    });
    
    document.getElementById('time-1').addEventListener('click', function() {
        picker.open();
    })
    
    
    const apptForm = document.getElementById("apptForm");
    
    
    async function newAppointment(event) {
        event.preventDefault();
        console.log('inside newAppointment')
        const email = document.getElementById("email").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time-1").value;
        const service = document.getElementById("description").value.trim();
        const msg = document.getElementById('message').value.trim()
    
        console.log(email, date, time, service, msg)
        console.log(JSON.stringify({email, date}))
        // carynjames16@gmail.com 2022-11-27 11:00 am, etc.
        // {"email":"carynjames16@gmail.com","date":"2022-11-27", etc.}
    
        // Packaged into an object from the front end to the backend
        const response = await fetch('/api/appointment', {
        method: 'POST',
        body: JSON.stringify({
            email, 
            date,
            time,
            service, 
            msg
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        
        if (response.ok) {
        document.location.replace('/book/confirmation') 
        } else {
        alert('Failed to add appointment')
        }
    }
    
    apptForm.addEventListener("submit", newAppointment)
    
    
    
    const postAppt = (appt) =>
    fetch('/book', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(appt),
    })
        .then((res) => res.json())
        .then((data) => {return data})
        .catch(() => console.error("Error in POST request"));
    
    
    // Create the event listener. 
    apptForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get the value and save it as a variable
    // When outside fo the event listener, the variables hold no value
    // Code was already run and didn't get value 
    // Without value it returns the html line
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value.trim();
    const time = document.getElementById("time-1").value.trim();
    const service = document.getElementById("description").value.trim();
    const msg = document.getElementById('message').value.trim()
    
    // Create an object
    const newAppt = {
        email: email,
        date: date,
        time: time,
        // service: service,
        // message: msg
    };
    console.log(newAppt)
    
    // Make a POST request to the server
    postAppt(newAppt)
        .catch((err) => console.error(err));
    });
    
  }