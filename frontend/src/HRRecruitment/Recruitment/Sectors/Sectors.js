import React from 'react';
import "./Sectors.css";
import ITimg from "../../Asset/itim.png";
import edu from "../../Asset/Education.png";
import healthcare from "../../Asset/Hcare.png";
import hrconsult from "../../Asset/HR Consultancy.png";
import ites from "../../Asset/ITES.png";
import skill from "../../Asset/skill Training.png";
import oil from "../../Asset/oil.png";
import car from "../../Asset/car.png";
import textile from "../../Asset/textile.png";
import Telecom from "../../Asset/telecom.png";
import manufacture from "../../Asset/manufacturing.png";
import construction from "../../Asset/construction.png";
import logistic from "../../Asset/logistic.png";
import ecom from "../../Asset/ecommerce.png";

function Sectors() {
  return (
    <div className='container-fluid sectorsbg d-flex flex-column align-items-center' id='sectorspart'>
      <div className='text-center'>
        <h1 className='sectorheading mt-5'>Sectors We Work In</h1>
        <p className='parasectors'>
          Our extensive sector knowledge empowers us to provide holistic industry-specific hiring solutions.
        </p>
       <div className='row justify-content-center my-3'>
        <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3 sectorbox'>
          <div className='card shadowsector text-center py-2 crd'>
            <img src={ITimg} alt="IT" className='imlogos'/>
            <p>IT</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-2  mx-1 my-3'>
          <div className='card shadowsector text-center py-2 crd'>
            <img src={ites} alt="ITES" className='imlogos'/>
            <p>ITES</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
          <div className='card shadowsector text-center py-2 crd'>
            <img src={healthcare} alt="Healthcare" className='imlogos'/>
            <p>Healthcare</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
          <div className='card shadowsector text-center py-2 crd'>
            <img src={edu} alt="Education" className='imlogos'/>
            <p>Education</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
          <div className='card shadowsector text-center py-2 crd'>
            <img src={skill} alt="Training" className='imlogos'/>
            <p>Skilled Training</p>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
          <div className='card shadowsector text-center py-2 crd'>
            <img src={hrconsult} alt="HR" className='imlogos'/>
            <p>HR Consultancy</p>
          </div>
        </div>

        <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
           <div className='card shadowsector text-center py-2 crd'>
           <img src={oil} alt="Oil" className='imlogos'/>
                   <p>Oil and Gas</p>
           </div>
         </div>
        

         <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
           <div className='card shadowsector text-center py-2 crd'>
           <img src={car} alt="Automobiles" className='imlogos'/>
                   <p>Automobiles</p>
           </div>
        </div>

        
         <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
           <div className='card shadowsector text-center py-2 crd'>
           <img src={textile} alt="Retail" className='imlogos'/>
                   <p>Retail</p>
           </div>
         </div>

         <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
          <div className='card shadowsector text-center py-2 crd'>
          <img src={construction} alt="Construction" className='imlogos'/>
                  <p>Construction</p>
          </div>
         </div>


        <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
          <div className='card shadowsector text-center py-2 crd'>
          <img src={logistic} alt="Logistics" className='imlogos'/>
                  <p>Logistics</p>
          </div>
        </div>

        <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
           <div className='card shadowsector text-center py-2 crd'>
           <img src={Telecom} alt="Telecom" className='imlogos'/>
                   <p>Telecom</p>
           </div>
         </div>

         <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
           <div className='card shadowsector text-center py-2 crd'>
           <img src={manufacture} alt="Manufacturing" className='imlogos'/>
                   <p>Manufacturing</p>
           </div>
         </div>


         <div className='col-sm-12 col-md-4 col-lg-2 mx-1 my-3'>
          <div className='card shadowsector text-center py-2 crd'>
          <img src={ecom} alt="ecommerce" className='imlogos'/>
                  <p>eCommerce</p>
          </div>
        </div>

       
        </div>
      </div>
    </div>
  );
}

export default Sectors;
