// import React from 'react';
// import vert1 from "../Asset/vert1.png";
// import vert2 from "../Asset/Vert2.png";
// import vert3 from "../Asset/Vert3.png";
// import vert4 from "../Asset/Vert4.png";
// import vert5 from "../Asset/Vert5.png";
// import vert6 from "../Asset/Vert6.png";
// import vert7 from "../Asset/Vert7.png";
// import vert8 from "../Asset/Vert8.png";
// import vert9 from "../Asset/Vert9.png";
// import vert10 from "../Asset/Vert10.png";
// import vert11 from "../Asset/Vert11.png";
// import vert12 from "../Asset/Vert12.png";
// import vert13 from "../Asset/Vert13.png";
// import vert14 from "../Asset/Vert14.png";
// import vert15 from "../Asset/Vert15.png";
// import "./Verticals.css";

// function Verticals() {
//   return (
//     <div className="container verticalspart">
//       <h1 className="text-center businessheading py-4">Our Business Verticals</h1>
//       <div className="card border-0 businessverticalscard p-3 rounded-5">
//         <div className='d-flex flex-column justify-content-center align-items-center'>
//         <div className="row verticalpart">
//           {[
//             { img: vert1, label: "Automobile and Ancillary" },
//             { img: vert10, label: "Government" },
//             { img: vert6, label: "Mutual Funds" },
//             { img: vert2, label: "Banking and Financial Services" },
//             { img: vert3, label: "Health Care and Health System" },
//             { img: vert7, label: "Pharmaceuticals" },
//             { img: vert4, label: "Construction and Real Estate" },
//             { img: vert5, label: "Information Technology" },
//             { img: vert9, label: "Printing" },
//             { img: vert8, label: "Education" },
//             { img: vert15, label: "Manufacturing" },
//             { img: vert12, label: "Retail" },
//             { img: vert11, label: "FMCG" },
//             { img: vert13, label: "Media and PR" },
//             { img: vert14, label: "Textile" },
//           ].map((item, index) => (
//             <div key={index} className="col-sm-12 col-md-4">
//               <div className="d-flex align-items-center m-1 vertical-item">
//                 <img src={item.img} alt={item.label} className="vertical-img" />
//                 <p className="vertical-label ps-2">{item.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Verticals;






import React from "react";
import vert1 from "../Asset/vert1.png";
import vert2 from "../Asset/Vert2.png";
import vert3 from "../Asset/Vert3.png";
import vert4 from "../Asset/Vert4.png";
import vert5 from "../Asset/Vert5.png";
import vert6 from "../Asset/Vert6.png";
import vert7 from "../Asset/Vert7.png";
import vert8 from "../Asset/Vert8.png";
import vert9 from "../Asset/Vert9.png";
import vert10 from "../Asset/Vert10.png";
import vert11 from "../Asset/Vert11.png";
import vert12 from "../Asset/Vert12.png";
import vert13 from "../Asset/Vert13.png";
import vert14 from "../Asset/Vert14.png";
import vert15 from "../Asset/Vert15.png";
import "./Verticals.css";

function Verticals() {
  return (
  <>
    <div className="container">
      <h1 className="text-center erpheading1 py-5">Our Business Verticals</h1>
      <div className="verticalspart">
      <div className="businessverticalscard p-5 rounded-5 ">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="row verticalpart ms-0 ms-md-5">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert1} alt="Automobile and Ancillary" className="vertical-img" />
                <p className="vertical-label ps-2">Automobile and Ancillary</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert10} alt="Government" className="vertical-img" />
                <p className="vertical-label ps-2">Government</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert6} alt="Mutual Funds" className="vertical-img" />
                <p className="vertical-label ps-2">Mutual Funds</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert2} alt="Banking and Financial Services" className="vertical-img" />
                <p className="vertical-label ps-2">Banking and Financial Services</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert3} alt="Health Care and Health System" className="vertical-img" />
                <p className="vertical-label ps-2">Health Care and Health System</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert7} alt="Pharmaceuticals" className="vertical-img" />
                <p className="vertical-label ps-2">Pharmaceuticals</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert4} alt="Construction and Real Estate" className="vertical-img" />
                <p className="vertical-label ps-2">Construction and Real Estate</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert5} alt="Information Technology" className="vertical-img" />
                <p className="vertical-label ps-2">Information Technology</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert9} alt="Printing" className="vertical-img" />
                <p className="vertical-label ps-2">Printing</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert8} alt="Education" className="vertical-img" />
                <p className="vertical-label ps-2">Education</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert15} alt="Manufacturing" className="vertical-img" />
                <p className="vertical-label ps-2">Manufacturing</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert12} alt="Retail" className="vertical-img" />
                <p className="vertical-label ps-2">Retail</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert11} alt="FMCG" className="vertical-img" />
                <p className="vertical-label ps-2">FMCG</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert13} alt="Media and PR" className="vertical-img" />
                <p className="vertical-label ps-2">Media and PR</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center m-1 py-4">
                <img src={vert14} alt="Textile" className="vertical-img" />
                <p className="vertical-label ps-2">Textile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Verticals;



