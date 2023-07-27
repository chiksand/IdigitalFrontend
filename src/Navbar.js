import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">Our-App</div>
        <div className="navbar-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbar-buttons">
          <NavLink to="/login" className="login-button">Login/SignUp</NavLink>
          <NavLink to="/logout" className="login-button">Logout</NavLink>
          
          {/* <button className="signup-button">Signup</button> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
