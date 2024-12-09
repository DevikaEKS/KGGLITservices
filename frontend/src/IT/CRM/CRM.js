import React from 'react';
import "./CRM.css";
import crmim1 from "../Asset/imcrm.png";
import crmlogo1 from "../Asset/salescrm.png";
import crmlogo2 from "../Asset/whitecrm.png";

function CRM() {
  return (
    <div className='container-fluid text-center crmpart'>
      <div className='row mx-sm-0 mx-md-3'>
        <h1 className='crmhead my-4'>CRM (Customer Relationship Management)</h1>
        <p>Our CRM solutions are designed to streamline your customer interactions, increase sales, and improve customer satisfaction. We offer customized CRM systems that adapt to the unique needs of your business, enabling you to manage relationships, track customer behavior, and analyze data for better decision-making.</p>
<div className='row d-none d-md-block mx-auto'>
 <div className='d-flex justify-content-evenly'>
  <div className='crmcard d-flex  align-items-center justify-content-center my-2  p-4 mx-2'>
    <img src={crmlogo1} alt='Sales CRM' className='px-3'/>
    <h5>Sales CRM</h5>
  </div>

  <div className='crmcard crmcard1 d-flex align-items-center justify-content-center my-2 p-4 mx-2'>
    <img src={crmlogo2} alt='Sales CRM' className='px-3'/>
    <h5>Service CRM</h5>
  </div>

  <div className='crmcard d-flex align-items-center justify-content-center my-2 p-4 mx-2'>
    <img src={crmlogo1} alt='Sales CRM' className='px-3'/>
    <h5>Support CRM</h5>
  </div>
  </div>
</div>



<div className='d-block d-md-none'>
<div className='d-flex flex-column  justify-content-center align-items-center py-5 flex-wrap'>
  <div className='crmcard d-flex align-items-center justify-content-center my-2 p-4 mx-2'>
    <img src={crmlogo1} alt='Sales CRM' className='px-2'/>
    <h5>Sales CRM</h5>
  </div>
  <div className='crmcard crmcard1 d-flex align-items-center justify-content-center my-2 p-4 mx-2'>
    <img src={crmlogo2} alt='Service CRM' className='px-2'/>
    <h5>Service CRM</h5>
  </div>
  <div className='crmcard d-flex align-items-center justify-content-center my-2 p-4 mx-2'>
    <img src={crmlogo1} alt='Support CRM' className='px-2'/>
    <h5>Support CRM</h5>
  </div>
</div>
</div>



        <div className='col-sm-12 col-lg-6 my-5'>
          <img src={crmim1} className='crim1' alt='CRM Solutions'/>
        </div>
        <div className='col-sm-12 col-lg-6 my-5'>
          <h1>Why Choose Our CRM Solutions?</h1>
          <div>
            <div className='row'>
              <div className='col-sm-12 col-lg-6'>
                <p className='card p-2 itcrd'>Personalized Systems</p>
              </div>
              <div className='col-sm-12 col-lg-6'>
                <p className='card p-2 itcrd'>Seamless Integration</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 col-lg-6'>
                <p className='card p-2 itcrd'>Data-Driven Decisions</p>
              </div>
              <div className='col-sm-12 col-lg-6'>
                <p className='card p-2 itcrd'>Boost Efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CRM;
