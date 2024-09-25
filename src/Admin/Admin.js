import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css"; // You can style the navbar here
import AdRequestLeave from "./AdRequestLeave";
import AdviewPaystubs from "./AdviewPaystubs";
import AdminHome from "./AdminHome";
import ComplianceReports from "./ComplianceReports";
import ManageEmployee from "./ManageEmployee"
import ManageUser from "./ManageUser"
import PayrollPolicies from "./PayrollPolicies"

function Employee() {
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState("home");
  const navigate=useNavigate();
  const handleLogout=()=>{
    console.log("hello");
   navigate('/');
  }

  // Function to render the selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <AdminHome/>;
      case "request":
        return <AdRequestLeave />;
      case "reports":
        return <ComplianceReports/>;
      case "paystubs":
      return <AdviewPaystubs/>;
      case "manage_employee":
      return <ManageEmployee/>;
      case "manage_user":
      return <ManageUser/>;
      case "payroll_policies":
      return <PayrollPolicies/>;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <>
    <div className="head"> 
      <div><h1>Admin Management</h1></div>
      <div className="gap"></div>
    <div className="child2"><button className="btn" onClick={handleLogout}>Logout</button></div>
    </div>
   
    <div className="app">
      {/* Sidebar Navbar */}
      <div className="sidebar">
        <ul>
          <li onClick={() => setActiveComponent("home")}>Home</li>
          <li onClick={() => setActiveComponent("request")}>RequestLeave</li>
          <li onClick={() => setActiveComponent("paystubs")}>ViewPaystubs</li>
          <li onClick={() => setActiveComponent("reports")}>ComplianceReports</li>
          <li onClick={() => setActiveComponent("manage_employee")}>ManageEmployee</li>
          <li onClick={() => setActiveComponent("manage_user")}>ManageUser</li>
          <li onClick={() => setActiveComponent("payroll_policies")}>PayrollPolicies</li>
         
        </ul>
      </div>

      {/* Main content area */}
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
    </>
  );
}

export default Employee;
