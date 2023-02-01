import React from 'react';
import { services } from '../pages/Services'
import './styles/style.css'

export default function modifyServices() {

    const service = services[0]

    return (
        <aside className="main-content">

            <div class="row">
            <div class="col-12">
                <h3>Add a New Service:</h3>

            <form class="form new-service-form">
                <div class="mb-3 form-group">
                <label for="service-name" class="form-label">Name:</label>
                <input type="text" class="form-input form-control" id="service-name" name="service-name"></input>
                </div>
                <div class="mb-3 form-group">
                    <label for="exampleInputPassword1" class="form-label">Description:</label>
                    <input type="text" class="form-input form-control" id="description" name="description"></input>
                </div>
                <div class="mb-3 form-group">
                    <label for="exampleInputPassword1" class="form-label">Price:</label>
                    <input type="text" class="form-input form-control" id="price" name="price"></input>
                </div>
                <div class="mb-3 form-group">
                    <label for="exampleInputPassword1" class="form-label">Duration:</label>
                    <input type="text" class="form-input form-control" id="duration" name="duration"></input>
                </div>
                <div class="mb-3 form-group">
                    <label for="exampleInputPassword1" class="form-label">Filename:</label>
                    <input type="text" class="form-input form-control" id="filename" name="filename"></input>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn custom-btn mt-2" id="addservice">Add</button>
                </div>
            </form>
            </div>
            </div>

            <div className="card-container">
            {services.map(service =>
                    (<div className="card">
                    <img src={service.image} className="card-img-top" alt="Service Picture Placeholder"/>
                    <div className="card-body">
                        <h5 className="card-title"><strong></strong></h5>
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
                </div>)
                )}
            </div>
        </aside>
    )
};