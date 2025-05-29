import React, { useState, useEffect } from "react";

function TestimonialForm() {
  const [formData, setFormData] = useState({
    company_name: "",
    full_name: "",
    role: "",
    content: "",
  });
  const [image, setImage] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const hasOtherFields = () => {
    return (
      formData.company_name.trim() ||
      formData.full_name.trim() ||
      formData.role.trim() ||
      formData.content.trim() ||
      image ||
      companyLogo
    );
  };

  const validateForm = () => {
    const otherFields = hasOtherFields();

    if (video && otherFields) {
      setError("Cannot upload video if other fields are provided.");
      return false;
    }

    if (!video && !otherFields) {
      setError("Please provide at least one field (video or other details).");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    const data = new FormData();
    if (formData.company_name) data.append("company_name", formData.company_name);
    if (formData.full_name) data.append("full_name", formData.full_name);
    if (formData.role) data.append("role", formData.role);
    if (formData.content) data.append("content", formData.content);
    if (image) data.append("image", image);
    if (companyLogo) data.append("company_logo", companyLogo);
    if (video) data.append("video", video);

    try {
      const response = await fetch("https://kggeniuslabs.com:5000/add-testimonial", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess("Testimonial added successfully!");
        setFormData({ company_name: "", full_name: "", role: "", content: "" });
        setImage(null);
        setCompanyLogo(null);
        setVideo(null);
        document.querySelectorAll("input[type=file]").forEach((input) => (input.value = ""));
      } else {
        setError(`Error: ${result.error}`);
      }
    } catch (err) {
      setError("An error occurred while submitting the form.");
      console.error("Submission error:", err);
    }
  };

  const otherFieldsFilled = hasOtherFields();

  return (
    <div className="container-fluid px-4 py-5">
      <h1 className="clienttext mb-4">Add a Testimonial</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3">
            <label htmlFor="company_name" className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleInputChange}
              disabled={!!video}
            />
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <label htmlFor="full_name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              disabled={!!video}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <input
              type="text"
              className="form-control"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              disabled={!!video}
            />
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <label htmlFor="image" className="form-label">Profile Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setImage)}
              disabled={!!video}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="company_logo" className="form-label">Company Logo</label>
          <input
            type="file"
            className="form-control"
            id="company_logo"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setCompanyLogo)}
            disabled={!!video}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">Testimonial Video</label>
          <input
            type="file"
            className="form-control"
            id="video"
            accept="video/*"
            onChange={(e) => handleFileChange(e, setVideo)}
            disabled={otherFieldsFilled}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Testimonial Content</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows="5"
            value={formData.content}
            onChange={handleInputChange}
            disabled={!!video}
          ></textarea>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <button type="submit" className="btn btn-outline-dark">Submit Testimonial</button>
      </form>
    </div>
  );
}

export default TestimonialForm;
