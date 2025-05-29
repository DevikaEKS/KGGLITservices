import React, { useState } from "react";
import "./ClientForm.css";

export default function ClientForm() {
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState("");

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!companyName || !logo) {
      setStatus("Please provide both company name and logo.");
      return;
    }

    const formData = new FormData();
    formData.append("company_name", companyName);
    formData.append("logo", logo);

    try {
      const response = await fetch("https://kggeniuslabs.com:5000/add-client", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Client added successfully!");
        setCompanyName("");
        setLogo(null);
        setPreview(null);
      } else {
        setStatus(result.message || "Failed to add client.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <form className="client-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add Client Info</h2>

      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter company name"
          required
        />
      </div>

      <div className="form-group">
        <label>Company Logo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleLogoChange}
          required
        />
        {preview && (
          <div className="logo-preview">
            <img src={preview} alt="Logo Preview" />
          </div>
        )}
      </div>

      <button type="submit" className="submit-btn">Submit</button>

      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
