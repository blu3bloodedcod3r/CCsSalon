import React from 'react';
import { services } from './Services';
import './styles/style.css'


export default function Service() {

    

    return (
        <aside className="main-content">
            <div className="card-container">
            {services.map(service => 
                (<div className="card" key={service.id}>
                    <img src={service.image} className="card-img-top" alt="Service Placeholder"></img>
                        <div className="card-body">
                            <h5 className="card-title"><strong>{service.name}</strong></h5>
                            <p className="card-text">
                                <ul>
                                    <li>Description: {service.description}</li>
                                    <li>Duration: {service.duration}</li>
                                    <li>Price: {service.price}</li>
                                </ul>
                            </p>
                        <a href="/appointment" className="btn btn-primary">Reserve an appointment now</a>
                    </div> 
                </div>)
                )}
            </div>
        </aside>
    )
};