import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Country, State, City } from "country-state-city";
import "react-toastify/dist/ReactToastify.css";
import "./DMLandingcontent.css";
function DMLandingcontact() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile_number: "",
    company_name: "",
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
  }, []);


 // Fetch states for a specific country code (e.g., "IN" for India)
 useEffect(() => {
    const countryCode = "IN"; // Set default country code
    const statesOfCountry = State.getStatesOfCountry(countryCode);
    setStates(statesOfCountry);
  }, []);

  // Handle State Change
  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    setCities(City.getCitiesOfState("IN", stateCode)); // Fetch cities for the selected state
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

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
    if (!requestType) {
      newErrors.requestType = "Please select a request type."; // Ensure this is set
    }
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
    // const fullwhatsappnumber = `${selectedCountryCode}${formData.whatsappnumber}`;
    const formValues = {
      username: formData.username,
      email: formData.email,
      phno: fullmobile_number,
      company_name: formData.company_name,
      message: formData.message,
      request_type_id: requestType,
    };

    console.log(formValues);

    setLoading(true);
    axios
      .post("http://localhost:5000/dm-contact", formValues)
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
      mobile_number: "",
      company_name: "",
      companyWebsite: "",
      message: "",
    });
    setSelectedCountryCode("+91");
    setRequestType(""); // Reset request type
    setErrors({});
  };


// Handle Country Change
const handleCountryChange = (e) => {
    const countryCode = e.target.value;
   
    setStates(State.getStatesOfCountry(countryCode)); // Fetch states based on country
    setSelectedState("");
    setCities([]);
  };


  



  return (
    <div className="container-fluid frmcontacts" id="dmcontact">
      <ToastContainer />
      <div className="container">
        <div className="row my-5 py-4">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="textcontact text-light mx-5">
              <h1 className="sapcontacthead my-sm-4 my-lg-0 py-2">Know Your Digital Presence</h1>
              <p className="dmcontentpara1">
                <b>Get a Free Website Audit – Submit Your Request Today!</b>
              </p>
              <p>
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
                    placeholder="Enter your phone number"
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
                <label className="form-label">Email Id</label>
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
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                />
                {errors.company_name && (
                  <p className="text-danger">{errors.company_name}</p>
                )}
              </div>

              <div>
   

    {/* State Dropdown */}
    <div className="form-group m-3">
      <label>Select State</label>
      <select className="form-control form-control1" value={selectedState} onChange={handleStateChange} disabled={!states.length}>
        <option value="">Select a State</option>
        {states.map((state) => (
          <option key={state.isoCode} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>
    </div>

    {/* City Dropdown */}
    <div className="form-group m-3">
      <label>Select City</label>
      <select className="form-control form-control1" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} disabled={!cities.length}>
        <option value="">Select a City</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  </div>

              <div className="form-group m-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control form-control1"
                  name="message"
                  rows="3"
                  value={formData.message}
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
              <p className="mx-4 prvctxt">
                The information you provide in this form will be used to process
                your request and keep you informed about our services, in line
                with KG Genius Lab's{" "}
                <span style={{ color: "red" }}>Privacy Policy</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DMLandingcontact;



