import React from 'react';
import missionim from "../Asset/Vision.png";
import visionim from "../Asset/Mission.png";
import mvim from "../Asset/mv.png";
import "./Mission.css";

function Mission() {
  return (
    <div className='container my-5'>
      <div className='row align-items-center missionparts'>
        {/* Mission Section */}
        <div className='col-12 col-lg-6 d-flex flex-column flex-md-row align-items-center mb-4 mb-md-0'>
          <div className='mission-content text-center text-md-start'>
            <div className='heading-with-icon mt-5'>
              <h3 className='credhead text-center'>Mission</h3>
            </div>
            <p className='section-para'>
              KG Genius Labs is committed to driving business success through innovative IT solutions and expert consulting. Our mission is to deliver customized, forward-thinking services that not only meet our client's needs but also enhance their overall experience with us, guided by our core values of excellence and integrity.
            </p>
          </div>
          <img src={visionim} className='section-image ms-0 ms-md-4 mt-3 mt-md-0 rounded-4 d-none d-md-block' title='KG Genius Labs Vision' alt="To empower businesses with cutting-edge infrastructure solutions, SAP expertise, and impactful digital marketing strategies, driving innovation, efficiency, and growth" />
        </div>


        <div className='col-12 col-lg-6 d-flex flex-column flex-md-row align-items-center'>
   
          <img src={missionim} className='section-image me-0 me-md-4 mb-5 pb-5 mb-md-0 d-none d-md-block' title='Our Vision' alt="At KG Genius Labs, our vision is to be a leading provider of diverse services, SAP solutions, and digital marketing, empowering businesses to achieve their full potential through innovative technology and strategic digital growth." />
        <img src={mvim} className='mvimg d-block d-md-none' title='KG Genius Labs Vision' alt='Our Vision'/>
          <div className='vision-content text-center text-md-start'>




            
            <div className='heading-with-icon '>
              <h3 className='credhead text-center'>Vision</h3>
            </div>
            <p className='section-para '>
              Our vision at KG Genius Labs is to be a global leader in technology solutions, shaping the future of IT and digital transformation. We aspire to help businesses worldwide thrive by delivering groundbreaking solutions and fostering a culture of innovation and excellence.
            </p>
            <div className='fixed-width-text'> 
            </div> 
          </div>         
        </div>       
      </div>     
    </div>
  );
}

export default Mission;
