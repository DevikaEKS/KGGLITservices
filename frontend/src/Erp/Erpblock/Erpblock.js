import React from "react";
import Plan1 from "../Asset/Plan1.png";
import Plan2 from "../Asset/Plan2.png";
import Plan3 from "../Asset/Plan3.png";
import Plan4 from "../Asset/Plan4.png";
import "./Erpblock.css";

function Erpblock() {
  return (
    <>
      <div className="container-fluid Erpblock d-none d-lg-block p-0 m-0">
        <div className="row py-5">
          <div className="col-md-6">
            <div className="brd">
              <div className="borderparts p-5">
                <h3 className="erpgeniustext">
                  KG Genius ERP offers a real-time approach powered by the latest technology and economic advancements, built around the 4 P's:
                </h3>
                <p>
                  These 4 P’s allow your entire business to adopt a flexible, standardized approach, while our tailored solutions help transform raw materials into finished products seamlessly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-6 py-4">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="d-flex justify-content-center align-items-center my-3 mx-1">
                  <img src={Plan1} title="Plan" alt="Plan" className="planimg" />
                  <h3 className="px-1 fw-bold">Plan</h3>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="d-flex justify-content-center align-items-center my-3 mx-1">
                  <img src={Plan3} title="Plan" alt="Plan" className="planimg" />
                  <h3 className="px-1 fw-bold">Put into action</h3>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="d-flex justify-content-center align-items-center my-4 ms-0 ms-lg-5 ps-5">
                  <img src={Plan2} title="Plan" alt="Plan" className="planimg" />
                  <h3 className="px-1 fw-bold">Program</h3>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="d-flex justify-content-center align-items-center  ms-lg-5 my-4 ps-5">
                  <img src={Plan4} title="Plan" alt="Plan" className="planimg"/>
                  <h3 className="px-1 fw-bold">Pursue</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content for small devices */}
      <div className="container Erpblock d-block d-lg-none">
  <div className="card capsule-border border-0">
    <div className="d-flex flex-column justify-content-center align-items-center p-4 erpmobile my-5">
      <h3 className="erpgeniustext">
        Genius ERP offers a real-time approach powered by the latest technology and economic advancements, built around the 4 P's:
      </h3>
    </div>
    <div className="row ms-3">
      <div className="col-12 col-md-6 d-flex justify-content-start align-items-center my-3">
        <img src={Plan1} title="Plan" alt="Plan" className="planimg" />
        <h3 className="ms-3">Plan</h3>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-start align-items-center my-3">
        <img src={Plan3} title="Plan" alt="Plan" className="planimg" />
        <h3 className="ms-3">Put into action</h3>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-start align-items-center my-3">
        <img src={Plan2} title="Plan" alt="Plan" className="planimg" />
        <h3 className="ms-3">Program</h3>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-start align-items-center my-3">
        <img src={Plan4} title="Plan" alt="Plan" className="planimg" />
        <h3 className="ms-3">Pursue</h3>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Erpblock;
