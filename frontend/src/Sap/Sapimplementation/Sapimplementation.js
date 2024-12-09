import React from 'react';
import "./Sapimplementation.css";
function Sapimplementation() {
  return (
    <div className='container-fluid bganalyse'>
    <div className='container implementationpart'>
      <h3 className='text-center my-5 hanahead'>S/4HANA Implementations</h3> 
       <div className='row'>
        <div className='col-sm-12 col-md-6 my-2'>
          <div className='publiccloud p-4 border-0'>
          <h4 className='headimp p-3'>SAP S/4HANA Private Cloud</h4>
          <div className='hanatext my-5 ms-1'>
          <p>Select the Optimal Cloud ERP Solution with SAP S/4HANA Cloud, Private Edition</p>
          <p className='pt-2'>It offers a highly customizable ERP solution, preserving your existing SAP ERP configurations while providing enhanced flexibility and continuity.</p>
          </div>
        </div>
        </div>

        <div className='col-sm-12 col-md-6 my-2'>
          <div className='publiccloud p-4 border-0 hanatext'>
          <h4 className='headimp p-3'>SAP S/4HANA Public Cloud</h4>
          <div className='hanatext my-5 ms-1'>
          <p>Choose the Best Way to Adopt Cloud ERP and streamline your operations</p>
          <p>SAP S/4HANA Cloud, public edition is a cloud-based ERP solution offering comprehensive tools for managing finance, procurement, supply chain and sales. It’s tailored for medium-sized enterprises..</p>
        </div>
        </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Sapimplementation