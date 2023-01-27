import React from 'react';
import { products } from './products';

export default function Product() {

    const product = products[0]

    return (
        <div className="card">
            <img src={products.image} className="card-img-top" alt="Service Picture Placeholder"></img>
                <div className="card-body">
                    <h5 className="card-title"><strong>{products.name}</strong></h5>
                    <p className="card-text">
                        <ul>
                            <li>Description: {products.description}</li>
                            <li>Duration: {products.duration}</li>
                            <li>Price: {products.price}</li>
                        </ul>
                    </p>
                <a href="/book" className="btn btn-primary">Reserve an appointment now</a>
            </div> 
        </div>
    )
};