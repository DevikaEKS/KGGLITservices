import React from 'react';
import benefitsimg from "../Asset/geniuserp.png";
import "./Benefitsoferp.css";

function Benefitsoferp() {
  return (
    <>
      <div className="container-fluid py-4">
      <h1 className='text-center py-4 erpheading1 erpbenef'>The Potential Benefits of KG Genius ERP</h1>
      <div className="bgcolordata d-flex justify-content-center align-items-center text-center p-3 d-block d-md-none ">
              <p>Streamlined, automated processes to reduce costs and risks</p>
            </div>
        {/* Top Center Card */}
        <div className="row align-items-center justify-content-center mb-4">   
          <div className="col-sm-12 col-md-4">
            <div className="bgcolordata d-flex flex-column justify-content-center align-items-center text-center p-3 d-none d-md-block" style={{ height: "100%" }}>
  <p className='pt-4 pt-md-3 pt-lg-4'>Streamlined, automated processes to reduce costs and risks</p>
</div>

          </div>
        </div>

      
        <div className="row align-items-center">
          {/* Left Column with "Real-time insights" */}
          <div className="col-md-4 d-flex flex-column gap-3">
            <div className="bgcolordata d-flex flex-column justify-content-center align-items-center text-center p-3 ms-0 ms-md-5">
              <p>Enhanced cash flow, margins, and financial management</p>
            </div>
            <div className="bgcolordata d-flex flex-column justify-content-center align-items-center text-center p-3 me-0 me-md-5 mt-0 mt-md-5 mb-3 mb-md-0">
            <p>Real-time insights into critical operations</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-md-4 text-center d-none d-md-block">
            <img src={benefitsimg} className="benefitsimg" title='The Potential Benefits of Genius ERP' alt="Diverse team collaborating on computers, utilizing Genius ERP for real-time insights and streamlined processes." />
          </div>

          {/* Right Column with "User-friendly tools" */}
          <div className="col-md-4 d-flex flex-column gap-3">
            <div className="bgcolordata d-flex flex-column justify-content-center align-items-center text-center p-3  me-0 me-md-5 mt-0 mt-md-3">
              <p>Faster, data-driven decisions to boost growth and market share</p>
            </div>
            <div className="bgcolordata d-flex flex-column justify-content-center align-items-center text-center p-3 ms-0 ms-md-5 mt-0 mt-md-5">
              <p>User-friendly tools for creating interactive, compelling reports</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefitsoferp;
