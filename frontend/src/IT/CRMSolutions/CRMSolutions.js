import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import "./CRMSolutions.css";

import { Autoplay } from 'swiper/modules'; 

function CRMSolutions() {
  return (
    <div className='container entireswipe py-5'>
      <div className='row mx-sm-0 mx-md-5 d-none d-md-block crmsolutions'>
        <Swiper
          modules={[Autoplay]}  
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="1"  
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className='mySwiper'
          style={{ overflow: 'hidden' }} 
        >
          <SwiperSlide>
            <div className="card procard border-0">
              <div className="card-body crmsolutions p-3">
                <h1 className="card-title text-center py-3">Sales CRM</h1>
                <p className="card-text">Empower your sales team with tools to manage leads, track customer interactions, and close deals faster. Our Sales CRM offers:</p>
                <div className='bg-light rounded-5 text-center p-5 my-4'>
                  <h5><b>Lead Management</b></h5>
                  <p>Prioritize and track potential customers throughout the sales funnel.</p>
                  <h5><b>Sales Forecasting</b></h5>
                  <p>Get accurate insights to help you make smart business moves.</p>
                  <h5><b>Pipeline Tracking</b></h5>
                  <p>Monitor progress at every stage of the sales journey.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card border-0">      
              <div className="card-body crmsolutions p-3">
                <h1 className="card-title text-center py-3">Service CRM</h1>
                <p className="card-text">Deliver exceptional customer service with a system built to handle inquiries, feedback, and
                service requests. The Service CRM helps you:</p>
                <div className='bg-light rounded-5 text-center p-5 my-4'>
                  <h5><b>Customer Support Tickets</b></h5>
                  <p>Efficiently track, prioritize, and resolve customer issues.</p>
                  <h5><b>Knowledge Base Management</b></h5>
                  <p>Provide customers with easy access to self-help resources.</p>
                  <h5><b>Performance Metrics</b></h5>
                  <p>Analyze service trends and improve response times.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card procard border-0">
              <div className="card-body crmsolutions p-3">
                <h1 className="card-title text-center py-3">Support CRM</h1>
                <p className="card-text">Customer satisfaction doesn’t stop at service—it continues through dedicated support. Our Support CRM helps you:</p>
                <div className='bg-light rounded-5 text-center p-5 my-4'>
                <h5><b>24/7 Multichannel Support</b></h5>
                  <p>Manage customer support across chat, email, and phone from one place.</p>
                  <h5><b>Customer Feedback</b></h5>
                  <p>Collect and analyze feedback to improve future interactions.</p>
                  <h5><b>Issue Resolution</b></h5>
                  <p>Quickly resolve issues with a clear overview of each customer’s journey.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      <div className='row m-auto d-block d-md-none entireswipe'>
        <div className='card swipercrm border-0 rounded-4'>
        <h1 className="card-title text-center py-3  titlecrm">Sales CRM</h1>
                <p className="card-text">Empower your sales team with tools to manage leads, track customer interactions, and close deals faster. Our Sales CRM offers:</p>
                <div className='bg-light rounded-5 text-center my-4 p-3'>
                  <h5><b>Lead Management</b></h5>
                  <p>Prioritize and track potential customers throughout the sales funnel.</p>
                  <h5><b>Forecasting</b></h5>
                  <p>Get accurate insights to help you make smart business moves.</p>
                  <h5><b>Pipeline Tracking</b></h5>
                  <p>Monitor progress at every stage of the sales journey.</p>
                </div>
        </div>



        <div className='card swipercrm border-0  rounded-4'>
        <h1 className="card-title text-center py-3  titlecrm">Service CRM</h1>
                <p className="card-text">Deliver exceptional customer service with a system built to handle inquiries, feedback, and
                service requests. The Service CRM helps you:</p>
                <div className='bg-light rounded-5 text-center my-4 p-3'>
                  <h5><b>Customer Support Tickets</b></h5>
                  <p>Efficiently track, prioritize, and resolve customer issues.</p>
                  <h5><b>Knowledge Base Management</b></h5>
                  <p>Provide customers with easy access to self-help resources.</p>
                  <h5><b>Performance Metrics</b></h5>
                  <p>Analyze service trends and improve response times.</p>
                </div>
        </div>

        <div className='card swipercrm border-0  rounded-4'>
        <h1 className="card-title text-center py-3 titlecrm">Support CRM</h1>
                <p className="card-text">Customer satisfaction doesn’t stop at service—it continues through dedicated support. Our Support CRM helps you:</p>
                <div className='bg-light rounded-5 text-center my-4 p-3'>
                  <h5><b>24/7 Multichannel Support</b></h5>
                  <p>Manage customer support across chat, email, and phone from one place.</p>
                  <h5><b>Customer Feedback</b></h5>
                  <p>Collect and analyze feedback to improve future interactions.</p>
                  <h5><b>Issue Resolution</b></h5>
                  <p>Quickly resolve issues with a clear overview of each customer’s journey.</p>
                </div>
        </div>


       


</div>


    </div>
  );
}

export default CRMSolutions;



