<StoreProvider>
<Nav />
<Routes>
  <Route 
    path="/" 
    element={<Home />} 
  />
  <Route 
    path="/login" 
    element={<Login />} 
  />
  <Route 
    path="/signup" 
    element={<Signup />} 
  />
  <Route 
    path="/appointment" 
    element={<Book />} 
  />
  <Route 
    path="/services" 
    element={<Services />} 
  />
  <Route
    path="/user" 
    element={<User />} 
  />
  {/* <Route 
    path="/modifyServices" 
    element={<modifyServices />} 
  /> */}
  <Route 
    path="/home" 
    element={<Home />} 
  />
  <Route 
    path="/admin" 
    element={<Admin />} 
  />
  <Route
    path="*" 
    element={<NoMatch />} 
  />
</Routes>
<div>
{/* inserted appoinment-picker stuff 93-99 */}
<h1>{ title }</h1>
<h2>Embed into a React component</h2>
<div>
    <label>Time</label>
    <AppoPicker></AppoPicker>
</div>
</div>,
</StoreProvider>


import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = (props) => {

    const [formState, setFormState] = useState({ email: '', password: '', name: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

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
    
        // clear form values
        setFormState({
          email: '',
          password: '',
          name: '',
        });
      };

return (
    <aside className="main-content">
        <div className="page">
            <form className="login-form" onSubmit={LoginSubmit}>            
            <div className="mb-3">
                    <h3>Sign Up</h3>
                    <label className="form-label">Provide Email</label>
                    <input type="email" className="form-control" placeholder="name@example.com" id="login-email" value={formState.email} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label for="validationTooltipname" className="form-label">name</label>
                    <input type="text" className="form-control" id="validationTooltipname" placeholder="name" aria-describedby="validationTooltipnamePrepend" required value={formState.name} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label for="signup-password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="login-password" value={formState.password} onChange={handleChange}></input>
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

// export default Login;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
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
                    <label className="form-label">Provide Email</label>
                    <input type="email" className="form-control" placeholder="name@example.com" id="signup-email" value={formState.email} onChange={handleChange}></input>
                </div>

                <div className="mb-3">
                    <label for="validationTooltipname" className="form-label">name</label>
                    <input type="text" className="form-control" id="validationTooltipname" placeholder="name" aria-describedby="validationTooltipnamePrepend" required value={formState.name} onChange={handleChange}></input>
                </div>

                <div className="mb-3">
                    <label for="signup-password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="signup-password" value={formState.password} onChange={handleChange}></input>
                </div>
                            
                <div className="mb-3 form-check">
                    <a href="/login">Already have a login? Go here to sign in!</a>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </aside>
    );
};

export default Signup;