import {React, useState } from 'react';

export default function Login() {

    const [PW, setPW] = useState("");
    const [email, setEmail] = useState("");

    const LoginSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching for signing up");
    setPW("");
    setEmail("");
    }

return (
    <div className="page">
        <form className="login-form" onSubmit={LoginSubmit}>            
        <div className="mb-3">
                <h3>Sign Up</h3>
                <label className="form-label">Provide Email</label>
                <input type="email" className="form-control" placeholder="name@example.com" id="login-email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className="mb-3">
                <label for="signup-password" className="form-label">Password</label>
                <input type="password" className="form-control" id="login-password" value={PW} onChange={(e) => setPW(e.target.value)}></input>
            </div>
                        
            <div className="mb-3 form-check">
                <a href="/signup">Do not have an account? Go here to sign up!</a>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    );
};