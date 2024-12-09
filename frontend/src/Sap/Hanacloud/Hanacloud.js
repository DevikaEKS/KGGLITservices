import React from 'react';
import "./Hanacloud.css";
import cloudim1 from "../Asset/Frame.png";

function Hanacloud() {
  return (
    <div className='container-fluid py-3 hanabg'>
      <div className='container'>
        <div className='row'>
          <h4 className='text-center py-5 my-4 valuehead'>
            What makes the SAP S/4HANA Cloud Intelligent?
          </h4>
          <div className='col-sm-12 col-md-6 text-center text-lg-start'>
            <img
              src={cloudim1}
              className='cloudimg'
              title='SAP S/4HANA: Next-Gen ERP Solution'
              alt='SAP S/4HANA is a powerful ERP system designed for real-time data processing, enabling businesses to streamline operations and drive innovation'
            />
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className='d-flex my-1'>
              <p className='d-flex bg-light p-4 rounded-4 digitaltext'>
                1. A digital-age user experience
              </p>
            </div>
            <div className='d-flex my-1'>
              <p className='d-flex bg-light p-4 rounded-4 digitaltext'>
                2. Automation of business processes
              </p>
            </div>
            <div className='d-flex my-1'>
              <p className='d-flex bg-light p-4 rounded-4 digitaltext'>
                3. The next generation of business processes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hanacloud;
