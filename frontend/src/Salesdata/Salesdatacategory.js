// // import React, { useState } from "react";
// // import "./Salesdatacategory.css";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faDownload } from "@fortawesome/free-solid-svg-icons";
// // import { Link } from "react-scroll";
// // function Salesdatacategory() {
// //   const [selectedCategory, setSelectedCategory] = useState("General");
// //   const handleCategoryClick = (category) => {
// //     setSelectedCategory(category);
// //   };

// //   return (
// //     <div className="container-fluid">
// //       <h1 className="text-center headblog my-3">
// //         <b>Leads Page</b>
// //       </h1>
// //       <div className="row m-4">
// //         <div className="col d-flex flex-column flex-md-row justify-content-md-evenly border-bottom text-start">
// //           {["General", "Webinar"].map((category) => (
// //             <Link
// //               key={category}
// //               className={` ${
// //                 selectedCategory === category ? "active" : ""
// //               } col-12 col-md-auto text-start mb-2 mb-md-0 text-decoration-none`}
// //               onClick={() => handleCategoryClick(category)}
// //             >
// //               {category}
// //             </Link>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Conditional Table Rendering */}
// //       <div className="row">
// //         {selectedCategory === "General" && (
// //           <div className="col-12">
// //             <div className="d-flex justify-content-between align-items-center mb-3">
// //               <h3 className="webinarleads">General Leads</h3>
// //               <button className="leadsdownloadbtn p-2">
// //                 Download Leads <FontAwesomeIcon icon={faDownload} />
// //               </button>
// //             </div>
// //             <div className="table-responsive table-sales">
// //               <table className="table table-striped">
// //                 <thead>
// //                   <tr>
// //                     <th>Name</th>
// //                     <th>Mobile Number</th>
// //                     <th>Request Type</th>
// //                     <th>Business Email</th>
// //                     <th>Company Name</th>
// //                     <th>Company Website</th>
// //                     <th>Description</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   <tr>
// //                     <td>Dev</td>
// //                     <td>987898788</td>
// //                     <td>General Info</td>
// //                     <td>dev@gmail.com</td>
// //                     <td>abc</td>
// //                     <td>www.abc.com</td>
// //                     <td>Demo call</td>
// //                   </tr>
// //                   <tr>
// //                     <td>Dev</td>
// //                     <td>987898788</td>
// //                     <td>General Info</td>
// //                     <td>dev@gmail.com</td>
// //                     <td>abc</td>
// //                     <td>www.abc.com</td>
// //                     <td>Demo call</td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         )}

// //         {selectedCategory === "Webinar" && (
// //           <div className="col-12">
// //             <div className="d-flex justify-content-between align-items-center mb-3">
// //               <h3 className="webinarleads">Webinar Leads</h3>
// //               <button className="leadsdownloadbtn p-2">
// //                 Download Leads <FontAwesomeIcon icon={faDownload} />
// //               </button>
// //             </div>
// //             <div className="table-responsive table-sales" >
// //               <table className="table table-striped">
// //                 <thead>
// //                   <tr>
// //                     <th>Name</th>
// //                     <th>Mobile Number</th>
// //                     <th>Email</th>
// //                     <th>Designation</th>
// //                     <th>Company Name</th>
// //                     <th>State</th>
// //                     <th>City</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   <tr>
// //                     <td>abc</td>
// //                     <td>7876789876</td>
// //                     <td>abc@gmail.com</td>
// //                     <td>Developer</td>
// //                     <td>ABC</td>
// //                     <td>TN</td>
// //                     <td>CBE</td>
// //                   </tr>
// //                   <tr>
// //                     <td>abc</td>
// //                     <td>7876789876</td>
// //                     <td>abc@gmail.com</td>
// //                     <td>Developer</td>
// //                     <td>ABC</td>
// //                     <td>TN</td>
// //                     <td>CBE</td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Salesdatacategory;




// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import "./Salesdatacategory.css";
// import { Link } from "react-scroll";
// import { useNavigate } from "react-router-dom";
// function Salesdatacategory() {

//   const [selectedCategory, setSelectedCategory] = useState("General");
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };
// const Navigate=useNavigate()
//   const generalLeads = [
//     { Name: "Dev", Mobile: "987898788", Type: "General Info", Email: "dev@gmail.com", Company: "abc", Website: "www.abc.com", Description: "Demo call" },
//     { Name: "Dev", Mobile: "987898788", Type: "General Info", Email: "dev@gmail.com", Company: "abc", Website: "www.abc.com", Description: "Demo call" },
//   ];

//   const webinarLeads = [
//     { Name: "abc", Mobile: "7876789876", Email: "abc@gmail.com", Designation: "Developer", Company: "ABC", State: "TN", City: "CBE" },
//     { Name: "abc", Mobile: "7876789876", Email: "abc@gmail.com", Designation: "Developer", Company: "ABC", State: "TN", City: "CBE" },
//   ];

//   const exportToExcel = (data, filename) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//     const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
//     saveAs(blob, `${filename}.xlsx`);
//   };

//   return (
//     <div className="container-fluid">
//       <h1 className="text-center headblog my-3">
//         <b>Leads Page</b>
//       </h1>
//       <div className="row m-4">
//         <div className="col d-flex flex-column flex-md-row justify-content-md-evenly border-bottom text-start">
//           {["General", "Webinar"].map((category) => (
//             <Link
//               key={category}
//               className={` ${selectedCategory === category ? "active" : " "} mb-2 mb-md-0 text-decoration-none`}
//               onClick={() => handleCategoryClick(category)}
//             >
//               {category}
//             </Link>
//           ))}
//           <button className="btn btn-outline-danger" onClick={()=>Navigate("/")}>Logout</button>
//         </div>
//       </div>

