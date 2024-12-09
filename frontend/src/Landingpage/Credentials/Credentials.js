import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import './Credentials.css';

function Credentials() {
  const [visibleItems, setVisibleItems] = useState({
    countries: false,
    projects: false,
    legacy: false,
    professionals: false,
    clients: false,
  });

  const refs = {
    countries: useRef(null),
    projects: useRef(null),
    legacy: useRef(null),
    professionals: useRef(null),
    clients: useRef(null),
  };

  useEffect(() => {
    const options = {
      threshold: 0.5, // Trigger when 50% of the item is visible
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const key = entry.target.dataset.key;
          setVisibleItems((prev) => ({ ...prev, [key]: true }));
        }
      });
    }, options);

    Object.keys(refs).forEach((key) => {
      if (refs[key].current) {
        observer.observe(refs[key].current);
      }
    });

    return () => {
      Object.keys(refs).forEach((key) => {
        if (refs[key].current) {
          observer.unobserve(refs[key].current);
        }
      });
    };
  }, []);

  return (
    <div className='container text-center py-5'>
      <h1 className='evolheading my-5'><b>Credentials</b></h1>

      {/* Display only on large and above devices */}
      <div className='d-none d-lg-flex justify-content-center align-items-center lappart'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='card cred yeartext mb-5 py-3 rounded-4' ref={refs.countries} data-key="countries">
            <h1>7+</h1>
            <h2 className='txtrte'>Countries</h2>
            </div>
            <div className='card cred yeartext border-0 rounded-4 mt-5' ref={refs.projects} data-key="projects">
               <h1>500+</h1>
               <h2>Projects</h2>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card cred1 p-5 rounded-4 mt-4 bg-primary text-light' ref={refs.legacy} data-key="legacy">
        <h1>25+</h1>
         <h2>Legacy Years</h2>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card cred yeartext d-flex flex-column justify-content-center align-items-center mb-5 rounded-4' ref={refs.professionals} data-key="professionals">
            <h1>1700+</h1>
            <h2>Professionals</h2>
            </div>
            <div className='card cred d-flex justify-content-center align-items-center yeartext rounded-4 mt-5' ref={refs.clients} data-key="clients">
              <h1>
                {visibleItems.clients && (
                  <CountUp start={0} end={270} suffix="+" duration={2} />
                )}
              </h1>
            <h1>270+</h1>
            <h2>Clients</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Display only on small to medium devices */}
      <div className='row'>
        <div className='tabscreen d-flex flex-column justify-content-center align-items-center min-vh-100 d-block d-lg-none'>
          <div className='col-sm-12 col-md-4 my-2' ref={refs.countries} data-key="countries">
            <div className='card yeartext1 cred1 p-3 d-flex flex-column justify-content-center align-items-center '>
              <h1>
                {visibleItems.countries && (
                  <CountUp start={0} end={7} suffix="+" duration={2} />
                )}
              </h1>
              <h2>Countries</h2>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 my-2' ref={refs.projects} data-key="projects">
            <div className='card profcard cred1 p-3 d-flex flex-column justify-content-center align-items-center '>
              <h1>
                {visibleItems.projects && (
                  <CountUp start={0} end={500} suffix="+" duration={2} />
                )}
              </h1>
              <h2>Projects</h2>
            </div>
          </div>
          
          <div className='col-sm-12 col-md-4 my-2' ref={refs.legacy} data-key="legacy">
            <div className='card yeartext1 p-3 cred1 d-flex flex-column justify-content-center align-items-center '>
              <h1>
                {visibleItems.legacy && (
                  <CountUp start={0} end={25} suffix="+" duration={2} />
                )}
              </h1>
              <h2>Legacy Years</h2>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 my-2' ref={refs.professionals} data-key="professionals">
            <div className='card profcard p-3 cred1 d-flex flex-column justify-content-center align-items-center '>
              <h1>
                {visibleItems.professionals && (
                  <CountUp start={0} end={1700} suffix="+" duration={2} />
                )}
              </h1>
              <h2>Professionals</h2>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 my-2' ref={refs.clients} data-key="clients">
            <div className='card yeartext1 p-3 cred1 d-flex flex-column justify-content-center align-items-center '>
              <h1>
                {visibleItems.clients && (
                  <CountUp start={0} end={270} suffix="+" duration={2} />
                )}
              </h1>
              <h2>Clients</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credentials;
