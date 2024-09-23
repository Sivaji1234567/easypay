import React from 'react'
import './Processor.css'
import { Link ,useNavigate} from 'react-router-dom';
function Processor() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clearing tokens)
    navigate('/signin'); // Navigate to the login page
  };
  return (
    <div>
      <div className='nav'>
      <div className='child1'><Link to="/processerhome">HOME</Link></div>
        <div className='child'><Link to="/calculate-payroll">CALCULATE PAYROLL</Link></div>
        <div className='child'><Link to="/verify-payroll">VERIFY PAYROLL</Link></div>
        <div className='child'><Link to="/manage-benefits">MANAGE BENEFITS</Link></div>
        <div className='child'><Link to="/processor-payments">PROCESS PAYMENTS</Link></div>
        <div className='child'><Link to="/processor-paystubs">VIEW PAYSTUBS</Link></div>
        <div className='child'><Link to="/processor-leave">REQUEST LEAVE</Link></div>
        <div className='child4'>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Processor;
