import React from 'react';
import user from '../Assets/user.jpg'
import './Profile.css';
import Accountnavbar from './Accountnavbar' 
import Updatepassword from './Updatepassword'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Profile = () => {

    const currentuseremail=(JSON.parse(localStorage.getItem("currentuseremail") || " "))
    const currentuser=(JSON.parse(localStorage.getItem("currentuser") || " "))
  return (
    <div>
      <Accountnavbar/>
      <div className="profile-container">
        <img src={user} alt='user'></img>

        <div className="profile-info">
          <div className="profile-name">{currentuser}</div>
          <div className="profile-email">{currentuseremail}</div>
        </div>
        <Link to='/Updatepassword' className="button">Edit Profile</Link>
        
      </div>
    </div>
  );
};
export default Profile