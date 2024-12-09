import React from 'react';
import "./Demobook.css";
import lmsim2 from "../Asset/Zenbook.png";

function Crmdemobook() {
  return (
    <div className="container demobook-container">
      <div className="row align-items-center">
        <div className="col-sm-12 col-lg-7">
          <img src={lmsim2} alt="LMS" className="img-fluid" />
        </div>
        <div className="col-sm-12 col-lg-5">
          <div className="card border-0 bookcard py-4 px-5">
            <h1 className="text-center mb-4 crmpart"><b>Book a Demo</b></h1>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" className="form-control form-control2" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="time">Time</label>
                <input type="time" id="time" className="form-control form-control2" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control form-control2" />
              </div>
              <div className="text-center">
                <input type="submit" className="shadebtn" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crmdemobook;
