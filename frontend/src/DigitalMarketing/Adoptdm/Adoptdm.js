import React from 'react';
import grim1 from "../Asset/generaldmpart.png";
import "./Adoptdm.css";

function Adoptdm() {
  return (
    <div className='container-fluid entiredm'>
      <h1 className='text-center py-5 dmtxt '>The Urgency of Adopting Digital Marketing with<br/> KG Genius Labs</h1>
      <div className='row'>
        <div className='col-sm-12 col-lg-6 d-flex justify-content-center align-items-center my-3'>
          <img src={grim1} className='smallim' alt="Digital Marketing" />
        </div>
        <div className='col-sm-12 col-lg-6 my-3 adoptpara'>
          <p>In today’s connected world, business has changed dramatically. Traditional marketing methods are no longer enough to stay competitive. Digital Marketing isn't just an option—it's a necessity.</p>
          <p>With 4.9 billion internet users, your customers are online, seeking solutions your business can provide. Without digital marketing, you risk being invisible.</p>
          <p>Each day you delay, your competitors gain ground, engaging audiences and capturing market share. Act now.</p>
          <p>Digital marketing offers unmatched reach, precise targeting, and measurable results—through SEO, Social Media Marketing, and more. KG Genius Labs helps you connect, drive engagement, and boost sales.</p>
          <p>Don’t fall behind. The digital world moves fast. Invest in digital marketing today to secure your future success. The urgency is real, and the time to act is now. Embrace digital marketing to thrive.</p>
        </div>
      </div>
    </div>
  );
}

export default Adoptdm;
