import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import '../../pages/styles/style.css'

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/home">
              Home
            </Link>
          </li>
          <li className="mx-1">
              <Link to="/services">
                Services
              </Link>
            </li>
          <li className="mx-1">
            <Link to="/appointments">
              Appointments
            </Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } 
    else {
      return (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/services">
                Services
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/signup">
                Signup
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/login">
                Login
              </Link>
            </li>
          </ul>
      );
    }
  }

  return (
      <nav>
        <section className="sidebar navcontainer">
          {showNavigation()}
        </section>
      </nav>
  );
}

export default Nav;
