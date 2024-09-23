import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employee from './Employee/Employee';
import Home from './Employee/Home';
import Profile from './Employee/Profile';
import RequestLeave from './Employee/RequestLeave';
import ViewPaystubs from './Employee/ViewPaystubs';
 import Signin from './Signin';
 import Admin from './Admin/Admin';
 import AdminHome from './Admin/AdminHome';
import ManageUser from './Admin/ManageUser';
import PayrollPolicies from './Admin/PayrollPolicies';
import Payroll from './Admin/Payroll';
import ComplianceReports from './Admin/ComplianceReports';
import ManageEmployee from './Admin/ManageEmployee';
import AdviewPaystubs from './Admin/AdviewPaystubs';
import AdRequestLeave from './Admin/AdRequestLeave';
import Processor from './Processor/Processor';
import ProHome from  './Processor/ProHome'
import VerifyPayroll from './Processor/VerifyPayroll'
import CalculatePayroll from './Processor/CalculatePayroll';
import ManageBenefits from './Processor/ManageBenefits';
import ProcessPayments from './Processor/ProcessPayments'
import PrviewPaystubs from './Processor/PrviewPaystubs';
import PrRequestLeave from './Processor/PrRequestLeave';
function App() {
  return (
    <Router>
      {/* <Employee /> */}
       {/* <Admin/> */}
      <Processor/>
{/* <Signin/> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/admin"   element={<Admin />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/request-leave" element={<RequestLeave />} />
        <Route path="/view-paystubs" element={<ViewPaystubs />} />
        <Route path="/signin" element={<Signin/>} />
        {/*  */}
        {/* Admin routes */}
        <Route path="/Adminhome" element={<AdminHome />} />
        <Route path="/manage-user" element={<ManageUser />} />
        <Route path="/payroll-policies" element={<PayrollPolicies />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/compliance-reports" element={<ComplianceReports />} />
        <Route path="/manage-employee" element={<ManageEmployee />} />
        <Route path="/Admin-paystubs" element={<AdviewPaystubs />} />
        <Route path="/Admin-leave" element={<AdRequestLeave />} />
        {/*  */}
        {/* processor routes */}
        <Route path="/processorhome" element={<ProHome />} />
        <Route path="/calculate-payroll" element={<CalculatePayroll/>} />
        <Route path="/verify-payroll"   element={<VerifyPayroll />}/>
        <Route path="/manage-benefits" element={<ManageBenefits />} />
        <Route path="/processor-payments" element={<ProcessPayments />} />
        <Route path="/processor-paystubs" element={<PrviewPaystubs />} />
        <Route path="/processor-leave" element={<PrRequestLeave />} />
      </Routes>
    </Router>
  );
}

export default App;
