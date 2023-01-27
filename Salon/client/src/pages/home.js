import React from 'react';

export default function Product(product) {

    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt="Service Picture Placeholder"></img>
                <div className="card-body">
                    <h5 className="card-title"><strong>{product.name}</strong></h5>
                    <p className="card-text">
                        <ul>
                            <li>Description: {product.description}</li>
                            <li>Duration: {product.duration}</li>
                            <li>Price: {product.price}</li>
                        </ul>
                    </p>
                <a href="/book" className="btn btn-primary">Reserve an appointment now</a>
            </div> 
        </div>
    )
};