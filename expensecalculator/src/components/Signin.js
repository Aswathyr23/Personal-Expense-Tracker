import React, { useState } from 'react';
import './Signin.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin=()=> {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  let navigate= useNavigate()

const Signin = async (e) => {
  e.preventDefault();
    const body = {
        Email,
        Password
    };
    try{
    const result = await axios.post("http://localhost:8000/Signin",body);
      console.log(result);
      localStorage.setItem("currentuser",JSON.stringify(result.data.currentuser))
      localStorage.setItem("currentuseremail",JSON.stringify(result.data.currentemail))
      navigate('/Profile')
    }        
    catch(error){       
    alert(error.response.data.message)
    console.log(error.response.data.message);
    }
  }
  return (
    <div className="container">
      <h1>SIGN IN</h1>
      <form onSubmit={Signin}>
        <div className="form-element">
          <label>Email/Mobile No:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <label>Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="toggle-password" onClick={handleTogglePassword}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
        </div>
        <button type="submit" className='button-login' onClick={Signin}>Login</button><br/>
        <Link to='/Forgotpassword' className="button-forgotpassword">Forgot password ?</Link>
      </form>
    </div>
  );
}
export default Signin;