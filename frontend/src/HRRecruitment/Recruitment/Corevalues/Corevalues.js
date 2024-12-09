import React from 'react';
import lapcore1 from "../../Asset/passionate.png";
import lapcore3 from "../../Asset/innovative.png";
import lapcore4 from "../../Asset/Transparentlap.png";
import lapcore5 from "../../Asset/groupphoto.png";
import lapcore6 from "../../Asset/resilientlap.png";
import lapcore7 from "../../Asset/collabrative.png";
import lapcore8 from "../../Asset/lapcore8.png";
import "./Corevalues.css";

function Corevalues() {
  return (
    <div className='container-fluid bgcore' id='corevalue'>
      <h1 className='my-5 valuetext text-center' style={{ textAlign: "left" }}>
        Our <span style={{ textDecoration: "underline", textUnderlineOffset: "10px" }}>Core Val</span>ues
      </h1>

      <div className='container corepart'>
  
        <div className='row my-2 py-2'>
          <div className='col  order-2 order-sm-1'>
           
            <img src={lapcore1} title='Passionate' alt='KG Genius labs pursue impactful partnerships with companies sharing our passion for HR consultancy' className='corepics1 large' />
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts order-1'>
            <h1>Passionate</h1>
            <p>We seek impactful opportunities and partnerships with companies that share our passion.</p>
          </div>
        </div>

      
        <div className='row my-2'>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts '>
            <h1>Optimistic</h1>
            <p>We view challenges as growth opportunities and strive for positive solutions.</p>
          </div>
          <div className='col'>
            <img src={lapcore8} title='Optimistic' alt=' KG Genius Labs embraces challenges as opportunities for growth and positive outcomes in HR Consultancy' className='corepics1 large' />
          </div>
        </div>



        <div className='row my-2'>
          <div className='col order-2 order-sm-1'>
            <img src={lapcore3} title='Innovative' alt='KG Genius Labs consistently enhances technology and efficiency to improve our services to hire people easily for any kind of business' className='corepics1 large' />
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts order-1 '>
            <h1>Innovative</h1>
            <p>We continually improve technology, efficiency, and resources to enhance our services.</p>
          </div>
        </div>

      
        <div className='row my-2'>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts'>
            <h1>Collaborative</h1>
            <p>We value strong relationships and effective communication with our team, clients, and vendors, leveraging collective strengths for company success</p>
          </div>
          <div className='col'>
            <img src={lapcore7} title=' Collaborative' alt='KG Genius Labs builds strong relationships, fostering teamwork and effective communication for success' className='corepics1 large' />
          </div>
        </div>


        <div className='row my-2'>
          <div className='col order-2 order-sm-1'>
            <img src={lapcore6} title='Resilient' alt='KG Genius Labs encourages accountability, initiative, and a focus on the greater good' className='corepics1 large' />
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts order-1'>
            <h1>Resilient</h1>
            <p>We promote self-awareness, accountability, initiative, and a commitment to the greater good.</p>
          </div>
        </div>

      
        <div className='row my-2'>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts'>
            <h1>Diverse & Inclusive</h1>
            <p>We represent and partner with diverse and inclusive teams, talent, and clients.</p>
          </div>
          <div className='col'>
            <img src={lapcore5} title='Diverse & Inclusive' alt='We champion diverse and inclusive teams, talent, and clients for recruitment' className='corepics1 large' />
          </div>
        </div>


        <div className='row my-2'>
          <div className='col order-2 order-sm-1'>
            <img src={lapcore4} title='Transparent' alt='KG Genius Labs upholds openness, honesty, and authenticity in all we do' className='corepics1 large' />
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-start text-start coretexts order-1'>
            <h1>Transparent</h1>
            <p>We are committed to openness, honesty, and authenticity, fostering a culture of transparency.</p>
          </div>
        </div>
 
      </div>
    </div>
  );
}

export default Corevalues;
