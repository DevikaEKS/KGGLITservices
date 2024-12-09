import React, { useRef } from 'react';
import "./Bespoke.css";
import mbapp from "../Asset/mobileapp.png";
import mbapp2 from "../Asset/androidapp.png";
import mbapp3 from "../Asset/ecom.png";
function Bespoke() {
  const enterpriseRef = useRef(null); 
  const mobileAppRef = useRef(null); 
  const ecommerceRef = useRef(null); 

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='container-fluid text-center'>
         <div className='row '>  

<div>
  <div className='d-flex justify-content-center flex-wrap mt-5 mb-2'>
    <div><button className='btn btn-light rounded-5 shbtn m-2 ' onClick={() => scrollToSection(enterpriseRef)}>Enterprise Application Integration</button></div>
    <div><button className='btn btn-light rounded-5 shbtn m-2 '  onClick={() => scrollToSection(mobileAppRef)}>Mobile Application</button></div>
    <div><button className='btn btn-light rounded-5 shbtn m-2'onClick={() => scrollToSection(ecommerceRef)}>E-commerce Website Development</button></div>
  </div>
</div>

        <h1 className='text-center my-5'><b>Bespoke Applications</b></h1> 
        <p className='bespokepara'>Elevate your business with our customizable applications designed exclusively for you. Design bespoke dashboards, websites, and applications to meet your exact needs. From design to functionality, everything is crafted to match your vision. Experience flexibility, security, and seamless performance across all devices.</p>
     
            <div className='col-sm-12 col-md-6' ref={enterpriseRef}>
<img src={mbapp} alt='Enterprise Application Integration' className='mobileappim' />
            </div>
            <div className='col-sm-12 col-md-6 bespoketextpart my-5'>
                <h4 className='enterprisehead1'>Enterprise Application Integration</h4>
                <p>Enhance your business with our Enterprise Application Integration (EAI) services. Disconnected systems and siloed data can slow down your business operations and limit growth. Our EAI solutions seamlessly connect your diverse systems—whether legacy, on-premise, or cloud-based—into a cohesive, unified platform.</p>
                <p>With real-time data flow, improved collaboration, and automation of repetitive processes, we enable you to break down barriers and streamline your operations.</p>
            </div>
        </div>
        <div className='row py-4'>
<h1 className='text-center my-4 enterprisehead py-2'>Key Benefits of EAI</h1>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card benefitscard border-0 p-4 h-100'>
  <h4>Improved Collaboration</h4>
  <p>Ensure seamless communication between departments and systems.</p>
</div>
</div>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card border-0 p-4 h-100 whitecrd '>
  <h4>Automated Workflows</h4>
  <p>Eliminate manual tasks and redundant processes with automation.</p>
</div>
</div>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card benefitscard border-0 p-3 h-100 '>
  <h4>Data Consistency</h4>
  <p>Synchronize data across all platforms, ensuring accuracy and integrity.</p>
</div>
</div>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card p-3 h-100 whitecrd border-0'>
  <h4>Real-time Analytics</h4>
  <p>Gain actionable insights with real-time access to integrated data.</p>
</div>
</div>
        </div>


<div className='row my-5 mx-sm-0 mx-md-5' id='mobileapplicationpart' ref={mobileAppRef}>
  <div className='col bespoketextpart d-flex flex-column justify-content-center align-items-center'>
    <h4 className='enterprisehead'>Mobile Application</h4>
    <p>Reach your audience wherever they are with our Mobile Application Development services. As smartphones and tablets become the primary mode of communication and commerce, having a powerful mobile app is essential for business success. Whether you’re targeting consumers or enterprise users, we develop intuitive, high-performance mobile applications customized to your business needs.</p>
  </div>
  <div className='col'>
<img src={mbapp2} alt='Mobile Application' className='mobileappim'/>
  </div>
</div>




<div className='row py-4 '>
<h1 className='text-center my-4'><b>Our Mobile App Services</b></h1>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card benefitscard border-0 p-4 h-100 '>
  <h4>iOS & Android Development</h4>
  <p>We design and develop native applications for both iOS and Android platforms to ensure a seamless user experience across devices</p>
</div>
</div>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card border-0 p-4 h-100 whitecrd '>
  <h4>User-Centric Design</h4>
  <p>Our apps are built with the user in mind, providing intuitive interfaces and a fluid user journey to maximize engagement</p>
</div>
</div>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card benefitscard border-0 p-4 h-100 '>
  <h4>High Performance
  & Security</h4>
  <p>We ensure your apps are fast, reliable, and secure, adhering to industry standards and best practices.</p>
</div>
</div>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card p-4 h-100 whitecrd border-0 '>
  <h4>Post-launch Support</h4>
  <p>Our services don’t stop at deployment. We offer ongoing support and updates to keep your app performing at its best.</p>
</div>
</div>
 </div>

<div className='row py-5' id='ecommercepart' ref={ecommerceRef}>
  <div className='col'>
<img src={mbapp3} alt='E-commerce Website Development' className='mobileappim'/>
  </div>
  <div className='col d-flex flex-column justify-content-center align-items-center bespoketextpart'>
    <h4 className='enterprisehead1'>E-commerce Website Development</h4>
    <p>Your e-commerce website is the cornerstone of your business success in today's competitive online marketplace. Our E-commerce Website Development services are tailored to help you build a strong digital storefront that not only attracts customers but also converts them into loyal buyers. We specialize in creating secure, scalable, and user-friendly e-commerce platforms that enhance the shopping experience and increase revenue.</p>
  </div>
</div>


<div className='row py-4 '>
<h1 className='text-center my-4'><b>Our E-commerce Solutions Include</b></h1>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card benefitscard border-0 p-4 h-100'>
  <h4>Custom Design & Development</h4>
  <p>We build e-commerce websites that reflect your brand’s identity while offering a smooth, intuitive user experience.</p>
</div>
</div>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card border-0 p-4 h-100 whitecrd'>
  <h4>Secure Payment Integration</h4>
  <p>From payment gateways to data encryption, we ensure the highest level of security for your transactions.</p>
</div>
</div>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card benefitscard border-0 p-4 h-100'>
  <h4>Inventory & Order Management</h4>
  <p>Simplify your operations with integrated tools for inventory tracking, order fulfillment, and customer management.</p>
</div>
</div>
<div className='col-sm-12 col-lg-3 my-2'>
<div className='card p-4 h-100 whitecrd border-0'>
  <h4>Mobile Optimization</h4>
  <p>Reach customers on any device with fully responsive, mobile-friendly designs.</p>
</div>
</div>
        </div>




    </div>
  )
}

export default Bespoke



