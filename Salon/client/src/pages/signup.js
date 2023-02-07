import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [addUser] = useMutation(ADD_USER);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('namevalue', name, value)
      setFormState({
        ...formState,
        [name]: value,
      });
  };
  
  const SignUpSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
  
    try {
      const { data } = await addUser({
         variables: { ...formState },
      });
      console.log('data', data)
      Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      } 
  };

return (
  <aside className="main-content">
    <div className="page">
      <form className="signup-form" onSubmit={SignUpSubmit}>            
        <div className="mb-3">
          <h3>Sign Up</h3>

          <label htmlFor="validationTooltipname" className="form-label">name</label>
          <input type="text" className="form-control" id="validationTooltipname" name="name" placeholder="name" aria-describedby="validationTooltipnamePrepend" required  onChange={handleChange}/>          
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
          <Link to="/login">Already have a login? Go here to Login!</Link>         
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </aside>
  );
};

export default Signup;