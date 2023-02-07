<<<<<<< HEAD
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const User = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || [];
  console.log(userData)

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <aside className="main-content">
      <div>
      <h3>Hello {userData.name} <br></br>
      Listing of your appointments</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Service</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {userData.appts.map((me) => {
            return (
              <tbody>
                <tr>
                  <th scope="row" key={me._id}>
                    {me.date}
                  </th>
                  <td>{me.time}</td>
                  <td>{me.service.name}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        </div>
        <p>If you need to cancel your appointment please reach out directly via Phone. Thank you!</p>
    </aside>
  );
};

export default User;
=======
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const User = () => {
//   const { name: userParam } = useParams();

//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { name: userParam },
//   });

//   const user = data?.me || data?.user || {};
//   // navigate to personal profile page if name is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.name === userParam) {
//     return <Navigate to="/user" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.name) {
//     return (
//         <aside className="main-content">
//             <h4>
//                 You need to be logged in to see this. Please sign up or log in!
//             </h4>
//         </aside>
//     );
//   }

  return (
    <aside className="main-content">
        <h3>Upcoming Appointments</h3>
        <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col" >Date</th>
                <th scope="col" >Time</th>
                <th scope="col" >Service</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Test</th>
                <td>Test</td>
                <td>Test</td>
                </tr>
            </tbody>
        </table>
</aside>
  );
};
// import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

// const User = () => {
// //   const { name: userParam } = useParams();

// //   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
// //     variables: { name: userParam },
// //   });

// //   const user = data?.me || data?.user || {};
// //   // navigate to personal profile page if name is yours
// //   if (Auth.loggedIn() && Auth.getProfile().data.name === userParam) {
// //     return <Navigate to="/user" />;
// //   }

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (!user?.name) {
// //     return (
// //         <aside className="main-content">
// //             <h4>
// //                 You need to be logged in to see this. Please sign up or log in!
// //             </h4>
// //         </aside>
// //     );
// //   }

//   return (
//     <aside className="main-content">
//         <h3>Upcoming Appointments</h3>
//         <table className="table table-bordered">
//             <thead>
//                 <tr>
//                 <th scope="col" >Date</th>
//                 <th scope="col" >Time</th>
//                 <th scope="col" >Service</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                 <th scope="row">Test</th>
//                 <td>Test</td>
//                 <td>Test</td>
//                 </tr>
//             </tbody>
//         </table>
// </aside>
//   );
// };

export default User;
>>>>>>> ffd3a4eb1699351db584c77901ec8c076eb7e10b
