import React from 'react'
import "./Whydm.css"
import numcircle from "../../Asset/ellipsebg.png";
function Whydm() {
  return (
    <div className='container choosepart'>
        <div className='row py-3'>
        <h1 className='text-center py-5 choosehead'>Why Choose Us?</h1>
 {/* First Benefit */}
        <div className='col-sm-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
          <div className='numberbox d-flex justify-content-center align-items-center text-light'><img src={numcircle}/></div>
          <div className='m-3'>
            <h3 className='fw-bold'>Tailored Strategies for Every Business</h3>
            <p>Customized marketing solutions designed to align with your unique business goals and target audience.
            </p>
          </div>
          </div>
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
          <div className='numberbox d-flex justify-content-center align-items-center text-light'><img src={numcircle}/></div>
          <div className='m-3'>
            <h3 className='fw-bold'>Global Visibility,Local Focus</h3>
            <p>Helping businesses enhance their presence on a global scale while staying connected to local audiences.
            </p>
          </div>
          </div>
        </div>


        <div className='col-sm-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
          <div className='numberbox d-flex justify-content-center align-items-center text-light'><img src={numcircle}/></div>
          <div className='m-3'>
            <h3 className='fw-bold'>Comprehensive Service Portfolio</h3>
            <p>From SEO and PPC to social media marketing and ROI analytics, we provide a full suite of services under one roof.
            </p>
          </div>
          </div>
        </div>


        {/* Third Benefit */}
        <div className='col-sm-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
          <div className='numberbox d-flex justify-content-center align-items-center text-light'><img src={numcircle}/></div>
          <div className='m-3'>
            <h3 className='fw-bold'>Affordable and Scalable Solutions</h3>
            <p>Flexible pricing and service packages to fit businesses of all sizes, ensuring cost-effective results.
            </p>
          </div>
          </div>
        </div>


        {/* Fourth Benefit */}
        <div className='col-sm-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
          <div className='numberbox d-flex justify-content-center align-items-center text-light'><img src={numcircle}/></div>
          <div className='m-3'>
            <h3 className='fw-bold'>Data-Driven Results</h3>
            <p>Leverage real-time insights and analytics to maximize your marketing ROI and drive sustainable growth.
            </p>
          </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
          <div className='numberbox d-flex justify-content-center align-items-center text-light'><img src={numcircle}/></div>
          <div className='m-3'>
            <h3 className='fw-bold'>Proven Success across Platforms</h3>
            <p>Expertise in optimizing performance on major platforms like Google, Facebook, LinkedIn, and more.
            </p>
          </div>
          </div>
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
          <div className='numberbox d-flex justify-content-center align-items-center text-light'><img src={numcircle}/></div>
          <div className='m-3'>
            <h3 className='fw-bold'>Certified Experts</h3>
            <p>A team of skilled professionals with expertise in the latest digital marketing trends and tools.
            </p>
          </div>
          </div>
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6 my-3'>
          <div className='d-flex flex-column flex-md-row align-items-center'>
          <div className='numberbox d-flex justify-content-center align-items-center text-light'><img src={numcircle}/></div>
          <div className='m-3'>
            <h3 className='fw-bold'>Commitment to Client Success</h3>
            <p>Dedicated support and continuous optimization to ensure your campaigns deliver measurable outcomes.
            </p>
          </div>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Whydm 