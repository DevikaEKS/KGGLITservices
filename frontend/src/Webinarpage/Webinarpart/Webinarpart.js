import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Webinarpart.css";
import iconimg1 from "../Asset/icon1.png";
import iconimg2 from "../Asset/icon2.png";
import iconimg3 from "../Asset/icon3.png";
import iconimg4 from "../Asset/icon4.png";
import hostimg from "../Asset/KrishnaMam.png";
import { Link as ScrollLink } from "react-scroll";
function Webinarpart() {
  return (
    <div className="container webinarpart">
      <h1 className="text-center pt-3 pt-lg-5 pb-3 webpart">Meet Your Host</h1>
      <div className="row">
        <div className="col-sm-12 col-lg-4 py-3">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={hostimg} className="imgmam" title="ERP Webinar" alt="Host"/>
          </div>
        </div>

        <div className="col-sm-12 col-lg-8 py-3 d-flex justify-content-center align-items-center px-3">
          <div className="card p-4 border-0 bgcrd mx-2">
            <h2><b>Dr. P. Krishnapriya</b></h2>
            <h5><b>Head of Operations at KG Genius Labs</b></h5>
            <p><FontAwesomeIcon icon={faEnvelope} className="px-1"/>krishnapriya.p@kggeniuslabs.com</p>
          </div>
        </div>
      </div>

      <div className="row py-4                                                                                                                                                                                                                                                        ">
        <div className="col-sm-12 col-lg-6 order-2 order-lg-1">
          <div className="row px-3 py-0 py-lg-4">
            <div className="col-6  icon-container">
              <img src={iconimg1} className="iconimg" />
              <p>Master Effective Production Planning Strategies</p>
            </div>
            <div className="col-6  icon-container">
              <img src={iconimg4} className="iconimg" />
              <p>Reduce Lead Times, Costs, and Wastage</p>
            </div>
          </div>
          <div className="row py-4 px-2">
            <div className="col-6  icon-container">
              <img src={iconimg3} className="iconimg" />
              <p>Tailored ERP Solutions for Manufacturing Needs</p>
            </div>
            <div className="col-6  icon-container">
              <img src={iconimg2} className="iconimg" />
              <p>Interactive Q&A with Industry Experts</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-lg-6 order-1 order-lg-2">
          <div className="keytakeawaycards rounded-2 p-5 d-flex flex-column justify-content-center my-3 my-lg-0 rounded-2">
            <h3 className="keytakeawaytext">
              <b>Key Takeaways</b>
            </h3>
            
              <ScrollLink to={"Webinarcontact"}>
                <button className="regbtn p-2 border-0 my-2 rounded-2">
                  Register Now
                </button>
              </ScrollLink>
          
          </div>
        </div>
      </div>

      <div
        className="webcards row p-3 p-lg-5 my-3 rounded-3 mx-3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div className="col-sm-12 col-lg-6">
          <h2 className="webtxt">
            <b>Why Attend the Webinar?</b>
          </h2>
          <ScrollLink to={"Webinarcontact"}>
            <button className="regbtn p-2 border-0 my-3 rounded-2">
              SAVE YOUR FREE SPOT
            </button>
          </ScrollLink>
        </div>

        <div className="col-sm-12 col-lg-6 listedtext">
          <ul>
            <li className="py-1">
              Optimize Production Planning with Genius ERP
            </li>
            <li className="py-1">
              Streamline Manufacturing for Enhanced Efficiency
            </li>
            <li className="py-1">
              Harness Real-Time Data for Better Decision-Making
            </li>
            <li className="py-1">
              Explore Customized Solutions for the Manufacturing Industry
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Webinarpart;
