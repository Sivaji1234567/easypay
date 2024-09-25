import React, { useState } from 'react'
import './Signin.css'
import { useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
   
  const handleLogin = () => {
  
    navigate('/employee'); 
  };
 console.log(user);
  return (
    <div className='total'>
      <div className='main'>
        <div className='heading'>Sign in</div>
        <div className='middle'><input  className="field" type="email" placeholder='Email'/></div>
        <div className='middle'><input className="field" type="Password" placeholder='Password'/></div>
        <div className='check'><input type="checkbox"/> Remember Password</div>
        <label>Select User Role:</label>
         <select value={user} onChange={e=>setUser(e.target.value)}>
        <option value="">--Select--</option>
        <option value="employee">Employee</option>
        <option value="admin">Admin</option>
        <option value="processor">Processor</option>
        <option value="manager">Manager</option>
      </select>
        <div className='login_div'><button className='login' onClick={handleLogin}>LOGIN</button></div>
        <div className='google_div'><button className='google'>SIGN IN WITH GOOGLE</button></div>
        <div className='facebook_div'><button className='facebook'>SIGN IN WITH FACEBOOK</button></div>
      </div>
    </div>
  )
}

export default Signin
