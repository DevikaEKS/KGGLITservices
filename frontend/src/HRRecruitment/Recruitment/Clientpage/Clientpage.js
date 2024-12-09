import React from 'react'
import "./Clientpage.css";
import clientimg from "../../Asset/clientgirl.png";

function Clientpage() {
  return (
    <div className='container-fluid clientsbg' id='clientus'>
<div className='row'>
    <div className='col-sm-12 col-md-6'>
<img src={clientimg} title='Why to choose KG Genius Labs as your HR Consultancy Partner' alt='Key benefits include industry-relevant talents, cost-efficient training, low-cost deployment, hassle-free mobilization, and high ROI' className='ms-sm-0 ms-lg-5 container-fluid'/>
    </div>
    <div className='col-sm-12 col-md-6'>
        <div className='mt-5'>
        <div className='card m-1 cardpart p-1'>
        <h3 className='clienttext p-4'><span style={{fontWeight:"normal"}}>Why </span>300+ clients trust us</h3> 
        </div>
        <div className='ms-5 mt-5'>
        <p className='cardshadow p-2'>Industry-relevant talents</p><br/>
        <p className='cardshadow p-2'>Cost-efficient training</p><br/>
        <p className='cardshadow p-2'>Low-cost deployment</p><br/>
        <p className='cardshadow p-2'>Hassle-free mobilization</p><br/>
        <p className='cardshadow p-2 mb-5'>High ROI</p>
        </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Clientpage