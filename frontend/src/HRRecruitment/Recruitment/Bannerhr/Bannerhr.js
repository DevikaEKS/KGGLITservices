import React from 'react';
import './Bannerhr.css';
import { Link as Sclink } from 'react-scroll';
import { Helmet } from 'react-helmet';
function Bannerhr() {
  return (
    <>
    <Helmet>
        <title>Expert HR Consultancy | Talent & Workforce Solutions</title>
        <meta name="description" content=" KG Genius Labs offers personalized HR consultancy to fuel organizational growth. We specialize in workforce strategy, talent acquisition, and career development to create thriving teams and drive success." />
        <meta name="keywords" content="HR Consultancy, Human Resource Consultancy, HR Consultancy Coimbatore." />
        <link rel="canonical" href="https://www.kggeniuslabs.com/hr-consultancy" />
      </Helmet>

    <div className='container-fluid bannerbackground' id='hrbanner'>
      <div className='d-flex flex-column justify-content-center align-items-start ps-sm-0 ps-md-3'>
        <h1 className='text-light paratext '>
          We're <span style={{fontWeight: "bold"}}>The Human</span> In <br />
          Your <span style={{fontWeight: "bold"}}>Human Resources</span>
        </h1>
       
        <Sclink activeClass="active" to="hrcontact" spy={true} smooth={true} duration={100} className="nav-link active " aria-current="page"><button className="bannerbutton px-3 py-1 rounded-5"> Get Started </button></Sclink>
      </div>
    </div>
    </>
  );
}

export default Bannerhr;
