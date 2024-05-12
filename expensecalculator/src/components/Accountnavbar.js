import React from 'react';
import { Link } from 'react-router-dom';
import './Accountnavbar.css';
import Viewexpense from './Viewexpense';
import Viewincome from './Viewincome';
import Newexpense from './Newexpense';
import Newincome from './Newincome';

const Accountnavbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-buttons-right">
                <Link to='/Viewexpense' className="btn">Expense List</Link>
                <Link to='/Viewincome' className="btn">Income List</Link>

                {/* <Link to='/' className="btn">Dashbord</Link> */}
            </div>
            <div  className="navbar-buttons-right">
                <Link to='/Newexpense' className="btn">New Expense</Link>
                <Link to='/Newincome' className="btn">New Income</Link>
                <Link to='/Logout' className="btn">Logout</Link>
            </div>

        </nav>
    );
};

export default Accountnavbar;