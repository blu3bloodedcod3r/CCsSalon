import {React, useState } from 'react';

export default function User(){
    return (
        <div className="flex-container">
            <div className="row">
            <div className="col-12 col-4">
                <section className="navsidebar navcontainer">
                    <ul className="links">
                        <li><a href="/">Home</a></li> 
                        <li><a href="/book">Book</a></li>
                        <li><a href="/admin">Appts</a></li>

                        <button className="no-button" id="logout">Logout</button>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </section>
            </div>
            </div>
        </div>
    )
}