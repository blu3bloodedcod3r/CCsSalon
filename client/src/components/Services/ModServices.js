import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_SERVICES } from '../../utils/queries';

import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';

import '../../pages/styles/style.css'

const ModifyServices = () => {

  const { loading, data } = useQuery(QUERY_ALL_SERVICES);
  const services = data?.services || [];

   // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
  <aside className="main-content">
    <div className="row">
      <ServiceForm />
    </div>
    <div>
      <ServiceList services={services} />
    </div>
  </aside>
  );
};

export default ModifyServices;