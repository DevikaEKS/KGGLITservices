
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
                  <th>Services</th>
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
                    <td>{lead.services}</td>
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
