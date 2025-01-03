// import React from 'react'
// import "./Softwarepart.css";
// import bannerim2 from "../Asset/bannerreq.png";
// function Softwarepart() {
//   return (
//     <div className='container'>
//         <div className='row softwarepart py-5'>
//             <div className='col-sm-12 col-md-7'>
//                 <h1 className='erpheading py-1'>ERP Software</h1>
//                 <p>is undeniably vital for ensuring rapid and sustainable growth in today's competitive business landscape. Unlike generic offerings in the market, we firmly reject the "One Size Fits All" philosophy. At KG Genius Labs, we acknowledge that every organization has its unique challenges and requirements.</p>
//                 <p>We take pride in being the premier provider of bespoke ERP solutions, delivering systems that prioritize your needs and help your business thrive.</p>
//                 <p>hello</p>
//                 <h1 className='erpheading py-1'>Genius ERP</h1>
//                 <p>offers customised solution designed to simplify and resolve your complex challenges. Our automated processes help optimize procurement and logistics cycles, streamline order management and delivery, efficiently manage suppliers, capital, and associated risks, and enhance financial performance — all in one integrated system.</p>
//             </div>
//             <div className='col-sm-12 col-md-5'>
//                <img src={bannerim2} className='bannerimg ms-0 ms-lg-2'/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Softwarepart


import React from 'react'
import "./Softwarepart.css";
import bannerim2 from "../Asset/bannerreq.png";

function Softwarepart() {
  return (
    <div className='container'>
        <div className='row softwarepart py-5'>
            <div className='col-12 col-md-7'>
                <p><span className='erptxt1'>ERP Software</span> is undeniably vital for ensuring rapid and sustainable growth in today's competitive business landscape. Unlike generic offerings in the market, we firmly reject the "One Size Fits All" philosophy. At KG Genius Labs, we acknowledge that every organization has its unique challenges and requirements.</p>
                <p>We take pride in being the premier provider of bespoke ERP solutions, delivering systems that prioritize your needs and help your business thrive.</p>
                <div className='d-flex justify-content-center align-items-center py-0 py-md-5'>
                  <img src={bannerim2} className='bannerimg d-block d-sm-none img-fluid' title='ERP Software' alt="KG Genius Labs presenting Genius ERP solutions with a clean interface and user-friendly navigation to potential customers in a professional setting."  />
                </div>
                <p><span className='erptxt1'>KG Genius ERP</span> offers customized solution designed to simplify and resolve your complex challenges. Our automated processes help optimize procurement and logistics cycles, streamline order management and delivery, efficiently manage suppliers, capital, and associated risks, and enhance financial performance — all in one integrated system.</p>
            </div>
            <div className='col-12 col-md-5'>
               <img src={bannerim2} className='bannerimg ms-0 ms-lg-2 d-none d-sm-block' alt="banner" />
            </div>
        </div>
    </div>
  )
}

export default Softwarepart;
