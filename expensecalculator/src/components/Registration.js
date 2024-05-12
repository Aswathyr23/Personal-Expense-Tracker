import React, { useState } from 'react';
import './Registration.css'; // Import corresponding CSS file
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Registration() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile_No, setMobileNo] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  const Navigate= useNavigate()

  const Registration = async (e) => {
    e.preventDefault();

      const body = {
        Name,
        Email,
        Mobile_No,
        Password,
      };
      try{
        const result = await axios.post("http://localhost:8000/Registration",body);
        alert(result.data.message);
        Navigate('/Signin')
        }
        catch(error){
       
            alert(error.response.data.message)
                      
        }
     
    };

  return (
    <div className="container">
      <h1>Registration</h1>
      <form onSubmit={Registration}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No:</label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            value={Mobile_No}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={Registration}>Register</button>
      </form>
    </div>
  );
}

export default Registration;
