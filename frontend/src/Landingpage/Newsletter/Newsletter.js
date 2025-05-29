import React, { useState } from "react";
import user1 from "../Asset/cripumps.png";
import pumpslogo from "../Asset/cri.png";
import asher from "../../Asset/asher.png";
import quotes from "../Asset/quotesbg.png";
import testimonialVideo from "../../Asset/testimonial-2.mp4";
import "./Newsletter.css";

function Newsletter() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const toggleSlide = (direction) => {
    setActiveSlide((prev) => {
      if (direction === "next") return (prev + 1) % 3;
      else return (prev - 1 + 3) % 3;
    });
  };

  

  return (
    <div className="container-fluid px-4 py-0 py-lg-5">
      <div className="row align-items-center py-2">
       
        <div className="col-sm-12 col-lg-5 d-flex flex-column align-items-start headpart">
          <h1 className="clienttext mb-4">See What Our Clients are Saying...</h1>
          <div className="d-none d-lg-flex my-1">
            <div className="roundbox mx-1"></div>
            <div className="roundbox mx-1"></div>
            <div className="roundbox mx-1"></div>
          </div>
         
        </div>

       
        <div className="col-sm-12 col-lg-7 d-flex justify-content-center position-relative">
          <div className="card border-0 crdpart text-center position-relative">
            <div className="slide-content">
              {activeSlide === 1 && (
                <>
                  <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <img src={user1} alt="CRI Pumps" className="userimg1" />
                    <h2 className="testimonialheader pt-3">
                      Deepak KV - Manager IT
                    </h2>
                    <img src={pumpslogo} alt="CRI Pumps logo" className="userimg2" />
                  </div>
                  <p className="paratestimonial px-4 py-3 mx-0 mx-lg-3">
                    Recently we have taken SAP Functional modules training program from KG Genius Labs. The KG Genius Labs training has significantly enhanced our team's skills, and the course was expertly designed and delivered, providing a comprehensive understanding of SAP functionalities that are crucial for our operations. I highly recommend this program to any organization looking to empower their workforce with essential SAP knowledge.
                  </p>
                </>
              )}

              {activeSlide === 0 && (
                <video
                muted
                src={testimonialVideo}
                className="w-100 rounded-3"
                controls
                loop
                playsInline
                autoPlay
              />

              )}

              {activeSlide === 2 && (
                <>
                  <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                    
                    <img src={asher} alt="Asher logo" className="userimg3" />
                  </div>
                  <p className="paratestimonial px-4 py-3 mx-0 mx-lg-3">
                    I am extremely pleased with the billing software delivered by KG Genius Labs. From start to finish, their team demonstrated professionalism, attention to detail, and a strong understanding of our business needs. The team (Mr. John, Shiju and Santhosh) incorporated all feedback and requested changes promptly and accurately. The final product is stable, user-friendly, and tailored perfectly to our requirements.
                  </p>
                </>
              )}
            </div>

         
            <button
              className="arrow-btn left-arrow"
              onClick={() => toggleSlide("prev")}
              aria-label="Previous Slide"
            >
              &#10094;
            </button>
            <button
              className="arrow-btn right-arrow"
              onClick={() => toggleSlide("next")}
              aria-label="Next Slide"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
