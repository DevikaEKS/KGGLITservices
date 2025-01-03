import React from 'react';
import "./Erppro.css";

function Erppro() {
  return (
    <div className="container Propart">
        <h1 className='text-center erpheading1 py-5'>PROs of ERP Solution by KG Genius ERP</h1>
      <div className="row">
        {[
          "Multi-level Bills of Material BOM",
          "Streamlined Production Planning",
          "Comprehensive Production Process Control",
          "Delivery Management",
          "Quality Assurance & Control",
          "Efficient Batch Production",
          "Stock Flow Management",
          "Material Tracking & Monitoring",
          "Capacity Planning",
          "Just-in-Time Scheduling",
          "Integrated Purchasing System",
          "Real-time WIP Dashboard"
        ].map((text, index) => (
          <div className="col-sm-12 col-md-4 col-lg-4" key={index}>
            <div className="card d-flex justify-content-center align-items-center procards py-4">
              <p className='paraerp'>{text}</p>
            </div>
          </div>
        ))}
        <p className='py-4 revolutiontxt'>We strive to revolutionize industries across all sectors by delivering advanced, next-generation ERP solutions. With KG Genius ERP, experience unparalleled flexibility, streamline your operations, and drive your business toward greater innovation and growth.</p>
      </div>
    </div>
  );
}

export default Erppro;
