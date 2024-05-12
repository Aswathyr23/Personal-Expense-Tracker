import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.jpg'
import './Navbar.css'; 
import Signin from './Signin';
import { BrowserRouter as Router } from 'react-router-dom';
import Registration from './Registration';

const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="navbar-brand">
        <img src= {logo} alt='logo' className='logo'></img>
          <span className="navbar-title">SpendMate</span>
        </div>
        <div className="navbar-buttons">
          <Link to='/Signin' className="btn">Sign In</Link>
          <Link to='/Registration' className="btn">Register Here</Link>

        </div>
    </nav>
  );
};

export default Navbar;


