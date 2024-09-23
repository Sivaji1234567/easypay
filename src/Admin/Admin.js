import React from 'react'
import './Admin.css'
import { Link ,useNavigate} from 'react-router-dom';
function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clearing tokens)
    navigate('/signin'); // Navigate to the login page
  };
  return (
    <div>
      <div className='nav'>
      <div className='child1'><Link to="/Adminhome">HOME</Link></div>
        <div className='child'><Link to="/manage-user">MANAGE USER</Link></div>
        <div className='child'><Link to="/payroll-policies">PAYROLL POLICIES</Link></div>
        <div className='child'><Link to="/payroll">PAYROLL</Link></div>
        <div className='child'><Link to="/compliance-reports">COMPLIANCE REPORTS</Link></div>
        <div className='child'><Link to="/manage-employee">MANAGE EMPLOYEE</Link></div>
        <div className='child'><Link to="/Admin-paystubs">VIEW PAYSTUBS</Link></div>
        <div className='child'><Link to="/Admin-leave">REQUEST LEAVE</Link></div>
        <div className='child4'>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Admin;
