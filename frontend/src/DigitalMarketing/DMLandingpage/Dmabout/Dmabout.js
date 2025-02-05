
import React from 'react';
import dmimg from "../../Asset/dmland.png";
import "../../../index.css";

function Dmabout() {
  return (
    <div className="container dmaboutpart">
      <div className="row my-0 my-md-5 px-2">
        {/* Heading for small devices */}
        <h3 className="fw-bold text-center d-block d-md-none py-3 py-md-0">
        Professional Digital Marketing Services designed to deliver sustainable results by increasing traffic, driving sales, and enhancing conversions.
        </h3>

        {/* Image Column */}
        <div className="col-sm-12 col-md-5 d-flex justify-content-center align-items-center">
          <img
            src={dmimg}
            title="SEO Marketing Services for Higher Search Engine Ranking"
            alt="Search engine optimization for maximum online visibility"
            className="dmserveimg img-fluid mx-auto py-3 py-md-0"
          />
        </div>

        {/* Text Column */}
        <div className="col-sm-12 col-md-7">
          <h2 className="fw-bold py-4 d-none d-md-block">
          Professional Digital Marketing Services designed to deliver sustainable results by increasing traffic, driving sales, and enhancing conversions.
          </h2>
          <p className='paraaboutdm'>
            In a competitive market, digital marketing is the key to making your brand stand out, attract the right customers and achieve long-term growth. With precise strategies and actionable insights, businesses can not only expand their reach but also create meaningful connections with their audiences.
          </p>
          <p className='paraaboutdm'>
            At KG Genius Labs, we take a client-first approach, understanding your unique business needs to deliver customized solutions that enhance your brand's visibility across SEO, social media, email campaigns, PPC advertising, and content optimizations, helping your brand gain the visibility it deserves. With ROI-driven strategies and a commitment to measurable results, we empower businesses to thrive in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dmabout;
