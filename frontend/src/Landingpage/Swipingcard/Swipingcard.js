import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import cardim1 from "../Asset/sapserve.jpg";
import cardim2 from "../Asset/itserve.jpg";
import cardim3 from "../Asset/dmserve.jpg";
import cardim4 from "../Asset/hrserve.jpg";
import "./Swipingcard.css";

import { EffectCoverflow, Autoplay } from 'swiper/modules';

function SwiperCard3D() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="2"
          loop={true} 
          coverflowEffect={{
            rotate: 0, 
            stretch: 50, 
            depth: 200, 
            modifier: 2, 
            slideShadows: false,
          }}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false, 
          }}
          className='mySwiper'>
          
          <SwiperSlide>
            <div className="card procard">
              <img src={cardim1} title='Rise and Grow with SAP' alt=" Embrace digital transformation with SAP's Rise and Grow, streamlining strategies, enhancing experiences, and driving sustainable growth" className="card-img-top" />
              <div className="card-body crdbdy">
                <h5 className="card-title text-center">SAP Services</h5>
                <p className="card-text">Innovation drives us to help clients redefine their future, leveraging our know-how to achieve continuous improvement and lasting success.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card procard">
              <img src={cardim2} title='Customized IT Services' alt=" KG Genius Labs creates value with tailored IT Services, aligning services with your business objectives" className="card-img-top" />
              <div className="card-body crdbdy">
                <h5 className="card-title text-center">IT Services</h5>
                <p className="card-text">We blend industry insights, top technologies, and expert execution to optimize IT Services and tailor solutions that drive your success.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card procard">
              <img src={cardim3} title='KGGL Digital Marketing Team' alt="The KGGL Digital Marketing Team provides tailored advertising solutions to enhance client retention and maximize conversions, driving your brand's digital success" className="card-img-top" />
              <div className="card-body crdbdy">
                <h5 className="card-title text-center">Digital Marketing Services</h5>
                <p className="card-text">We partner with ambitious brands to drive growth through creative solutions in AI, branding, tech advisory, and digital strategy, blending design and tech to solve challenges and enhance digital platforms.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card procard">
              <img src={cardim4} title='HR Consultancy' alt="Professional HR consultant working with a diverse team" className="card-img-top" />
              <div className="card-body crdbdy">
                <h5 className="card-title text-center">HR Consultancy</h5>
                <p className="card-text">We don’t just place talent; we create opportunities. Our mission is to empower individuals and organizations, driving meaningful impact that transforms careers, communities, and economies.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperCard3D;
