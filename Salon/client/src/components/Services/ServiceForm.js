import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SERVICE } from '../../utils/mutations';
import Auth from '../../utils/auth';
import '../../pages/styles/style.css'

const ServiceForm = () => {
  const [serviceState, setServiceState] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    filename: '',
  });
  const [addService, { error }] = useMutation(ADD_SERVICE);

  const ServiceSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addService({
        variables: { ...serviceState },
      });
      window.location.reload();
      console.log(data)

      setServiceState({
        name: '',
        description: '',
        price: '',
        duration: '',
        filename: '',
      })
    } catch (err) {
      console.error(err);
    } 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('name value', name, value)
    setServiceState({
        ...serviceState,
        [name]: value,
      });
  };

  return (
    <div className="row">
      <h3>Add a New Service:</h3>
      {Auth.loggedIn() ? (
    
      <div className="col-12">
        <form className="form new-service-form" onSubmit={ServiceSubmit}>
        <div className="mb-3 form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input value={serviceState.name} type="text" className="form-input form-control" id="name" name="name" onChange={handleChange}/>
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="description" className="form-label">Description:</label>
          <input value={serviceState.description} type="text" className="form-input form-control" id="description" name="description" onChange={handleChange}/>
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="exampleInputPassword1" className="form-label">Price:</label>
          <input value={serviceState.price} type="text" className="form-input form-control" id="price" name="price" onChange={handleChange}/>
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="exampleInputPassword1" className="form-label">Duration:</label>
          <input value={serviceState.duration} type="text" className="form-input form-control" id="duration" name="duration" onChange={handleChange}/>
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="exampleInputPassword1" className="form-label">Image:</label>
          <input value={serviceState.image}type="text" className="form-input form-control" id="image" name="image" onChange={handleChange}/>
        </div>
        <div className="form-group">
           <button type="submit" className="btn custom-btn mt-2" id="addservice">Add</button>
        </div>
        </form>
      </div>
    
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
      {/* error message collected once the mutation was invoked above */}
      {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
    </div>
  );
}

export default ServiceForm