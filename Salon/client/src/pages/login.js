import {React, useState } from 'react';

export default function Login() {

    const [PW, setPW] = useState("");
    const [email, setEmail] = useState("");
    const [Username, setUsername] = useState("");

    const LoginSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching for signing up");
    setPW("");
    setEmail("");
    setUsername("");
    }

return (
    <aside className="main-content">
        <div className="page">
            <form className="login-form" onSubmit={LoginSubmit}>            
            <div className="mb-3">
                    <h3>Sign Up</h3>
                    <label className="form-label">Provide Email</label>
                    <input type="email" className="form-control" placeholder="name@example.com" id="login-email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="validationTooltipUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required value={Username} onChange={(e) => setUsername(e.target.value)}></input>
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
    </aside>
    );
};