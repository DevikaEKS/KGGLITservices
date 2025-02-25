
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DMAutopopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [requestType, setRequestType] = useState("");
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    // whatsappnumber: "",
    companyName: "",
    companyWebsite: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const data = response.data;
        const codes = data.map((country) => ({
          name: country.name.common,
          code: country.idd?.root
            ? `${country.idd.root}${
                country.idd.suffixes ? country.idd.suffixes[0] : ""
              }`
            : "+1",
        }));
        setCountryCodes(codes);
      })
      .catch((error) => console.error("Error fetching country codes:", error));

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowModal(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{7,15}$/;
    return phoneRegex.test(phoneNumber);
  };
  
  const validateName = (username) => {
    const nameRegex = /^[A-Za-z\s.]{2,}$/;
    return nameRegex.test(username);
  };
  const validateWebsite = (url) => {
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return urlRegex.test(url);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!requestType) {
      newErrors.requestType = "Please select a request type.";
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.username || !validateName(formData.username)) {
      newErrors.username = "Invalid username.";
    }
    if (!formData.phoneNumber || !validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter valid phone number";
    }
   
    if (!formData.companyWebsite || !validateWebsite(formData.companyWebsite)) {
      newErrors.companyWebsite = "Enter a valid website URL.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Live validation as user types
    if (name === "username") {
      if (!validateName(value)) {
        setErrors((prev) => ({ ...prev, username: "Invalid name" }));
      } else {
        setErrors((prev) => ({ ...prev, username: undefined }));
      }
    }
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email address." }));
      } else {
        setErrors((prev) => ({ ...prev, email: undefined }));
      }
    }
    
    if (name === "phoneNumber") {
      if (!validatePhoneNumber(value)) {
        setErrors((prev) => ({
          ...prev,
          phoneNumber: "Enter valid phone number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
      }
    }

    if (name === "companyWebsite") {
      if (!validateWebsite(value)) {
        setErrors((prev) => ({ ...prev, companyWebsite: "Enter valid URL" }));
      } else {
        setErrors((prev) => ({ ...prev, companyWebsite: undefined }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const fullPhoneNumber = `${selectedCountryCode}${formData.phoneNumber}`;
    const formValues = {
      username: formData.username,
      email: formData.email,
      phno: fullPhoneNumber,
      company_name: formData.companyName,
      company_site: formData.companyWebsite,
      message: formData.description,
      request_type_id: requestType,
    };

    console.log(formValues);

    // setLoading(true);
    axios
    .post("https://www.kggeniuslabs.com:5000/submit-form", formValues)
    .then((response) => {
      if (response.data.message === "Form submitted successfully") {
        toast.success("Form submitted successfully");
        resetForm();
      } else if (response.data.message === "Database error") {
        toast.error("Value not inserted, try again");
      } else if (response.data.message === "Email already exists") {
        toast.error("Email already exists");
      }
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      companyWebsite: "",
      description: "",
    });
    setSelectedCountryCode("+91");
    setRequestType("");
    setErrors({});
  };

  return (
    <div className="bg-light">
    <Modal show={showModal} onHide={handleClose} className="zindexdm">
      <Modal.Header closeButton>
        <Modal.Title className="letstext">
          <b>Let's Connect</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid text-dark">
          <form onSubmit={handleSubmit} className="rounded-3">
            <div className="form-group m-3">
              <input
                type="text"
                className="form-control form-control1"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
              />
              {errors.username && (
                <small className="text-danger">{errors.username}</small>
              )}
            </div>
           

            <div className="form-group m-3">
              <div className="input-group form-control1 rounded-2">
                <select
                  className="form-select"
                  value={selectedCountryCode}
                  onChange={(e) => setSelectedCountryCode(e.target.value)}
                  style={{ width: "30%" }}
                >
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="whatsppnumber"
                  className="form-control"
                  placeholder="Mobile number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style={{ width: "70%" }}
                  required
                  pattern="[0-9]*"
                  maxLength="15"
                />
              </div>
              {errors.phoneNumber && (
                <small className="text-danger">{errors.phoneNumber}</small>
              )}
            </div>
            <div className="form-group m-3">
            <select className="form-control1 py-2 rounded-2 px-1"  style={{ width: "100%" }}  onChange={(e) => {
                      setRequestType(e.target.value);
                      // Clear the error if a valid option is selected
                      if (e.target.value) {
                        setErrors((prev) => ({
                          ...prev,
                          requestType: undefined,
                        }));
                      }
                    }}
                    required>
  <option value="" disabled selected>Select Request Type</option>
  <option value="1">SEO</option>
  <option value="2">PPC</option>
  <option value="3">Social Media Marketing</option>
  <option value="4">Complete Digital Marketing</option>
  <option value="5">Other(Mention Below)</option>
</select>

              </div>

            <div className="form-group m-3">
              <input
                type="email"
                id="useremail"
                className="form-control form-control1"
                name="email"
                placeholder="Business Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <div className="form-group m-3">
              <input
                type="text"
                className="form-control form-control1"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <p className="text-danger">{errors.companyName}</p>
              )}
            </div>

            <div className="form-group m-3">
              <input
                type="url"
                id="companywebsite"
                placeholder="Company Website"
                className="form-control form-control1"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                required
              />
              {errors.companyWebsite && (
                <small className="text-danger">{errors.companyWebsite}</small>
              )}
            </div>

            <div className="form-group m-3">
              <textarea
                className="form-control form-control1"
                name="description"
                placeholder="Description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="d-flex justify-content-center m-3">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
    </div>
  );
};

export default DMAutopopup;

