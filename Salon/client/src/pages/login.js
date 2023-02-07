import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ 
    email: '', 
    password: '', 
    name: '' 
  });

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
      } 
      window.location.href ='/user';
    };

return (
  <aside className="main-content">
    <div className="page">
      <form className="login-form" onSubmit={LoginSubmit}>            
        <div className="mb-3">
          <h3>Login</h3>

          <label htmlFor="validationTooltipname" className="form-label">name</label>
          <input type="text" className="form-control" id="validationTooltipname" name="name" placeholder="name" aria-describedby="validationTooltipnamePrepend" required onChange={handleChange}/>    
        </div>

        <div className="mb-3">
          <label className="form-label">Provide Email</label>
          <input type="email" className="form-control" name="email" placeholder="name@example.com" id="signup-email" onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="signup-password" className="form-label">Password</label>
          <input 
          type="password" name="password"
          className="form-control" id="signup-password"onChange={handleChange}/>
        </div>                 
        <div className="mb-3 form-check">
          <Link to="/signup">Do not have an account? Go here to sign up</Link>  
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </aside>
  );
};

export default Login;