import React from 'react';
import "./Featureserp.css";
function Featureserp() {
  return (
    <div className='container featurespart'>
      <h1 className='text-center erpheading1 py-2'>Key Features</h1>
      <div className='row'>
        <div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 billscard'>
            <h4 className='text-start p-3 fw-bold'>Bill of Materials (BOM)</h4>
            <p className='revolutiontxt'>Manage materials, operations, costs, and real-time production tracking.</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 helpcard '>
            <h4 className='text-start fw-bold'>Helpdesk & Support</h4>
            <p className='revolutiontxt'>Manage support tickets, emails, and create a self-service portal.</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 invoicecard'>
            <h4 className='text-start fw-bold'>Billing & Invoicing</h4>
            <p className='revolutiontxt'>Monitor receivables, profitability, and real-time product performance.</p>
          </div>
        </div>

        <div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 billscard'>
            <h4 className='text-start fw-bold'>CRM & Sales</h4>
            <p className='revolutiontxt'>Track leads, quotes, and orders while automating alerts and processes for efficient deal closure.</p>
          </div>
        </div>

        <div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 hrcard'>
            <h4 className='text-start fw-bold'>HR & Payroll</h4>
            <p className='revolutiontxt'>Simplify leave, expenses, payroll, recruitment, and appraisals with accounting integration.</p>
          </div>
        </div>
        
        <div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 multistorecard'>
            <h4 className='text-start fw-bold'>Sales & Purchase</h4>
            <p className='revolutiontxt'>Track leads, quotations, and purchases while automating inventory and accounting updates.</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 helpcard'>
            <h4 className='text-start fw-bold'>Production Orders</h4>
            <p className='revolutiontxt'>Monitor production, material movements, and timesheets with seamless BOM and inventory integration</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 multistorecard'>
            <h4 className='text-start fw-bold'>Multi-Store Management</h4>
            <p className='revolutiontxt'>Centrally manage operations, reports, and communication across branches.</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 poscard '>
            <h4 className='text-start fw-bold'>Point of Sale (POS)</h4>
            <p className='revolutiontxt'>Offline-ready POS linked to billing, inventory, and payments.</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-3'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 projectcard'>
            <h4 className='text-start fw-bold'>Projects & Timesheets</h4>
            <p className='revolutiontxt'>Link tasks, budgets, and payroll for complete project and billing insights.</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-8 col-lg-6'>
          <div className='card d-flex flex-column justify-content-center align-items-center p-3 hrcard'>
            <h4 className='text-start fw-bold'>Inventory Management</h4>
            <p className='revolutiontxt'>Handle warehouses, stock levels, batches, and automate procurement for optimal inventory.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featureserp;



