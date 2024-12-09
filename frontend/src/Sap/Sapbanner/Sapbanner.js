import React, { useState, useEffect } from "react";
import "./Sapbanner.css";
import { Link as ScrollLink, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Footercard from "../../Landingpage/Footercard/Footercard";
import Sapsupport from "../Sapsupport/Sapsupport";
import Valueadded from "../Valueadded/Valueadded";
import Sapimplementation from "../Sapimplementation/Sapimplementation";
import Hanacloud from "../Hanacloud/Hanacloud";
import Methodology from "../Methodology/Methodology";
import Greenfield from "../Greenfield/Greenfield";
import Newimplement from "../Newimplement/Newimplement";
import Contactsap from "../Contactsap/Contactsap";
import Analysis from "../Analysis/Analysis";
import Footersap from "../FooterSap/Footersap";
import Sapblog from "../Sapblog/Sapblog";

function Sapbanner() {
  const [selectedSection, setSelectedSection] = useState("s4hana");
  useEffect(() => {
    if (selectedSection) {
      setTimeout(() => {
        scroller.scrollTo(selectedSection, {
          smooth: true,
          duration: 100,
          offset: -50, // Offset to adjust scroll position
        });
      });
    }
  }, [selectedSection]);

  const handleLinkClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <div>
        <div className="container-fluid sapbannerpart" id="sapbanner">
          {/* Banner Part */}
          <div className="py-4">
            <div className="row">
              <div className="sapbannertext p-sm-3 p-md-5">
                <h1>Discover Our Comprehensive</h1>
                <h1>Portfolio Of End-to-End Services.</h1>
                <p>
                  Through technology, we provide advanced solutions to meet the
                  current and future challenges of organizations.
                  <br /> KG Genius Labs offers an extensive range of SAP
                  solutions that are customizable to match the unique needs of
                  clients.
                </p>

                <div className="d-block d-md-none fnt">
                  <div>
                    <ScrollLink
                      to="s4hana"
                      smooth={true}
                      duration={500}
                      onClick={() => handleLinkClick("s4hana")}
                      className={`linkhover ${
                        selectedSection === "s4hana" ? "active-link" : ""
                      }`}
                    >
                      S/4HANA Implementations{" "}
                      <FontAwesomeIcon icon={faAngleRight} />
                    </ScrollLink>
                  </div>
                  <div>
                    <ScrollLink
                      to="support"
                      smooth={true}
                      onClick={() => handleLinkClick("support")}
                      className={`linkhover   ${
                        selectedSection === "support" ? "active-link" : ""
                      }`}
                    >
                      SAP Support Services{" "}
                      <FontAwesomeIcon icon={faAngleRight} />
                    </ScrollLink>
                  </div>
                  <div>
                    <ScrollLink
                      to="data"
                      smooth={true}
                      onClick={() => handleLinkClick("data")}
                      className={`linkhover  ${
                        selectedSection === "data" ? "active-link" : ""
                      }`}
                    >
                      Data & Analytics <FontAwesomeIcon icon={faAngleRight} />
                    </ScrollLink>
                  </div>
                  <div>
                    <ScrollLink
                      to="valueAdded"
                      smooth={true}
                      duration={100}
                      onClick={() => handleLinkClick("valueAdded")}
                      className={`linkhover ${
                        selectedSection === "valueAdded" ? "active-link" : ""
                      }`}
                    >
                      Value Added Solutions{" "}
                      <FontAwesomeIcon icon={faAngleRight} />
                    </ScrollLink>
                  </div>
                </div>

                <div className="d-none d-md-block">
                  <div className="row">
                    <div className="col-md-6 text-start">
                      <ScrollLink
                        to="s4hana"
                        smooth={true}
                        duration={500}
                        onClick={() => handleLinkClick("s4hana")}
                        className={`linkhover ${
                          selectedSection === "s4hana" ? "active-link" : ""
                        }`}
                      >
                        S/4HANA Implementations{" "}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </ScrollLink>
                    </div>

                    <div className="col-md-6">
                      <ScrollLink
                        to="support"
                        smooth={true}
                        duration={100}
                        onClick={() => handleLinkClick("support")}
                        className={`linkhover ${
                          selectedSection === "support" ? "active-link" : ""
                        }`}
                      >
                        SAP Support Services{" "}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </ScrollLink>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6 text-start">
                      <ScrollLink
                        to="data"
                        smooth={true}
                        duration={500}
                        onClick={() => handleLinkClick("data")}
                        className={`linkhover ${
                          selectedSection === "data" ? "active-link" : ""
                        }`}
                      >
                        Data & Analytics <FontAwesomeIcon icon={faAngleRight} />
                      </ScrollLink>
                    </div>

                    <div className="col-md-6 ">
                      <ScrollLink
                        to="#valueAdded"
                        smooth={true}
                        duration={500}
                        onClick={() => handleLinkClick("valueAdded")}
                        className={`linkhover ${
                          selectedSection === "valueAdded" ? "active-link" : ""
                        }`}
                      >
                        Value Added Solutions{" "}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </ScrollLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-below-banner">
          {selectedSection === "s4hana" && (
            <div id="s4hana">
              <Sapimplementation />
              <Hanacloud />
              <Methodology />
              <Greenfield />
              <Newimplement />
              <Sapblog />
              <Contactsap />
              <Footercard />
              <Footersap />
            </div>
          )}
          {selectedSection === "support" && (
            <div id="support">
              <Sapsupport />
              <Sapblog />
              <Contactsap />
              <Footercard />
              <Footersap />
            </div>
          )}
          {selectedSection === "data" && (
            <div id="data">
              <Analysis />
              <Sapblog />
              <Contactsap />
              <Footercard />
              <Footersap />
            </div>
          )}
          {selectedSection === "valueAdded" && (
            <div id="valueAdded">
              <Valueadded />
              <Sapblog />
              <Contactsap />
              <Footercard />
              <Footersap />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sapbanner;
