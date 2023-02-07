import React from 'react';
import { useMutation } from '@apollo/client';

import { DELETE_SERVICE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const ServiceList = ({services}) => {

  const [deleteService, { error }] = useMutation (DELETE_SERVICE);

  const handleDeleteService = async (serviceId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      const {data} = await deleteService({
        variables: { serviceId }
      });
      window.location.reload();
      console.log(data)

    }catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card-container">
      {services.map((service) =>
      (<div className="card" key={service._id}>
        <img src={require(`../../pages/images/${service.image}`)} className="card-img-top" alt="Service Placeholder"></img>
          <div className="card-body">
            <h5 className="card-title"><strong>{service.name}</strong></h5>
            <div className="card-text">
              <ul>
                <li key={service.description}>Description: {service.description}</li>
                <li key={service.duration}>Duration: {service.duration}</li>
                <li key={service.price}>Price: {service.price}</li>
              </ul>
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-sm mt-2 delete" onClick= {() => handleDeleteService(service._id)} id="delete">DELETE</button>
            </div>
          </div> 
      </div>)     
      )}
       {/* error message collected once the mutation was invoked above */}
       {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
    </div>
  );
};

export default ServiceList;