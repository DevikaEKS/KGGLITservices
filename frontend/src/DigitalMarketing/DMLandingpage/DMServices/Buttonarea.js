import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

function Buttonarea() {
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

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate each field on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let formErrors = { ...errors };

    switch (name) {
      case "name":
        formErrors.name = /^[a-zA-Z\s]{2,}$/.test(value) ? "" : "Name should only contain letters and spaces.";
        break;
      case "email":
        formErrors.email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? "" : "Invalid email address.";
        break;
      case "mobile":
        formErrors.mobile = /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(value) ? "" : "Invalid mobile number.";
        break;
      case "service":
        formErrors.service = value ? "" : "Please select a service.";
        break;
      case "message":
        formErrors.message = value.trim() ? "" : "Message is required.";
        break;
      default:
        break;
    }

    setErrors(formErrors);
  };

  const validateForm = () => {
    validateField("name", formData.name);
    validateField("email", formData.email);
    validateField("mobile", formData.mobile);
    validateField("service", formData.service);
    validateField("message", formData.message);
    return Object.values(errors).every(error => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here, you can make an API call to submit the form data
      axios.post("/api/submit-form", formData)
        .then(response => {
          setSuccessMessage("Your form has been submitted successfully!");
          toast.success("Form submitted successfully!");
          handleClose();
        })
        .catch(error => {
          toast.error("There was an error submitting the form.");
        });
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center py-5">
      <div className="expertAdvice p-3 rounded-2 d-flex flex-column justify-content-center align-items-center">
  <h3 className="text-center txtclr1">Don't Let Your Competitors Win Online</h3>
  <h3 className="text-center txtclr1">Elevate Your Brand with KG Genius Labs Digital Marketing!</h3>
  <button className="contactdmbtn py-3 px-4 rounded-5" onClick={handleShow}>
    Get Expert Advice
  </button>
</div>

      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="letstext"><b>Let's Connect</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {successMessage && <p className="text-success text-center">{successMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="m-3">
              <input
                type="text"
                className="form-control form-control1"
                placeholder="Enter your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>

            <div className="m-3">
              <input
                type="email"
                className="form-control form-control1"
                placeholder="Enter your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Mobile Number"
                  style={{ width: "70%" }}
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
            </div>

            <div className="form-group m-3">
              <select
                className="form-control1 rounded-2 py-2"
                style={{ width: "100%" }}
                name="service"
                value={formData.service}
                onChange={handleChange}
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
              <textarea
                className="form-control form-control1"
                name="message"
                placeholder="Message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-danger">{errors.message}</p>}
            </div>

            <Modal.Footer>
              <Button
                variant="primary"
                type="submit"
                disabled={Object.keys(errors).some((key) => errors[key])}
              >
                Submit
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default Buttonarea;
