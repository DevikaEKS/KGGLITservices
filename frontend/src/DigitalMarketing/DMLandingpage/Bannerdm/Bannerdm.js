import React, { useState,useEffect } from "react";
import "./Bannerdm.css";
import { Helmet } from "react-helmet";
import { toast,ToastContainer } from "react-toastify";
import ContactModal from "./ContactModal";

function Bannerdm() { 
   const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Helmet>
        <title>Complete Digital Marketing Solutions in Coimbatore | SEO, SMM & Ads</title>
        <meta name="description" content="Achieve your business goals with expert digital marketing services in Coimbatore." />
        <link rel="canonical" href="https://www.kggeniuslabs.com/digital-marketing-services-coimbatore" />
      </Helmet>

      <div className="container-fluid bannerdmbg d-none d-md-block m-0 p-0 h-100">
        <div className="row py-5">
          <div className="text-light px-0 px-md-2 px-lg-5 mx-0 my-5">
            <h1 className="bannerdmhead">Your Partner in <br /> Digital Success</h1>
            <h5 className="bannerparadm">Expert Marketing Services to Amplify Reach, Build Trust, and Boost Sales</h5>
            <button className="bg-light rounded-2 border-0 px-4 py-3 my-2 connectbtn text-decoration-none" onClick={() => setModalShow(true)}>
              Grow Your Business
            </button>
             <ContactModal show={modalShow} handleClose={() => setModalShow(false)} />         
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default Bannerdm;
