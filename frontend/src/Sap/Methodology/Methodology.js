import React from 'react';
import method1 from "../Asset/image 46.png";
import method2 from "../Asset/Group 270990189.png";
import method3 from "../Asset/methodmobile.png";
import "./Methodology.css";

function Methodology() {
  return (
    <div className='container-fluid methodtxt py-5 '>
      <div className='row'>
        <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
          <div>
            <h1 className='methodtext'>
              Make Your Move to<br />
              SAP S/4HANA with<br />
              <b>SAP Activate Methodology</b>
            </h1>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 d-flex justify-content-center'>
          <img
            src={method1}
            title='Make Your Move to SAP S/4HANA with SAP Activate Methodology'
            alt="SAP S/4HANA, a business suite software, using the SAP Activate Methodology framework."
            className='methodim d-block mx-auto'
          />
        </div>
      </div>

      <div className='row mx-3 my-5 py-5 d-none d-md-block'>
        <img src={method2} className='method-desktop d-block mx-auto' title='SAP S/4HANA Implementation' alt="SAP S/4HANA with Active Methodology Steps"/>
      </div>

      <div className='row mx-3 my-5 py-5 d-block d-md-none'>
        <img src={method3} className='method-mobile d-block mx-auto' title='SAP S/4HANA Implementation' alt="SAP S/4HANA with Active Methodology Steps"/>
      </div>
    </div>
  );
}

export default Methodology;
