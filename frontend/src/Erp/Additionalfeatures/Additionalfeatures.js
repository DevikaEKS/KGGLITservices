import React from 'react';
import "./Additionalfeatures.css";
import feat1 from "../Asset/feat1.png";
import feat2 from "../Asset/feat2.png";
import feat3 from "../Asset/feat3.png";
import feat4 from "../Asset/feat4.png";
import feat5 from "../Asset/feat5.png";
import feat6 from "../Asset/feat6.png";
import feat7 from "../Asset/feat7.png";
import feat8 from "../Asset/feat8.png";
import feat9 from "../Asset/feat9.png";
import feat10 from "../Asset/feat10.png";
import feat11 from "../Asset/feat11.png";
import feat12 from "../Asset/feat12.png";
import feat13 from "../Asset/feat13.png";
import feat14 from "../Asset/feat14.png";

function Additionalfeatures() {
  const features = [
    { img: feat1, text: "Mobile Friendly" },
    { img: feat2, text: "Multi-Currency" },
    { img: feat3, text: "Document Management" },
    { img: feat4, text: "Role Based Access" },
    { img: feat5, text: "Field Level Customization" },
    { img: feat6, text: "Mobile App" },
    { img: feat7, text: "Email & SMS Integration" },
    { img: feat8, text: "Report Builder" },
    { img: feat9, text: "Shared Calendar" },
    { img: feat10, text: "Customer, Vendor Portal" },
    { img: feat11, text: "Website and Web Forms" },
    { img: feat12, text: "Payment Integration" },
    { img: feat13, text: "Approval Workflows" },
    { img: feat14, text: "Customizable Reports" },
  ];

  const features1=[
    { img: feat1, text: "Mobile Friendly" },
    { img: feat2, text: "Multi-Currency" },
    { img: feat3, text: "Document Management" },
    { img: feat4, text: "Role       Based Access" },
    { img: feat5, text: "Field Level Customization" },
    { img: feat7, text: "Email & SMS Integration" },
    { img: feat6, text: "Mobile App" },
    { img: feat8, text: "Report Builder" },
    { img: feat9, text: "Shared Calendar" },
    { img: feat12, text: "Payment Integration" },
    { img: feat11, text: "Website and Web Forms" },
    { img: feat10, text: "Customer, Vendor Portal" },
    { img: feat13, text: "Approval Workflows" },
    { img: feat14, text: "Customizable Reports" },
  ];

  return (
    <div className="container-fluid m-0 p-0">
      <h1 className="text-center erpheading1 py-5">Additional Features</h1>
      <div className='d-none d-md-block'>
      <div className="row rw">
        {features.map((feature, index) => (
          <div className="custom-col d-flex  justify-content-center align-items-center text-center" key={index}>
            <img src={feature.img} alt={feature.text} className="imgfeat "/>
            <p className="py-2 mb-0">{feature.text}</p>
          </div>
        ))}
  </div>
  </div>

  <div className="container-fluid d-block d-md-none">
  <div className="row d-flex justify-content-center align-items-center text-center m-0 p-0">
    {features1.map((feature, index) => (
      <div className="col-6" key={index}>
        <div className="feature-card">
          <img src={feature.img} alt={feature.text} className="imgfeat" />
          <p className="py-2 mb-0">{feature.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>






      
    </div>
  );
}

export default Additionalfeatures;

