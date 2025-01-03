import React from 'react'
import "./Webpart.css";
import { Link } from 'react-router-dom';
import eventlogo from  "../Asset/eventlogo.png";
function Webpart() {
  return (
    <div className='fixed-webinarpart'>  
     <Link to="/event"> <img src={eventlogo} className='eventlogo'/></Link> 
    </div>
  )
}

export default Webpart