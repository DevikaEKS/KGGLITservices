
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Ourservices.css";
import SwiperCard3D from '../Swipingcard/Swipingcard';

const texts = ["SAP Services", "IT Services", "Digital Marketing Services", "HR Consultancy"];

function Ourservices() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 5100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container servicesbg my-5 pt-5' id='ourservices'>
      <div className='row'>
        <div className='col-sm-12 col-lg-5'>
          <h1 className='serviceheading'>
            Our <span className='servetext text-center'>Services</span>
          </h1>
          <motion.h4
            className='saptext py-3'
            key={currentText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            {texts[currentText]}
          </motion.h4>
          {/* Conditional rendering for small devices */}
          {currentText === 0 && <p className='small-device-text text-center prt d-block d-md-none '>Innovation drives us to help clients redefine their future, leveraging our know-how to achieve continuous improvement and lasting success.</p>}
          {currentText === 1 && <p className='small-device-text text-center prt d-block d-md-none'>We blend industry insights, top technologies, and expert execution to optimize IT Services and tailor solutions that drive your success.</p>}
          {currentText === 2 && <p className='small-device-text text-center prt d-block d-md-none'>We partner with ambitious brands to drive growth through creative solutions in AI, branding, tech advisory, and digital strategy, blending design and tech to solve challenges and enhance digital platforms.</p>}
          {currentText === 3 && <p className='small-device-text text-center prt d-block d-md-none'>We don’t just place talent; we create opportunities. Our mission is to empower individuals and organizations, driving meaningful impact that transforms careers, communities, and economies.</p>}
        </div>
        <div className='col-sm-12 col-lg-7 px-2 d-none d-md-block'>
          <SwiperCard3D />
        </div>
      
      </div>
    </div>
  );
}

export default Ourservices;
