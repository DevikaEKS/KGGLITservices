import React from 'react';
import "./Footercard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footercard() {
  return (
    <div className='container-fluid bgclrfooter mt-5 py-3'>
      <div className='card container footer-wrapper rounded-0 px-4'>
        <div className='row justify-content-center text-center'>
          <div className='col-12 col-md-4 d-flex flex-column align-items-center mb-3'>
            <a href="mailto:info@kggeniuslabs.com">
              <FontAwesomeIcon icon={faEnvelope} className="hoverani mb-2" />
            </a>  
            <div>
              <h5 className='contactmain'>Email Us</h5>
              <p className='contactpara'>info@kggeniuslabs.com</p>
            </div>
          </div>
   
          <div className='col-12 col-md-4 d-flex flex-column align-items-center mb-3'>
            <a href="tel:9363466093">
              <FontAwesomeIcon icon={faPhone} className="hoverani mb-2" />
            </a>
            <div>
              <h5 className='contactmain'>Contact Us</h5>
              <p className='contactpara'>+91-9363466093</p>
            </div>
          </div>

          <div className='col-12 col-md-4 d-flex flex-column align-items-center mb-3'>
            <a 
              href='https://www.google.com/maps/place/KG+Genius+Labs/@11.0831794,76.9987774,15z/data=!4m6!3m5!1s0x2b66dd2813006db:0x8578e0607bb91ee0!8m2!3d11.0831794!4d76.9987774!16s%2Fg%2F11lp1km093?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D' 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLocationDot} className="hoverani mb-2" />
            </a>
            <div>
              <h5 className='contactmain'>Location</h5>
              <p className='contactpara'>Coimbatore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footercard;
