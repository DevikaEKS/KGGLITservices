import React from 'react'
import "./Greenfield.css"


function Greenfield() {
  return (
    <div className='container-fluid greenfieldbg d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='row justify-content-center text-center'>
        <div className='col-sm-12 col-lg-4'>
          <div className='card border-0 p-5 m-2 greenfieldtext'>
            <h4 className='greenhead'>Greenfield Implementation</h4>
            <p>We help you build a powerful ERP foundation with a brand-new implementation of S/4HANA, optimizing your existing business processes for a future-proof IT landscape.</p>
          </div>
        </div>
        <div className='col-sm-12 col-lg-4'>
          <div className='card border-0 p-5 m-2 greenfieldtext'>
            <h4 className='greenhead'>Brownfield Implementation</h4>
            <p>We quickly transform ECC6 environments into S/4HANA with our SAP system conversion services, so you can benefit from cutting-edge innovations.</p>
          </div>
        </div>
        <div className='col-sm-12 col-lg-4'>
          <div className='card border-0 p-5 m-2 greenfieldtext'>
            <h4 className='greenhead'>S/4HANA <br/> Upgrade</h4>
            <p>Our upgrade services align with SAP’s release schedule to keep your S/4HANA deployment up-to-date, so you can take advantage of all the latest feature improvements.</p>
          </div>
        </div>
        <div className='col-sm-12 col-lg-4'>
          <div className='card border-0 p-5 m-2 greenfieldtext'>
            <h4 className='greenhead'>SAP S/4HANA on Premise/Any Premise</h4>
            <p>We leverage our experience deploying S/4HANA on-premise or on hyper scalers to create high-performance, resilient, and secure SAP environments.</p>
          </div>
        </div>
        <div className='col-sm-12 col-lg-4'>
          <div className='card border-0 p-5 m-2 greenfieldtext'>
            <h4 className='greenhead'>Rise with SAP S/4HANA Private Cloud Edition</h4>
            <p>We help you leverage RISE with SAP to transform into an intelligent enterprise on your own terms, with a simplified delivery model and subscription pricing..</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Greenfield
