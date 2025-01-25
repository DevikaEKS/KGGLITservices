import React from 'react'
import "./Bannerdm.css";
function Bannerdm() {
  return (
<>
    <div className='container-fluid bannerdmbg py-5 d-none d-md-block'>
      <div className='row'>
      <div className='text-light py-5 px-5 mx-5'>
        <div className='col-sm-12 col-md-6'>
       <h1 className='bannerdmhead'>Your Partner in Digital Success</h1>
       <h5 className='bannerparadm'>Expert Marketing Services to Amplify Reach, Build Trust, and Boost Sales.</h5>
       <h3 className='bannerparadm1'>Best Digital Marketing Service in Coimbatore</h3>
       <button className='bg-light rounded-2 border-0 px-4 py-3 my-2 connectbtn'>Get a Free Website Audit</button>
       </div>
      </div>
      </div>
      </div>

      <div className='container-fluid bannerdmbgmb py-5 d-block d-md-none text-light'>
      <div className='col-sm-12 col-md-6'>
       <h1 className='bannerdmhead'>Your Partner in Digital Success</h1>
       <h5 className='bannerparadm'>Expert Marketing Services to Amplify Reach, Build Trust, and Boost Sales.</h5>
       <h3 className='bannerparadm1'>Best Digital Marketing Service in Coimbatore</h3>
       <button className='bg-light rounded-2 border-0 px-4 py-3 my-2 connectbtn'>Get a Free Website Audit</button>
       </div>
      </div>

     
      </>
  )
}

export default Bannerdm