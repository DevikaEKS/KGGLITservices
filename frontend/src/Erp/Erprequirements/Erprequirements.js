import React from 'react'
import "./Erprequirements.css"
import req1 from "../Asset/req1.png";
import req2 from "../Asset/req2.png";
import req3 from "../Asset/req3.png";
import req4 from "../Asset/req4.png";
import req5 from "../Asset/req5.png";
import req6 from "../Asset/req6.png";
import req7 from "../Asset/req7.png";

function Erprequirements() {
  return (
    <>
    <div className='container-fluid  d-flex flex-column justify-content-center align-items-center d-none d-md-block' style={{ minHeight: '100vh' }}>
<h2 className='text-center customparagraph pt-4'>Customization Is Tailored To Meet</h2>
<h4 className='text-center erpheading4 py-2'>The Specific Requirements Of Each ERP Module</h4>
      <div className='row justify-content-center text-center mx-5'>
      <div className='col-sm-12 col-md-6 col-lg-3'>
  <div className='card border-0 p-2 m-2 erpreqirementscard d-flex flex-column justify-content-center align-items-center '>
    <div className='card-content'>
      <img src={req1} className='reqimg' alt='Finanace and Accounting' />
      <h4 className='py-3 financetext'>Finanace and Accounting</h4>
    </div>
    <ul className='hover-content d-flex flex-column justify-content-center ps-4'>
    <li>Financial statements</li>
    <li>Taxation and compliances</li>      
    <li>Journal entry</li>
    <li>Accounting dimensions</li>
    <li>AP and AR</li>
    <li>Customizable GL</li>
    <li>Cost centers, Budgets</li>
    <li>Payment and Bank reconciliation</li>
    <li>Asset management</li>
    </ul>
  </div>
</div>
        <div className='col-sm-12 col-md-6 col-lg-3'>
          <div className='card border-0 p-5 m-2 erpreqirementscard d-flex flex-column justify-content-center align-items-center'>
          <div className='card-content'>
          <img src={req2} className='reqimg' alt='Manufacturing'/>
            <h4 className='py-3 financetext'>Manufacturing</h4>
            </div>
            <ul className='hover-content d-flex flex-column justify-content-center ps-4'>
    <li>Multi-level BOM</li>
    <li>Production planning</li>      
    <li>Capacity planning</li>
    <li>Work order assignment</li>
    <li>Workstation, Operations, Routing</li>
    <li>Make-to-order, Make-to-stock</li>
    <li>Engineering manufacturing</li>
    <li>Subcontracting</li>
    <li>Quality inspection</li>
    </ul>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3'>
          <div className='card border-0 p-5 m-2 erpreqirementscard d-flex flex-column justify-content-center align-items-center'>
          <div className='card-content'>
          <img src={req3} className='reqimg' alt='Sales and CRM'/>
          <h4 className='py-3 financetext'>Sales and CRM</h4>
          </div>
          <ul className='hover-content d-flex flex-column justify-content-center ps-4'>
    <li>Lead and Opportunity</li>
    <li>Multi-territory sales</li>      
    <li>SLA management</li>
    <li>Quotation, Order, Contract</li>
    <li>Price lists, price rules</li>
    <li>Promotions, discount</li>
    <li>POS, Warranty, and AMC</li>
    <li>Customer newsletters</li>
    <li>Dropshipping</li>
    <li>Billing and Invoice</li>
    </ul>
           
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3'>
          <div className='card border-0 p-5 m-2 erpreqirementscard d-flex flex-column justify-content-center align-items-center'>
          <div className='card-content'>
          <img src={req4} className='reqimg' alt='Stock'/>
            <h4 className='py-3 financetext'>Stock</h4> 
            </div>
            <ul className='hover-content d-flex flex-column justify-content-center ps-4'>
              <li>Item management: Group, Variants</li>
              <li>Alternates, HSN, Price lists, rules</li>
              <li>Shelf life, Batch, and Serial</li>
              <li>Warehouse bin management</li>
              <li>Picklists</li>
              <li>Automatic stock replenishment</li>
              <li>UoM conversion, Landed cost</li>
            </ul>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3'>
          <div className='card border-0 p-5 m-2 erpreqirementscard d-flex flex-column justify-content-center align-items-center'>
          <div className='card-content'>
          <img src={req5} className='reqimg' alt='Procurement'/>
            <h4 className='py-3 financetext'>Procurement</h4>
            </div>
<ul className='hover-content d-flex flex-column justify-content-center ps-4'>
  <li>Purchase planning</li>
  <li>RFP, Supplier quotation, requisition</li>
  <li>PO, GRN, Purchase Invoice</li>
  <li>Vendor portal and onboarding</li>
  <li>Supplier scorecards</li>
  <li>Subcontracted purchase</li>
</ul>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3'>
  <div className='card border-0 p-2 m-2 erpreqirementscard d-flex flex-column justify-content-center align-items-center position-relative'>
    <div className='card-content'>
      <img src={req6} className='reqimg' alt='Project Management and Support' />
      <h4 className='py-3 financetext'>Project Management and Support</h4>
    </div>
    <ul className='hover-content d-flex flex-column justify-content-center ps-4'>
      <li>Task Management</li>
      <li>Gantt Charts</li>
      <li>Resource Allocation</li>
      <li>Time Tracking</li>
      <li>File Sharing, Collaboration Tools</li>
      <li>Project-based stock tracking</li>
      <li>Milestone-based Billing</li>
    </ul>
  </div>
</div>

        <div className='col-sm-12 col-md-6 col-lg-3'>
          <div className='card border-0 p-5 m-2 erpreqirementscard d-flex flex-column justify-content-center align-items-center'>
          <div className='card-content'>
          <img src={req7} className='reqimg' alt='HR and Payroll'/>
            <h4 className='py-3 financetext'>HR and Payroll</h4>
            </div>
            <ul className='hover-content d-flex flex-column justify-content-center ps-4'>
              <li>Documents Management</li>
              <li>Attendance Management</li>
              <li>Leave Management</li>
              <li>Payroll Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className='container-fluid d-block d-md-none py-5'>
    <h2 className='text-center customparagraph'>Customization is Tailored to Meet</h2>
    <h4 className='text-center erpheading3 py-2'><b>The Specific Requirements of Each ERP Module</b></h4>
  

<div className='card cardserp position-relative'>
  <div className='imgbx'>
    <img src={req1} alt="Finance and Marketing" className='sticky-image' />
  </div>
  <h5 className="finance-text">Finance <br />& Marketing</h5>
  <ul className="feature-list px-2">
    <li>Financial statements</li>
    <li>Taxation and compliances</li>
    <li>Journal entry</li>
    <li>Accounting dimensions</li>
    <li>AP and AR</li>
    <li>Customizable GL</li>
    <li>Cost centers, Budgets</li>
    <li>Payment and Bank reconciliation</li>
    <li>Asset management</li>
  </ul>
</div>




<div className='card cardserp position-relative'>
  <div className='imgbx'>
    <img src={req2} alt="Manufacturing" className='sticky-image' />
  </div>
  <h5 className="finance-text">Manufacturing</h5>
  <ul className="feature-list px-2">
  <li>Multi-level BOM</li>
    <li>Production planning</li>      
    <li>Capacity planning</li>
    <li>Work order assignment</li>
    <li>Workstation, Operations, Routing</li>
    <li>Make-to-order, Make-to-stock</li>
    <li>Engineering manufacturing</li>
    <li>Subcontracting</li>
    <li>Quality inspection</li>
  </ul>
</div>
<div className='card cardserp position-relative'>
  <div className='imgbx'>
    <img src={req3} alt="Sales and CRM" className='sticky-image' />
  </div>
  <h5 className="finance-text">Sales & CRM</h5>
  <ul className="feature-list px-2">
  <li>Lead and Opportunity</li>
    <li>Multi-territory sales</li>      
    <li>SLA management</li>
    <li>Quotation, Order, Contract</li>
    <li>Price lists, price rules</li>
    <li>Promotions, discount</li>
    <li>POS, Warranty, and AMC</li>
    <li>Customer newsletters</li>
    <li>Dropshipping</li>
    <li>Billing and Invoice</li>
  </ul>
</div>
<div className='card cardserp position-relative'>
  <div className='imgbx'>
    <img src={req4} alt="Stock" className='sticky-image' />
  </div>
  <h5 className="finance-text">Stock</h5>
  <ul className="feature-list px-2">
  <li>Item management: Group, Variants</li>
              <li>Alternates, HSN, Price lists, rules</li>
              <li>Shelf life, Batch, and Serial</li>
              <li>Warehouse bin management</li>
              <li>Picklists</li>
              <li>Automatic stock replenishment</li>
              <li>UoM conversion, Landed cost</li>
  </ul>
</div>
<div className='card cardserp position-relative'>
  <div className='imgbx'>
    <img src={req5} alt="Procurement" className='sticky-image' />
  </div>
  <h5 className="finance-text">Procurement</h5>
  <ul className="feature-list px-2">
  <li>Purchase planning</li>
  <li>RFP, Supplier quotation, requisition</li>
  <li>PO, GRN, Purchase Invoice</li>
  <li>Vendor portal and onboarding</li>
  <li>Supplier scorecards</li>
  <li>Subcontracted purchase</li>
  </ul>
</div>
<div className='card cardserp position-relative'>
  <div className='imgbx'>
    <img src={req6} alt="Project Management and Support" className='sticky-image' />
  </div>
  <h5 className="finance-text">Project Management <br/> & Support</h5>
  <ul className="feature-list px-2">
  <li>Task Management</li>
      <li>Gantt Charts</li>
      <li>Resource Allocation</li>
      <li>Time Tracking</li>
      <li>File Sharing, Collaboration Tools</li>
      <li>Project-based stock tracking</li>
      <li>Milestone-based Billing</li>
  </ul>
</div>
<div className='card cardserp position-relative'>
  <div className='imgbx'>
    <img src={req7} alt="HR and Payroll" className='sticky-image' />
  </div>
  <h5 className="finance-text">HR & Payroll</h5>
  <ul className="feature-list">
  <li>Documents Management</li>
   <li>Attendance Management</li>
   <li>Leave Management</li>
   <li>Payroll Management</li>
  </ul>
</div>


    </div>
    </>
  )
}

export default Erprequirements

