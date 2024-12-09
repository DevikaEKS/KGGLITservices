import React from 'react'
import abap1 from "../Asset/abap.png";
import abap2 from "../Asset/SAP_Concur 1.png";
import abap3 from "../Asset/SAP-SuccessFactors-Logo 1.png";
import abap4 from "../Asset/BTP.png";
import abap5 from "../Asset/Cx.png";
import abap6 from "../Asset/topic-700-3765c64dcede404c 1.png";
import "./Valueadded.css";
function Valueadded() {
  return (
    <div className='container-fluid bganalyse'> 
    <div className='container abap py-3'>
        <div className='row text-center'>
            <h1 className='my-5 hanahead'>Value Added Solutions</h1>
            <p className='px-4 px-lg-5 paravalue'>We help organizations make the best agile decisions through the power of data management and analysis, understanding the past, monitoring the present, and predicting the future. We help you transform your business by unlocking the power of data and driving business outcomes via SAP Business Analytics (Fiori / SAC) and Power BI, with customized dashboards, infographics, and operational metrics.</p>
            <div className='col-sm-12 col-lg-6 abappart'>
                <div className='abapbox m-2 p-5'>
                    <img src={abap1} alt='ABAP'/>
                    <h4 className='my-3 crdhead'>ABAP (WRICEFs)</h4>
                    <p className='p-4'>Our highly experienced ABAP team uses a range of best practices to develop and optimize SAP WRICEFs to the highest standard.</p>
                </div>
            </div>


            <div className='col-sm-12 col-lg-6 text-center'>
                <div className='abapbox m-2 p-4'>
                    <img src={abap4} alt='BTP Services'/>
                    <h4 className='my-3 crdhead'>BTP Services</h4>
                    <p className='p-4'>We increase ROI on your investment by using SAP’s Business Technology Platform to extend S/4HANA capability with intelligent process automation.</p>
                </div>
            </div>



            <div className='col-sm-12 col-lg-6 text-center'>
                <div className='abapbox m-2 p-4'>
                    <img src={abap3} alt='HCM Cloud Software Solution'/>
                    <h4 className='my-3 crdhead'>SAP SuccessFactors Partners: HCM Cloud Software Solution</h4>
                    <p className='p-4'>SAP Success Factors is a cloud HCM software solution designed to improve your people and talent management capabilities by providing your
                    organization with analytical tools to manage your employee life cycle with a 360   view. As a cloud solution, it can be accessed on any device.</p>
                </div>
            </div>


            <div className='col-sm-12 col-lg-6 text-center'>
                <div className='abapbox m-2 p-4'>
                    <img src={abap2} alt='Travel Expense Management'/>
                    <h4 className='mt-5 crdhead'>SAP Concur:</h4>
                    <h4 className='my-3 crdhead'>Travel Expense Management</h4>
                    <p>SAP Concur is a solution that saves you time and money by automating travel expense management processes whatever the size of your company, including requests, booking, and payment.</p>
                </div>
            </div>


            <div className='col-sm-12 col-lg-6 text-center'>
                <div className='abapbox m-2 p-4'>
                    <img src={abap6} alt='Procurement & Sourcing with SAP Ariba'/>
                    <h4 className='my-3 crdhead'>Procurement & Sourcing with SAP Ariba</h4>
                    <p>SAP Ariba is an intelligent sourcing and procurement platform that streamlines and optimizes the procurement process, ultimately leading to
                    better cost savings and business outcomes for organizations.</p>
                </div>
            </div>


            <div className='col-sm-12 col-lg-6 text-center'>
                <div className='abapbox m-2 p-4'>
                    <img src={abap5} alt='Customer Experience Solutions'/>
                    <h4 className='my-3 crdhead'>Customer Experience Solutions</h4>
                    <p>Understanding, connecting, and communicating with clients, suppliers, and collaborators. Positioning our brand. Selling and providing our products and services.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Valueadded