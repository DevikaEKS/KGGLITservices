import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Contactpage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from 'react-helmet';
function Contactpage() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyWebsite: "",
    description: "",
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
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const validateName = (username) => {
    const nameRegex = /^[A-Za-z\s.]{2,}$/;
    return nameRegex.test(username);
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{7,15}$/; // Adjusted to ensure the number is between 7 and 15 digits
    return phoneRegex.test(phoneNumber);
  };


  const validateWebsite = (url) => {
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return urlRegex.test(url);
  };
  const validateForm = () => {
    const newErrors = {};
    if (!requestType) {
      newErrors.requestType = "Please select a request type."; // Ensure this is set
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.username || !validateName(formData.username)) {
      newErrors.username = "Invalid username.";
    }
    if (!formData.phoneNumber || !validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter Valid Phone Number";
    }
    if (!formData.companyWebsite || !validateWebsite(formData.companyWebsite)) {
      newErrors.companyWebsite = "Please enter a valid website URL.";
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

    if (name === "phoneNumber") {
      if (!validatePhoneNumber(value)) {
        setErrors((prev) => ({
          ...prev,
          phoneNumber: "Enter Valid Phone Number",
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

    console.log("submit");

    if (!validateForm()) return;

    const fullPhoneNumber = `${selectedCountryCode}${formData.phoneNumber}`;
    // const fullwhatsappnumber = `${selectedCountryCode}${formData.whatsappnumber}`;
    const formValues = {
      username: formData.username,
      email: formData.email,
      phno: fullPhoneNumber,
      // whatsappnumber: fullwhatsappnumber,
      company_name: formData.companyName,
      company_site: formData.companyWebsite,
      message: formData.description,
      request_type_id: requestType,
    };

    console.log(formValues);

    setLoading(true);
    axios
      .post("https://kggeniuslabs.com:5000/submit-form", formValues)
      .then((response) => {
        console.log(response);

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
    setRequestType(""); // Reset request type
    setErrors({});
  };

  return (
    <>
    <Helmet>
        <title> Contact KG Genius Labs | Connect with Our IT & SAP Experts
</title>
        <meta name="description" content="Get in touch with KG Genius Labs today! Whether you're looking for SAP S/4HANA solutions, IT consultancy, or digital marketing services, we’re here to help." />
        <meta name="keywords" content=" Contact KG Genius Labs, IT Consultancy, SAP S/4HANA Experts , Digital Marketing Services Inquiry, HR Consultancy " />
        <link rel="canonical" href="https://www.kggeniuslabs.com/contact" />
      </Helmet>

    <div className="container-fluid frmcontacts" id="sapcontact">
      <ToastContainer />
      <div className="container">
        <div className="row py-4">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="textcontact text-light">
              <h3 className="startpara">Start the </h3>
              <h3 className="endpara">Conversation Today</h3>
              <p className="conversationpara">
                Are you eager to explore how <br />
                <span className="endpara">KG Genius Lab's</span>
                <br />
                comprehensive solutions can help you achieve your business
                goals?
              </p>
              <div className=" d-none d-md-block">
                <h2>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="hovericon pe-2"
                  />
                  <b>Our Branches</b>{" "}
                </h2>
                <div className="d-flex">
                  <p className="conversationpara px-4">
                    <a
                      href="https://www.google.com/maps/place/KG+Genius+Labs/@11.0831794,76.9987774,15z/data=!4m6!3m5!1s0x2b66dd2813006db:0x8578e0607bb91ee0!8m2!3d11.0831794!4d76.9987774!16s%2Fg%2F11lp1km093?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                      className="text-decoration-none text-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Coimbatore
                      <span className="d-block mt-2 smlink">
                        KGiSL Campus, 365 Thudiyalur Road, Saravanampatti,
                        Coimbatore – 641035, Tamil Nadu, India.
                      </span>
                    </a>
                  </p>

                  <p className="px-5 conversationpara">
                    <a
                      href="https://www.google.com/maps?q=Ideaspace+Business+Center,+Millennium+Executive+Tower,+Sheikh+Zayed+Road,+Dubai,+United+Arab+Emirates"
                      className="text-decoration-none text-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dubai
                    </a>
                    <span className="d-block mt-2 smlink">
                      Ideaspace Business Center, Millennium Executive Tower,
                      Sheikh Zayed Road, Dubai, United Arab Emirates
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <form
              onSubmit={handleSubmit}
              className="bg-light p-3 rounded-3 mx-sm-0 mx-lg-5"
            >
              <h4 className="contactheadertext mx-3">
                Request a meeting with our experts
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
                    style={{ width: "30%", color: "#291571" }}
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
                    placeholder="Enter your phone number"
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
<label className="form-label">Request Type</label>
<br/>
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
  <option  value="1">Contact Sales</option>
  <option  value="2">General Inquiry</option>
  <option  value="3">Partner Inquiry</option>
</select>
{errors.requestType && (
                    <small
                      className="text-danger"
                      style={{
                        position: "absolute",
                        bottom: "-20px",
                        left: "14px",
                      }}
                    >
                      enter data
                    </small>
                  )}
              </div>
            
              <div className="form-group m-3">
                <label className="form-label">Business Email</label>
                <input
                  type="email"
                  id="useremail"
                  placeholder="Business email"
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
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control form-control1"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                />
                {errors.companyName && (
                  <p className="text-danger">{errors.companyName}</p>
                )}
              </div>

              <div className="form-group m-3">
                <label className="form-label">Company Website</label>
                <input
                  type="url"
                  id="companywebsite"
                  className="form-control form-control1"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  placeholder="Company website"
                  onChange={handleChange}
                  required
                />
                {errors.companyWebsite && (
                  <small className="text-danger">{errors.companyWebsite}</small>
                )}
              </div>

              <div className="form-group m-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control form-control1"
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="d-flex justify-content-center m-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contactpage;


