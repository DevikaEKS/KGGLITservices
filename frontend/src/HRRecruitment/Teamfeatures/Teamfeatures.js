import React from 'react';
import "./Teamfeatures.css";
import teamimg1 from "../Asset/working-with-blueprint.jpg";
import teamimg2 from "../Asset/Team 3.jpg";
import teamimg3 from "../Asset/successful-medical-team.jpg";
function Teamfeatures() {
  return (
    <div className='container-fluid bgforteam py-5' id='team'>
      <h1 className='text-center text-light mb-4'>Build Your Best Team With Us</h1>
      <p className='text-center text-light mb-5'>
        Unlock your organization's potential with our personalized staffing solutions.<br />
        We bring a human touch to hiring, ensuring you find the perfect fit for every role.
      </p>
      <div className='row sm-mx-0 lg-mx-5'>
        <div className='col-sm-12 col-md-4 col-lg-4 my-2'>
          <div className='card mx-auto tcard h-100 curvespart'>
            <img src={teamimg1} className='card-img-top' title='Blue-collar professionals' alt="Blue-collar professionals engaged in skilled trades" />
            <div className='card-body featurescard'>
              <h5 className='card-title text-light titleteam'>Blue-Collar Professionals</h5>

              <ul className='listpart'>
                <li>Skilled Roles tailored to your needs.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 my-2'>
          <div className='card mx-auto tcard h-100  curvespart'>
            <img src={teamimg3} className='card-img-top' title='Healthcare professionals' alt="HR consultants working with healthcare professionals" />
            <div className='card-body featurescard'>
              <h5 className='card-title text-light titleteam'>Healthcare Professionals</h5>
              <ul className='listpart'>
                <li>Nursing</li>
                <li>Physiotherapy</li>
                <li>Auxiliary Healthcare Services</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 my-2'>
          <div className='card mx-auto  tcard h-100  curvespart'>
            <img src={teamimg2} className='card-img-top' title='White-collar professionals
' alt="White-collar workers in an office environment, featuring IT professionals " />
            <div className='card-body featurescard'>
              <h5 className='card-title text-light titleteam'>White-Collar Professionals</h5>
              <ul className='listpart'>
                <li>IT Roles</li>
                <li>Non-IT Roles</li>
              </ul>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teamfeatures;
