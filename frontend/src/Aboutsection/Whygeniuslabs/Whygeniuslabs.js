
import React from 'react';
import glim1 from "../../Asset/glicon1.png";
import glim2 from "../../Asset/glicon2.png";
import glim3 from "../../Asset/glicon3.png";
import glim4 from "../../Asset/glicon4.png";
import glim5 from "../../Asset/glicon5.png";
import glim6 from "../../Asset/glicon6.png";
import "./Whygeniuslabs.css";

function Whygeniuslabs() {
  return (
    <div className='container py-5 text-center'>
      <h1 className='evolheading'><b>Why KG Genius Labs?</b></h1>
      <div className='row justify-content-center py-3 mx-5'>

        <div className='col-sm-6 col-md-4 '>
          <div className='card expcard py-5 my-4'>
            <img src={glim1} alt='Experience' className='iconimg'/>
            <p>Experience</p>
          </div>
        </div>

        <div className='col-sm-6 col-md-4 '>
          <div className='card inovcard py-5 my-4'>
            <img src={glim4} alt='Innovation' className='iconimg' />
            <p>Innovation</p>
          </div>
        </div>

        <div className='col-sm-6 col-md-4 '>
          <div className='card expcard py-5 my-4'>
            <img src={glim2} alt='Stability' className='iconimg'/>
            <p>Stability</p>
          </div>
        </div>

        <div className='col-sm-6 col-md-4'>
          <div className='card inovcard py-5 my-4'>
            <img src={glim3} alt='Scalability' className='iconimg'/>
            <p>Scalability</p>
          </div>
        </div>

        <div className='col-sm-6 col-md-4 '>
          <div className='card expcard py-5 my-4'>
            <img src={glim5} alt='Versatility' className='iconimg'/>
            <p>Versatility</p>
          </div>
        </div>

        <div className='col-sm-6 col-md-4'>
          <div className='card inovcard py-5 my-4'>
            <img src={glim6} alt='Endurance' className='iconimg'/>
            <p>Endurance</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Whygeniuslabs;
