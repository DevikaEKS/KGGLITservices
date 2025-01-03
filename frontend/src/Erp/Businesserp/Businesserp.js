import React from 'react';
import bannerim3 from "../Asset/bannerim2.png";
import "./Businesserp.css";

function Businesserp() {
  return (
    <div className="container businesspart">
      <div className="row py-4">
        <h3 className="erpheading py-4 text-center">Why KG Genius ERP Is Essential for Your Business</h3>
        <div className="col-sm-12 col-md-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={bannerim3}
              className="bannerimg ms-0 ms-lg-2"
              title="How Genius ERP Benefits your Business"
              alt="Graphic showing the impact of Genius ERP on improving business performance and operational effectiveness."
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-7 d-flex flex-column justify-content-center">
          <p>
            At <b>KG Genius ERP</b>, we understand that no two businesses are alike. Our fully customizable ERP solutions are designed to meet your specific requirements, ensuring seamless integration across departments.
          </p>
          <p>
            <b>KG Genius ERP</b> centralizes business processes and integrates functions like customer management, HR, financials, inventory, and supply chain management into a unified system. This eliminates data silos, streamlines workflows, and enhances collaboration.
          </p>
          <p>
            By consolidating data into a single platform, KG Genius ERP simplifies operations, reduces training costs, and saves time. Employees can access real-time information effortlessly, boosting productivity and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Businesserp;
