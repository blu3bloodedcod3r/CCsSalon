import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = (props) => {


    const [formState, setFormState] = useState({ email: '', password: '', name: '' });
    const [login] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const LoginSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await login({
            variables: { ...formState },
          });
    
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        } window.location.href ='/';
      };

return (
    <aside className="main-content">
        <div className="page">
            <form className="login-form" onSubmit={LoginSubmit}>            
            <div className="mb-3">
                    <h3>Login</h3>
                    <label className="form-label">Provide Email</label>
                    <input type="email" className="form-control" placeholder="name@example.com" id="login-email" onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label for="validationTooltipname" className="form-label">name</label>
                    <input type="text" className="form-control" id="validationTooltipname" placeholder="name" aria-describedby="validationTooltipnamePrepend" required onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label for="signup-password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="login-password" onChange={handleChange}></input>
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

export default Login;