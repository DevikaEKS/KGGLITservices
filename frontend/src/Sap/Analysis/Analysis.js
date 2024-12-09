
import React from 'react';
import analyse1 from "../Asset/analyse1.png";
import analyse2 from "../Asset/analyse2.png";
import analyse3 from "../Asset/analyse3.png";
import analyse4 from "../Asset/analyse4.png";
import './Analysis.css';

function Analysis() {
  return (
    <div className='container-fluid bganalyse'>
    <div className='container'>
      <div className='row text-center py-3 analysepart'>
        <div className='col-12'>
          <h1 className='hanahead my-5'>Data & Analytics</h1>
          <p className='paraanalyse'>
            We help organizations make the best agile decisions through the power of data management and analysis, understanding the past, monitoring the present, and predicting the future. We help you transform your business by unlocking the power of data and driving business outcomes via <b>SAP Business Analytics (Fiori / SAC) and Power BI,</b> with customized dashboards, infographics and operational metrics.
          </p>
        </div>

        <div className='col-12'>
          <h1 className='analysehead my-5'>Benefits</h1>
        </div>

        {/* First Benefit */}
        <div className='col-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
            <img src={analyse1} alt="Measuring, Understanding, Predicting" className='img-fluid me-md-3' />
            <p className='text-center text-md-start txtanalyse'>Measuring, Understanding, Predicting</p>
          </div>
        </div>

        {/* Second Benefit */}
        <div className='col-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
            <img src={analyse2} alt="Strategy and Governance" className='img-fluid me-md-3' />
            <p className='text-center text-md-start txtanalyse'>Strategy and Governance</p>
          </div>
        </div>

        {/* Third Benefit */}
        <div className='col-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
            <img src={analyse3} alt="Decide in real time & Performance" className='img-fluid me-md-3' />
            <p className='text-center text-md-start txtanalyse'>Decide in real time & Performance</p>
          </div>
        </div>

        {/* Fourth Benefit */}
        <div className='col-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
            <img src={analyse4} alt="Comprehensive business vision & Quick decisions" className='img-fluid me-md-3' />
            <p className='text-center text-md-start txtanalyse'>Comprehensive business vision & Quick decisions</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Analysis;
