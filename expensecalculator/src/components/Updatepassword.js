import React, { useState } from 'react';
import './Updatepassword.css'; // Import corresponding CSS file
import axios from 'axios';

const Updatepassword = () => {
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (Password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Send the form data to the server for updating the profile
    const formData = { Password };
    // You can send formData using fetch or axios to your server
    console.log('Form data:', formData);
  };


  const Updatepassword = async (e) => {
    e.preventDefault();
    const body = {
      Password
    };

    try {
      const result = await axios.post("http://localhost:8000/Updatepassword", body);
      console.log(result);
    } catch (error) {

      alert(error.response.data.message)

      console.log(error.response.data.message);

    }
  }
  return (
    <div className="update-password-container">
      <h1>UPDATE PASSWORD</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='button' onClick={Updatepassword}>UPDATE</button>
      </form>
    </div>
  );
}

export default Updatepassword;
