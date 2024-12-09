import React from 'react';
import "./Webinarbanner.css";
import GLLOGO from "../Asset/logowhite.png"
import { Link as ScrollLink } from "react-scroll";
function Webinarbanner() {
  return (
    <div className='container-fluid p-0 m-0'>
    <div className='webinarbg text-light py-5   px-2'>
     <div className=' px-1 px-lg-4'>
     <img src={GLLOGO} className='gllogo'/>
      <h1><b>FREE</b></h1>
      <h4>Live Demonstration of </h4>
      <h1><b>PRODUCTION PLANNING</b></h1>
      <h4>for the<span style={{color:"#2BC8EB"}}> Manufacturing Industry</span></h4>
      <h1 className='customtext pt-3'>Customised ERP Solutions</h1>
      <p>Saturday, December 14, 2024 | 7 PM - 9 PM IST</p>
      <ScrollLink to={"Webinarcontact"}><button className='regbtn p-2 rounded-2'>Save your Free Spot</button></ScrollLink>
      </div>
    </div>
    </div>
  )
}

export default Webinarbanner