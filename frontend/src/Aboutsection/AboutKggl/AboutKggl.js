

import React from 'react';
import "./AboutKggl.css";

function AboutKggl() {
  return (
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
            The KG Group has established itself as a pioneer in the field of cutting-edge technologies. From its inception, the group has maintained a relentless focus on innovation, consistently pushing boundaries to remain at the forefront of the global tech landscape. Over the last 25 years, KGiSL has transformed the technology landscape in South India, introducing groundbreaking solutions that have reshaped business processes and technology adoption in the region. Today, KGiSL has evolved into a dynamic and fast-growing IT company, serving clients across the Indo-Pacific. Its operations span over seven countries, delivering cutting-edge solutions that meet the complex needs of modern businesses and addressing the increasing global demand for innovative IT solutions.
            </p>
                    <p className='paragl px-md-0 px-sm-5'>Building on this legacy, KG Genius Labs, the newest venture from the KG Group, takes
forward the tradition of excellence by offering a wide range of customized solutions tailored
to meet the unique needs of businesses around the world. Our focus is on delivering high-
impact, scalable solutions that drive business efficiency and foster growth.
 </p>
 <p className='paragl px-md-0 px-sm-5'>Our expertise spans diverse services, including SAP, Learning Management Systems
(LMS), Customer Relationship Management (CRM), IT Services, Bespoke
 Application Development, and Digital Marketing Services.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutKggl;