//       <div className="row">
//         {selectedCategory === "General" && (
//           <div className="col-12">
//             <div className="d-flex justify-content-between mb-3">
//               <h3 className="webinarleads">General Leads</h3>
//               <button
//                 className="leadsdownloadbtn p-2"
//                 onClick={() => exportToExcel(generalLeads, "General_Leads")} >
//                 Download Leads <FontAwesomeIcon icon={faDownload} />
//               </button>
//             </div>
//             <table className="table-responsive table-sales w-100">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Mobile Number</th>
//                   <th>Request Type</th>
//                   <th>Business Email</th>
//                   <th>Company Name</th>
//                   <th>Company Website</th>
//                   <th>Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {generalLeads.map((lead, index) => (
//                   <tr key={index}>
//                     <td>{lead.Name}</td>
//                     <td>{lead.Mobile}</td>
//                     <td>{lead.Type}</td>
//                     <td>{lead.Email}</td>
//                     <td>{lead.Company}</td>
//                     <td>{lead.Website}</td>
//                     <td>{lead.Description}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {selectedCategory === "Webinar" && (
//           <div className="col-12">
//             <div className="d-flex justify-content-between mb-3">
//               <h3 className="webinarleads">Webinar Leads</h3>
//               <button
//                 className="leadsdownloadbtn p-2"
//                 onClick={() => exportToExcel(webinarLeads, "Webinar_Leads")}>
//                 Download Leads <FontAwesomeIcon icon={faDownload} />
//               </button>
//             </div>
//             <table className="table-responsive table-sales w-100">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Mobile Number</th>
//                   <th>Email</th>
//                   <th>Designation</th>
//                   <th>Company Name</th>
//                   <th>State</th>
//                   <th>City</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {webinarLeads.map((lead, index) => (
//                   <tr key={index}>
//                     <td>{lead.Name}</td>
//                     <td>{lead.Mobile}</td>
//                     <td>{lead.Email}</td>
//                     <td>{lead.Designation}</td>
//                     <td>{lead.Company}</td>
//                     <td>{lead.State}</td>
//                     <td>{lead.City}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Salesdatacategory;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./Salesdatacategory.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Salesdatacategory() {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [generalLeads, setGeneralLeads] = useState([]);
  const [webinarLeads, setWebinarLeads] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    // Fetch General Leads Data
    fetch("https://www.kggeniuslabs.com:5000/glform-data")
      .then((response) => response.json())
      .then((data) => setGeneralLeads(data))
      .catch((error) => console.error("Error fetching General Leads:", error));

    // Fetch Webinar Leads Data
    fetch("https://www.kggeniuslabs.com:5000/webinar-data")
      .then((response) => response.json())
      .then((data) => setWebinarLeads(data))
      .catch((error) => console.error("Error fetching Webinar Leads:", error));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const exportToExcel = (data, filename) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${filename}.xlsx`);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center headblog my-3">
        <b>Leads Page</b>
      </h1>
      <div className="row m-4">
        <div className="col d-flex flex-column flex-md-row justify-content-md-evenly border-bottom text-start">
          {["General", "Webinar"].map((category) => (
            <Link
              key={category}
              className={` ${selectedCategory === category ? "active" : " "} mb-2 mb-md-0 text-decoration-none`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Link>
          ))}
          <Link className=" logouttxt" onClick={() => Navigate("/")}>
            Logout
          </Link>
        </div>
      </div>

      <div className="row">
        {selectedCategory === "General" && (
          <div className="col-12">
            <div className="d-flex justify-content-between mb-3">
              <h3 className="webinarleads">General Leads</h3>
              <button
                className="leadsdownloadbtn p-2"
                onClick={() => exportToExcel(generalLeads, "General_Leads")}
              >
                Download Leads <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
            <div className="table-responsive table-sales ">
            <table className="w-100" >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Business Email</th>
                  <th>Company Name</th>
                  <th>Company Website</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {generalLeads.map((lead, index) => (
                  <tr key={index}>
                    <td>{lead.name}</td>
                    <td>{lead.phno}</td>
                    <td>{lead.email}</td>
                    <td>{lead.company_name}</td>
                    <td>{lead.company_site}</td>
                    <td>{lead.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        )}

        {selectedCategory === "Webinar" && (
          <div className="col-12">
            <div className="d-flex justify-content-between mb-3">
              <h3 className="webinarleads">Webinar Leads</h3>
              <button
                className="leadsdownloadbtn p-2"
                onClick={() => exportToExcel(webinarLeads, "Webinar_Leads")}
              >
                Download Leads <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
            <div className="table-responsive table-sales ">
            <table className="w-100">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Email</th>
                  <th>Designation</th>
                  <th>Company Name</th>
                  <th>Date</th>
                  <th>slot</th>
                  <th>State</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {webinarLeads.map((lead, index) => (
                  <tr key={index}>
                    <td>{lead.name}</td>
                    <td>{lead.phoneNumber}</td>
                    <td>{lead.email}</td>
                    <td>{lead.designation}</td>
                    <td>{lead.companyName}</td>
                    <td>{lead.date}</td>
                    <td>{lead.slot}</td>
                    <td>{lead.state}</td>
                    <td>{lead.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Salesdatacategory;
