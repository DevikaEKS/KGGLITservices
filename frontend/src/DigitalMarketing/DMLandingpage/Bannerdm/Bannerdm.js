import React, { useState,useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import "./Bannerdm.css";
import { Helmet } from "react-helmet";
import { toast,ToastContainer } from "react-toastify";

function Bannerdm() {
    const [countryCodes, setCountryCodes] = useState([]);
    const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    otherService: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
 const[utmdata,setUtmdata]=useState({});
  const handleClose = () => {
    setShow(false);
    setErrors({});
    setSuccessMessage("");
    setFormData({ name: "", email: "", mobile: "", service: "", otherService: "", message: "" });
  };

  const handleShow = () => setShow(true);


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




  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) error = "Name is required";
      else if (value.length < 2) error = "Name must be at least 2 characters";
    }

    if (name === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(value)) error = "Enter a valid Email address";
    }

    if (name === "mobile") {
      if (!value.trim()) error = "Mobile number is required";
      else if (!/^[6-9]\d{9}$/.test(value)) error = "Enter a valid Mobile number";
    }

    if (name === "service" && !value) {
      error = "Please select a service";
    }

    if (name === "otherService" && formData.service === "Other" && !value.trim()) {
      error = "Please specify your service request";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("https://your-api-url.com/submit", formData);
        console.log("Response:", response.data);
        setSuccessMessage("Form submitted successfully!");
        toast.success("Thank You,Our team will reach out to you soon")
        setTimeout(handleClose, 2000); // Close modal after 2 seconds
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Error submitting form. Please try again.");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Complete Digital Marketing Solutions in Coimbatore | SEO, SMM & Ads</title>
        <meta name="description" content="Achieve your business goals with expert digital marketing services in Coimbatore." />
        <link rel="canonical" href="https://www.kggeniuslabs.com/digital-marketing-services-coimbatore" />
      </Helmet>

      <div className="container-fluid bannerdmbg d-none d-md-block m-0 p-0 h-100">
        <div className="row py-5">
          <div className="text-light px-0 px-md-2 px-lg-5 mx-0 my-5">
            <h1 className="bannerdmhead">Your Partner in <br /> Digital Success</h1>
            <h5 className="bannerparadm">Expert Marketing Services to Amplify Reach, Build Trust, and Boost Sales</h5>
            <button className="bg-light rounded-2 border-0 px-4 py-3 my-2 connectbtn text-decoration-none" onClick={handleShow}>
              Grow Your Business
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Form */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="letstext"><b>Let's Connect</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {successMessage && <p className="text-success text-center">{successMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="m-3">
              <input type="text" className="form-control form-control1" placeholder="Enter your Name"
                name="name" value={formData.name} onChange={handleChange}
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
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
                name="mobile" value={formData.mobile} onChange={handleChange}
              />  </div>
              {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
            </div>

            <div className="form-group m-3">
              <select className="form-control1 rounded-2 py-2" style={{ width: "100%" }}
                name="service" value={formData.service} onChange={handleChange}
              >
                <option value="">Choose our Services</option>
                <option>SEO</option>
                <option>PPC</option>
                <option>Social Media Marketing</option>
                <option>Complete Digital Marketing</option>
                <option>Other (Mention Below)</option>
              </select>
              {errors.service && <p className="text-danger">{errors.service}</p>}
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
      <ToastContainer/>
    </>
  );
}

export default Bannerdm;
