import React from 'react';
import '../pages/styles/style.css'
import { Link } from "react-router-dom";

export default function Header(){

return (

        <div className="text-center header">

            <h1>Welcome to CC's Salon</h1>
            <div className="slogan-box">
                <br></br>
            <p className="slogan">Your Hair Beauty, Our Duty</p>
        <Link className="shop" to="/">
            <br></br>
          <span role="img" aria-label="shopping bag">🛍️</span>
          -Shop-Shop
        </Link>
        </div>
    </div>
    )
}