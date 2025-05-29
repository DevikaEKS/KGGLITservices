import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DMLandingcontent.css";
import { useNavigate } from "react-router-dom";

function DMLandingcontact() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");

  const [otherService, setOtherService] = useState("");
  const[utmdata,setUtmdata]=useState({});
const nav=useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    mobile_number: "",
    email: "",
    services:"",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [requestType, setRequestType] = useState(""); // State for request type

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
      const queryParam = new URLSearchParams(window.location.search);
      const utm_source = queryParam.get('utm_source');
      const utm_medium = queryParam.get('utm_medium');
      const utm_campaign = queryParam.get('utm_campaign');
      setUtmdata({utm_source,utm_medium,utm_campaign});
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const validateName = (username) => {
    const nameRegex = /^[A-Za-z\s.]{2,}$/;
    return nameRegex.test(username);
  };
  const validatemobile_number = (mobile_number) => {
    const phoneRegex = /^[0-9]{7,15}$/; // Adjusted to ensure the number is between 7 and 15 digits
    return phoneRegex.test(mobile_number);
  };
 
  const validateForm = () => {
    const newErrors = {};
    // if (!requestType) {
    //   newErrors.requestType = "Please select a request type."; // Ensure this is set
    // }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.username || !validateName(formData.username)) {
      newErrors.username = "Invalid username.";
    }
    if (!formData.mobile_number || !validatemobile_number(formData.mobile_number)) {
      newErrors.mobile_number = "Enter Valid Phone Number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate fields on change
    if (name === "username") {
      if (!validateName(value)) {
        setErrors((prev) => ({ ...prev, username: "Invalid name" }));
      } else {
        setErrors((prev) => ({ ...prev, username: undefined }));
      }
    }
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      } else {
        setErrors((prev) => ({ ...prev, email: undefined }));
      }
    }

    if (name === "mobile_number") {
      if (!validatemobile_number(value)) {
        setErrors((prev) => ({
          ...prev,
          mobile_number: "Enter Valid Phone Number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, mobile_number: undefined }));
      }
    }
    
   
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
    console.log("Username:", formValues.username);
    console.log("Mobile Number:", formValues.mobile_number);
    console.log("Email:", formValues.email);
    console.log("Message:", formValues.message);
    console.log("Services:", formValues.services);
    console.log("Selected Country Code:", selectedCountryCode);
    console.log("UTM Data:", utmdata);
  
    setLoading(true);
    axios
      .post("https://www.kggeniuslabs.com:5000/dm-contact", formValues)
      .then((response) => {
        if (response.data.message === "Form submitted and email sent successfully") {
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
      mobile_number: "",
      services:"",
      message: "",
    });
    setSelectedCountryCode("+91");
    setRequestType(""); // Reset request type
    setErrors({});
  };

  return (
    <div className="container-fluid frmcontacts" id="dmlcontact">
      <ToastContainer />
      <div className="container">
        <div className="row my-5 py-4">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="textcontact text-light mx-0 ">
              <h1 className="dmlandingcontacthead my-sm-4 my-lg-0 py-2">Know Your <br/> Digital Presence</h1>
              <p className="dmcontentpara1">
                <b>Get a Free Website Audit – Submit Your Request Today!</b>
              </p>
              <p className="paradml">
              We specialize in SEO, social media marketing, Google Ads campaigns, and custom digital marketing strategies for B2B growth.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
        
          <form
              onSubmit={handleSubmit}
              className="bg-light p-3 rounded-3 mx-sm-0 mx-lg-5"
            >
              <h4 className="contactheadertext mx-3">
                Book a meeting with our experts
              </h4>
              <div className="form-group m-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control form-control1"
                  name="username"
                   placeholder="Enter your Name"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && (
                  <small className="text-danger">{errors.username}</small>
                )}
              </div>
              

              <div className="form-group m-3">
                <label className="form-label">Mobile Number</label>
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
  placeholder="Enter your Mobile"
  name="mobile_number"  
  value={formData.mobile_number}
  onChange={handleChange}
  style={{ width: "70%" }}
  required
  pattern="[0-9]*"
  maxLength="15"
/>

                </div>
                {errors.mobile_number && (
                  <small className="text-danger">{errors.mobile_number}</small>
                )}
              </div>

              <div className="form-group m-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  id="useremail"
                  placeholder="Enter your Email"
                  className="form-control form-control1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>

              <div className="form-group m-3">
  <label className="form-label">Choose Our Services</label>
  <br />
  <select
  className="form-control1 py-2 rounded-2 px-1"
  style={{ width: "100%" }}
  name="services"
  value={formData.services}
  onChange={(e) => {
    setFormData({ ...formData, services: e.target.value });
    console.log("Selected Service:", e.target.value);
  }}
  required
>
  <option value="">Choose Our Services</option>
  <option value="SEO">SEO</option>
  <option value="PPC">PPC</option>
  <option value="Social Media Marketing">Social Media Marketing</option>
  <option value="Complete Digital Marketing">Complete Digital Marketing</option>
  <option value="Other">Other(Mention Below)</option>
</select>
  
</div>

              <div className="form-group m-3">
                <label className="form-label">Enter your Specific Requirement</label>
                <textarea
                  className="form-control form-control1"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
           <p className="text-center txtclr">We will get back to you within 24 hours.</p>
              <div className="d-flex justify-content-center m-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}>
                  {loading ? "Submitting..." : "Book a Free Consultation"}
                </button>
              </div>
              
            </form>
             
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default DMLandingcontact;