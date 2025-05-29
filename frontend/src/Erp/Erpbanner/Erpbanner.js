import React from 'react';
import './Erpbanner.css';
import bannerlogo from '../Asset/geniuserplogo.png';
import smlogoerp from "../Asset/bluelogo.png";
import { Link as ScrollLink } from 'react-scroll'; 
import { Helmet } from 'react-helmet';
function Erpbanner() {
  return (
    <>
     <Helmet>
        <title>Grow Your Business with Our ERP Experts</title>
        <meta name="description" content="Experience Business Management Simplification with KG Genius Labs’ ERP solutions, which feature mobile-friendly design, role-based access, and seamless integration." />
        <meta name="keywords" content="Customized Software Development, CRM Solutions, IT Consulting, IT Services , Future-ready IT solutions for businesses in Coimbatore, Customized CRM, Best IT Services Provider, Custom IT Solutions for Businesses, IT Support and Maintenance Services, CRM Company in Coimbatore, Custom CRM Solutions Provider, Cloud-Based CRM Services, B2B LMS Platforms for Educational Institutions, LMS for Skill Development and Training" />
        <link rel="canonical" href=" https://www.kggeniuslabs.com/custom-erp-software-solution" />
      </Helmet>
       
      <div className='container-fluid d-none d-md-block lapbanner h-100 py-4' id='Geniuserpbanner'>
        <div className='d-flex flex-column justify-content-center align-items-end ps-sm-0 ps-md-3 pe-0 pe-md-5'>

          <div className='d-flex flex-column justify-content-end align-items-end pt-2 pb-5'>
            
            <h1 className='text-center businessheading text-light py-5 px-3'>
            <img src={bannerlogo} alt='Streamline Your Business with our customized ERP Solutions!' title='KG Genius ERP' className='imglogo'/><br/>
              Streamline Your Business<br />
              <span className='fw-normal'>with</span> our customized<br />
              ERP Solutions!<br/>
              <ScrollLink to="ERPcontact" smooth={true} duration={500} className='bookbtn text-light border-0 py-2 px-4 my-3 text-decoration-none'>
              Book a Free Demo
            </ScrollLink>
            </h1>      
          </div>
        </div>
      </div>

      <div className='container-fluid d-block d-md-none p-0 m-0'>
        <div className='bgmb m-0 p-0 pt-5'>
          <h1 className='text-center px-3 streamtxt text-light'>
            <img src={bannerlogo} alt='Streamline Your Business with our customized ERP Solutions!' title='KG Genius ERP'  className='py-0 bluelogo'/><br/>
            Streamline Your Business<br />
            <span className='fw-normal'>with</span> our customised<br />
            ERP Solutions!
          </h1>
          <div className='d-flex justify-content-center'>
            <ScrollLink to="Webinarcontact" smooth={true} duration={500} className='bookbtn text-light border-0 py-1 px-3 mb-5 text-decoration-none'>
              Book a Free Demo
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Erpbanner;
