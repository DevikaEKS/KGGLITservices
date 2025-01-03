import React from 'react';
import "./Webinarbanner.css";
import GLLOGO from "../Asset/Genius ERP White LOGO.png"
import { Link as ScrollLink } from "react-scroll";
import { Helmet } from 'react-helmet';
function Webinarbanner() {
  return (
    <>
    <Helmet>
        <title>Free Webinar on Customized ERP Solutions | KG Genius Labs</title>
        <meta name="description" content="Join KG Genius Labs' free webinar on ERP solutions to optimize production and reduce costs. Register now!" />
        <meta name="keywords" content="React, SEO, Helmet" />
        <link rel="canonical" href="https://www.kggeniuslabs.com/custom-erp-software-solution/ " />
      </Helmet>

    <div className='container-fluid p-0 m-0'>
    <div className='webinarbg text-light py-5 ps-1 ps-lg-5'>
     <div className='px-1 px-lg-4 '>
     <img src={GLLOGO} className='gllogo'/>
     <h1>

     
      <h1 className='freetext'><b>FREE</b></h1>
      <h4 className='bannertxt'>Live Demonstration of </h4>
      <h1 className='freetext'><b>PRODUCTION PLANNING</b></h1>
      <h4 className='bannertxt'>for the<span style={{color:"#2BC8EB"}}> Manufacturing Industry</span></h4></h1>
      <h2 className='customtext pt-3 freetext'>Customiszed ERP Solutions</h2>
      <h4 >Saturday, January 11, 2025 | 7 PM - 8 PM IST</h4>
      <ScrollLink to={"Webinarcontact"}><button className='regbtn py-2 px-3 rounded-2 mb-4'>Save your Free Spot</button></ScrollLink>
      </div>
    </div>
    </div>
    </>
  )
}

export default Webinarbanner