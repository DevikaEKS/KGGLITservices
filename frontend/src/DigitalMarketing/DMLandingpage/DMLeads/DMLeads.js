// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import { Link } from "react-scroll";
// import { useNavigate } from "react-router-dom";

// function DMLeads() {
//   const [selectedCategory, setSelectedCategory] = useState("General");
//   const [generalLeads, setGeneralLeads] = useState([]);
//   const [landingLeads, setLandingLeads] = useState([]);
//   const navigate = useNavigate();

//   // Fetch General Leads
//   useEffect(() => {
//     if (selectedCategory === "General") {
   
//       fetch("http://192.168.252.180:5000/dm-contact")
//         .then((response) => response.json())
//         .then((data) => setGeneralLeads(data))
//         .catch((error) =>
//           console.error("Error fetching General Leads:", error)
//         );
//     }
//   }, [selectedCategory]);

//   // Fetch Landing Leads
//   useEffect(() => {
//     if (selectedCategory === "Landing") {
//       fetch("http://192.168.252.180:5000/dm-contact")
//         .then((response) => response.json())
//         .then((data) => setLandingLeads(data))
//         .catch((error) =>
//           console.error("Error fetching Landing Leads:", error)
//         );
//     }
//   }, [selectedCategory]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

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
//           {["Landing"].map((category) => (
//             <Link
//               key={category}
//               className={` ${
//                 selectedCategory === category ? "active" : ""
//               } mb-2 mb-md-0 text-decoration-none`}
//               onClick={() => handleCategoryClick(category)}
//             >
//               {category}
//             </Link>
//           ))}
//           <Link className="logouttxt" onClick={() => navigate("/")}>
//             Logout
//           </Link>
//         </div>
//       </div>

//       <div className="row">
//         {selectedCategory === "General" && (
//           <div className="col-12">
//             <div className="d-flex justify-content-between mb-3">
//               <h3 className="webinarleads">General Leads</h3>
//               <button
//                 className="leadsdownloadbtn p-2"
//                 onClick={() => exportToExcel(generalLeads, "General_Leads")}>
//                 Download Leads <FontAwesomeIcon icon={faDownload} />
//               </button>
//             </div>
//             <div className="table-responsive table-sales">
//               <table className="w-100">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Mobile Number</th>
//                     <th>Business Email</th>
//                     <th>Company Name</th>
//                     <th>Company Website</th>
//                     <th>Message</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {generalLeads.map((lead, index) => (
//                     <tr key={index}>
//                       <td>{lead.name}</td>
//                       <td>{lead.phno}</td>
//                       <td>{lead.email}</td>
//                       <td>{lead.company_name}</td>
//                       <td>{lead.company_site}</td>
//                       <td>{lead.message}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {selectedCategory === "Landing" && (
//           <div className="col-12">
//             <div className="d-flex justify-content-between mb-3">
//               <h3 className="webinarleads">Landing Leads</h3>
//               <button
//                 className="leadsdownloadbtn p-2"
//                 onClick={() => exportToExcel(landingLeads, "Landing_Leads")}
//               >
//                 Download Leads <FontAwesomeIcon icon={faDownload} />
//               </button>
//             </div>
//             <div className="table-responsive table-sales">
//               <table className="w-100">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Mobile Number</th>
//                     <th>Email</th>
//                     <th>Company Name</th>
//                     <th>State</th>
//                     <th>City</th>
//                     <th>Message</th>
//                     <th>UTM State</th>
//                     <th>UTM Medium</th>
//                     <th>UTM Campaign</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {landingLeads.map((lead, index) => (
//                     <tr key={index}>
//                       <td>{lead.username}</td>
//                       <td>{lead.mobile_number}</td>
//                       <td>{lead.email}</td>
//                       <td>{lead.company_name}</td>
                 
//                       <td>{lead.state}</td>
//                       <td>{lead.city}</td>
//                       <td>{lead.message}</td>
//                       <td>{lead.utmsource}</td>
//                       <td>{lead.utmmedium}</td>
//                       <td>{lead.utmcampaign}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DMLeads;


import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

function DMLeads() {
  const [landingLeads, setLandingLeads] = useState([]);
  const navigate = useNavigate();

  // Fetch Landing Leads
  useEffect(() => {
    fetch("https://www.kggeniuslabs.com:5000/dm-contact")
      .then((response) => response.json())
      .then((data) => setLandingLeads(data))
      .catch((error) =>
        console.error("Error fetching Landing Leads:", error)
      );
  }, []);

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
        <b>Digital Marketing Leads</b>
      </h1>
      <div className="row m-4">
        <div className="col d-flex flex-row justify-content-between border-bottom text-start">
          <h3 className="webinarleads">Leads</h3>
          <button
            className="leadsdownloadbtn p-2"
            onClick={() => exportToExcel(landingLeads, "Landing_Leads")}
          >
            Download Leads <FontAwesomeIcon icon={faDownload} />
          </button>
          <button className="logouttxt btn btn-danger" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="table-responsive table-sales">
            <table className="w-100">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Email</th>
                  <th>Company Name</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Message</th>
                  <th>UTM Source</th>
                  <th>UTM Medium</th>
                  <th>UTM Campaign</th>
                </tr>
              </thead>
              <tbody>
                {landingLeads.map((lead, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{lead.username}</td>
                    <td>{lead.mobile_number}</td>
                    <td>{lead.email}</td>
                    <td>{lead.company_name}</td>
                    <td>{lead.state}</td>
                    <td>{lead.city}</td>
                    <td>{lead.message}</td>
                    <td>{lead.utmsource}</td>
                    <td>{lead.utmmedium}</td>
                    <td>{lead.utmcampaign}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DMLeads;
