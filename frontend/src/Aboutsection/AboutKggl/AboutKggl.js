import React from 'react';
import "./AboutKggl.css";
import { Helmet } from 'react-helmet';
function AboutKggl() {
  return (
    <>
    <Helmet>
        <title>About KG Genius Labs | IT Innovation & Career Growth</title>
        <meta name="description" content="Discover KG Genius Labs' mission to innovate IT solutions and empower careers. Learn about our expertise in SAP S/4HANA, IT consultancy, digital marketing, and customized ERP/CRM and LMS development, driving success for businesses and individuals.." />
        <meta name="keywords" content="About KG Genius Labs, IT Solutions Innovation, SAP S/4HANA Experts, Digital Marketing Specialists, IT Consultancy Services, Customized ERP/CRM and LMS Development" />
        <link rel="canonical" href="https://www.kggeniuslabs.com/aboutus" />
      </Helmet>

    <div className='container-fluid d-flex flex-column align-items-center justify-content-center whygl' id='aboutpart'>
      {/* Adding small circles to the background */}
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className='text-center paraabout'>
        <div className='row mx-2 py-4'>
          {/* First row with "Who" text and image responsive */}
          <div className='col-sm-12 d-flex align-items-center justify-content-center my-5 flex-wrap px-3'>
            <h1 className='abhead mb-5'>Who We are</h1>
            <p className='paragl px-md-0 px-sm-5'>
            The KG Group, with its decades-long legacy, is an established name in fields across
the board, but we are best known for our innovative technologies. 25 years ago, the
Group’s KG Information System Private Limited (KGiSL) pioneered cutting-edge
technological solutions in South India. Today, it is one of the fastest-growing IT
companies in the Indo-Pacific, with an active presence in over 7 countries. KG Genius
Labs, the newest venture from KG, delivers tailored solutions to global businesses,
including ERP, LMS, CRM, IT Infrastructure Management, Bespoke Application
Development, and Digital Marketing Services.
            </p>
                    <p className='paragl px-md-0 px-sm-5'><b>Our comprehensive ERP Solutions include</b>
 </p>
  <p className='paragl px-md-0 px-sm-5'>We provide tailored IT solutions with a focus on customized ERP systems,
ensuring seamless implementation and performance improvements.KG Genius ERP offers fully customized solutions to streamline business
operations and drive growth, covering Finance, Manufacturing, Sales & CRM,
Inventory, HR, Procurement, and Project Management.We offer expert SAP services, including Fiori & SAC for insights, S/4 HANA
migration for efficiency, tailored implementation, seamless support, and
workforce training.</p>
    </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutKggl;
