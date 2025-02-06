import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";


const ContactModal = ({ show, handleClose }) => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [utmdata, setUtmdata] = useState({});
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile_number: "",
    services: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
 

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const data = response.data;
        const codes = data.map((country) => ({
          name: country.name.common,
          code: country.idd?.root
            ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ""}`
            : "+1",
        }));
        setCountryCodes(codes);
      })
      .catch((error) => console.error("Error fetching country codes:", error));

    const queryParam = new URLSearchParams(window.location.search);
    const utm_source = queryParam.get("utm_source");
    const utm_medium = queryParam.get("utm_medium");
    const utm_campaign = queryParam.get("utm_campaign");
    setUtmdata({ utm_source, utm_medium, utm_campaign });
  }, []);

  const validateField = (name, value) => {
    let error = "";

    if (name === "username") {
      if (!value.trim()) error = "Name is required";
      else if (value.length < 2) error = "Name must be at least 2 characters";
    }

    if (name === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(value)) error = "Enter a valid Email address";
    }

    if (name === "mobile_number") {
      if (!value.trim()) error = "Mobile number is required";
      else if (!/^[6-9]\d{9}$/.test(value)) error = "Enter a valid Mobile number";
    }

    if (name === "services" && !value) {
      error = "Please select a service";
    }

    if (name === "message") {
      if (!value.trim()) error = "Message is required";
      else if (value.length < 5) error = "Message must be at least 5 characters";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateForm = () => {
    let isValid = true;
    Object.keys(formData).forEach((key) => validateField(key, formData[key]));
    isValid = Object.values(errors).every((error) => !error);
    return isValid;
  };
  
const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const fullmobile_number = `${selectedCountryCode}${formData.mobile_number}`;

    const formValues = {
        username: formData.username,
        mobile_number: fullmobile_number, 
        email: formData.email,
        message: formData.message, 
        utm_source: utmdata.utm_source,
        utm_medium: utmdata.utm_medium,
        utm_campaign: utmdata.utm_campaign,
        services: formData.services
    };
  
      console.log("Submitted Data:", formValues);
      axios
      .post("https://www.kggeniuslabs.com:5000/dm-contact", formValues)
      .then((response) => {
        if (response.data.message === "Form submitted and email sent successfully") {
         resetForm();
        } else if (response.data.message === "Database error") {
         
        } else if (response.data.message === "Email already exists") {
         
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
       
      });
  
      setTimeout(handleClose, 2000); // Close modal after 2 seconds
  };
  
  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      mobile_number: "",
      services: "",
      message: "",
    });
    setSelectedCountryCode("+91"); // Reset country code
    // setErrors({});
  };
  

  

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="letstext"><b>Let's Connect</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {successMessage && <p className="text-success text-center">{successMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="m-3">
              <input type="text" className="form-control form-control1" placeholder="Enter your Name"
                name="username" value={formData.username} onChange={handleChange}
              />
              {errors.username && <p className="text-danger">{errors.username}</p>}
            </div>

            <div className="m-3">
              <input type="email" className="form-control form-control1" placeholder="Enter your Email"
                name="email" value={formData.email} onChange={handleChange}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
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
                <input type="text" className="form-control" placeholder="Enter your Mobile Number" style={{ width: "70%" }}
                  name="mobile_number" value={formData.mobile_number} onChange={handleChange}
                />
              </div>
              {errors.mobile_number && <p className="text-danger">{errors.mobile_number}</p>}
            </div>

            <div className="form-group m-3">
              <select className="form-control1 rounded-2 py-2" style={{ width: "100%" }}
                name="services" value={formData.services} onChange={handleChange}
              >
                <option value="">Choose our Services</option>
                <option>SEO</option>
                <option>PPC</option>
                <option>Social Media Marketing</option>
                <option>Complete Digital Marketing</option>
                <option>Other (Mention Below)</option>
              </select>
              {errors.services && <p className="text-danger">{errors.services}</p>}
            </div>

            <div className="form-group m-3">
              <textarea className="form-control form-control1" name="message" placeholder="Message" rows="3"
                value={formData.message} onChange={handleChange}
              />
              {errors.message && <p className="text-danger">{errors.message}</p>}
            </div>

            <Modal.Footer>
              <Button variant="primary" type="submit" disabled={Object.keys(errors).some((key) => errors[key])}>
                Submit
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>

    </>
  );
};

export default ContactModal;
