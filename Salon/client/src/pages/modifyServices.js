import React from 'react';

export default function modifyServcies(service) {
    return (
        <div class="card">
            <img src="/assets/{{filename}}" class="card-img-top" alt="Service Picture Placeholder">
            <div class="card-body">
                <h5 class="card-title"><strong>{user.name}</strong></h5>
                <p class="card-text">
                <ul>
                <li>Description: {service.description}</li>
                <li>Duration: {service.duration}</li>
                <li>Price: {service.price}</li>
                </ul>
                </p>
                <div class="col-md-4">
                <button class="btn btn-sm mt-2 delete" id="delete" service-id="{{id}}">DELETE</button>
                </div>
            </div> 
        </div>
    )
};