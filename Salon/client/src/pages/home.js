import React from 'react';

export default function Service(service) {

    return (
        <div className="card">
            <img src={service.image} className="card-img-top" alt="Service Picture Placeholder"></img>
                <div className="card-body">
                    <h5 className="card-title"><strong>{service.name}</strong></h5>
                    <p className="card-text">
                        <ul>
                            <li>Description: {service.description}</li>
                            <li>Duration: {service.duration}</li>
                            <li>Price: {service.price}</li>
                        </ul>
                    </p>
                <a href="/book" className="btn btn-primary">Reserve an appointment now</a>
            </div> 
        </div>
    )
};