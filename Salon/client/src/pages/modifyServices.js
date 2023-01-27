import React from 'react';
import service from '../pages/Services'

export default function modifyServcies(service) {
    return (
        <div className="card">
            <img src="/assets/{{filename}}" className="card-img-top" alt="Service Picture Placeholder"/>
            <div className="card-body">
                <h5 className="card-title"><strong>{user.name}</strong></h5>
                <p className="card-text">
                <ul>
                <li>Description: {service.description}</li>
                <li>Duration: {service.duration}</li>
                <li>Price: {service.price}</li>
                </ul>
                </p>
                <div className="col-md-4">
                <button className="btn btn-sm mt-2 delete" id="delete" service-id="{id}">DELETE</button>
                </div>
            </div> 
        </div>
    )
};