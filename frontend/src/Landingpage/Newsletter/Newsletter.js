import React from 'react';
import user1 from "../Asset/cripumps.png";
import pumpslogo from "../Asset/cri.png";
import quotes from "../Asset/quotesbg.png";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="container-fluid px-4 py-5">
      <div className="row align-items-center py-2">
        {/* Left Section */}
        <div className="col-sm-12 col-lg-5 d-flex flex-column align-items-start headpart">
          <h1 className="clienttext mb-4">See What Our Clients are Saying...</h1>
          <div className="d-none d-lg-flex my-1">
            <div className="roundbox mx-1"></div>
            <div className="roundbox mx-1"></div>
            <div className="roundbox mx-1"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-sm-12 col-lg-7 d-flex justify-content-center">
          <div className="card border-0 crdpart text-center position-relative">
            {/* Quotes Image */}
            <img src={quotes} className="quotesimg mt-4 mx-3 position-absolute" alt="Quotes" />

            {/* User Details */}
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <img
                src={user1}
                title="CRI"
                alt="CRI Pumps"
                className="userimg1"
              />
              <h2 className="testimonialheader pt-3">
                Deepak KV - Manager IT
              </h2>
              <img
                src={pumpslogo}
                title="CRI Pumps"
                alt="CRI Pumps logo"
                className="userimg2"
              />
            </div>
            <p className="paratestimonial px-4 py-3 mx-0 mx-lg-3">
              Recently we have taken SAP Functional modules training program
              from KG Genius Labs. The KG Genius Labs training has significantly
              enhanced our team's skills, and the course was expertly designed
              and delivered, providing a comprehensive understanding of SAP
              functionalities that are crucial for our operations. I highly
              recommend this program to any organization looking to empower
              their workforce with essential SAP knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;


