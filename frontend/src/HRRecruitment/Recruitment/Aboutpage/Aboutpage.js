import React from 'react';
import "./Aboutpage.css";
import profimg from "../../Asset/We lap img 2.png";


function Aboutpagehr() {
  return (
    <div className='container-fluid bgaboutpage' id='aboutpart'>
      <div className='row  d-flex align-items-center no-gutters py-5'>
        <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center weim my-3'>
          <img src={profimg} title='KG Genius Labs HR Consultancy' alt='KG Genius Labs HR Consultancy’s inclusive and holistic approach features diverse job seekers and companies thriving due to enhanced team diversity and profitability' className='img-fluid hrim'/>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center txtresume px-sm-4  px-lg-5 my-3'>
          <h1 className='aboutheading'>
            <span style={{ fontWeight: "normal" }}>While</span> Others See Resumes, We See Potential
          </h1> 
          <p className='aboutpara'>
            At KG Genius Labs HR Consultancy, we value the whole individual, not just their educational or work history.
          </p>
          <p className='aboutpara'>
            Our distinct, inclusive, and people-focused approach has allowed us to place thousands of job seekers from diverse backgrounds—across genders, ethnicities, and perspectives—into rewarding and fulfilling careers. In turn, we have helped hundreds of companies enhance their teams and boost profitability through increased diversity.
          </p> 
        </div>
      </div>
    </div>
  )
}

export default Aboutpagehr;
