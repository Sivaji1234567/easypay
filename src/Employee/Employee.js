import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Employee.css';

function Employee() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clearing tokens)
    navigate('/'); // Navigate to the login page
  };

  return (
    <div> 
      <h1 style={{textAlign:"center"}}>Employee Management</h1>
      <div className='nav'>
        <div className='child'><Link  style={{color:"white"}}to="/home">HOME</Link></div>
        <div className='child'><Link style={{color:"white"}}to="/profile">PROFILE</Link></div>
        <div className='child'><Link style={{color:"white"}}to="/request-leave">REQUEST LEAVE</Link></div>
        <div className='child'><Link style={{color:"white"}}to="/view-paystubs">VIEW PAYSTUBS</Link></div>
        <div className='gap'></div>
        <div className='child4'>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Employee;
