import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Webinarcontact.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  State, City } from "country-state-city";


function Webinarcontact() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [selectedCountry, setSelectedCountry] = useState("");
const [selectedState, setSelectedState] = useState("");
const [selectedCity, setSelectedCity] = useState("");
const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);
const[timingdata,setTimingdata]=useState([]);
const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);
const [countdown, setCountdown] = useState({days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,});
const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
const [requestType, setRequestType] = useState(""); 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    designation:"",
    state:"",
    city:""
   
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
  }, []);


  
  useEffect(() => {
    const targetDate = new Date("2024-12-14T19:00:00+05:30"); // Target date: 14th December 2024, 7 PM IST
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
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
    const phoneRegex = /^[6-9][0-9]{9}$/; // Adjusted to ensure the number is between 7 and 15 digits
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
      message: formData.description,
      request_type_id: requestType,
    };

    console.log(formValues);

    setLoading(true);
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
     
     
    });
    setSelectedCountryCode("+91");
    setRequestType("");
    setErrors({});
  };



  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    setStates(State.getStatesOfCountry(countryCode)); 
    setSelectedState("");
    setCities([]);
  };
  
  // Handle State Change
  useEffect(() => {
    // Fetch states of India (country code: IN)
    setStates(State.getStatesOfCountry("IN"));
  }, []);

  // Handle State Change
  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    // Fetch cities of the selected state
    const citiesData = City.getCitiesOfState("IN", stateCode);
    setCities(citiesData);
    setSelectedCity("");
  };

  // Handle City Change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  
  return (
    <div className="container-fluid frmcontacts" id="Webinarcontact">
      <ToastContainer />
      <div className="container">
        <div className="row  py-4">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="textcontact text-light">
              <h2 className="sapcontacthead text-center my-sm-4 my-lg-0">Saturday,<br/>                                                                                                                                                                                                        December 14,2024</h2>
              <p className="sapcontentpara text-center"><b>7PM-9PM IST</b></p>

              {/* <div className="d-flex justify-content-center py-3">
                {["Box 1", "Box 2", "Box 3", "Box 4"].map((box, index) => (
                  <div key={index} className="card m-2 rounded-0 p-3">
                    <p>days</p>
                    <p>{countdown}</p>
                  </div>
                ))}
              </div> */}

              <div className="d-flex justify-content-center py-3 fw-bold">
                <div className="text-center">
                <div className="card m-3 rounded-1 p-3 border-0 ">{countdown.days}</div>
                <p>Days</p>
                </div>

                <div className="text-center">
                <div className="card m-3 rounded-1 p-3 border-0">{countdown.hours}</div>
                <p>Hours</p>
                </div>

                <div className="text-center">
                <div className="card m-3 rounded-1 p-3 border-0">{countdown.minutes}</div>
                <p>Minutes</p>
                </div>

                <div className="text-center">
                <div className="card m-3 rounded-1 p-3 border-0">{countdown.seconds}</div>
                <p>Seconds</p>
                </div>

              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <form
              onSubmit={handleSubmit}
              className="bg-light p-3 rounded-3 mx-sm-0 mx-lg-5">
              
              <div className="form-group m-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control form-control1"
                  placeholder="Enter your Name"
                  name="username"
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
                    placeholder="Enter your Mobile number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    style={{ width: "70%" }}
                    required
                    pattern="[0-9]*"
                    maxLength="15"
                  />
                </div>
                {errors.phoneNumber && (<small className="text-danger">{errors.phoneNumber}</small>)}
              </div>


              <div className="form-group m-3">
                <label className="form-label">Email Id</label>
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
                <label className="form-label">Designation</label>
                <input
                  type="text"
                  className="form-control form-control1"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Enter your Designation"/>
                {errors.designation && (
                  <p className="text-danger">{errors.designation}</p>
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

             
              <div>
   

   
  </div>



  <div className="form-group m-3">
        <label className="form-label">State</label>
        <select
          className="form-select form-control1"
          value={selectedState}
          onChange={handleStateChange}
          required
        >
          <option value="" disabled>
            Select State
          </option>
          {states.map((state) => (
            <option key={state.isoCode} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* City Dropdown */}
      <div className="form-group m-3">
        <label className="form-label">City</label>
        <select
          className="form-select form-control1"
          value={selectedCity}
          onChange={handleCityChange}
          required
        >
          <option value="" disabled>
            Select City
          </option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

             

              <div className="d-flex justify-content-center m-3">
                <button
                  type="submit"
                  className="btnexplore text-light p-2"
                  disabled={loading}>
                 Reserve your Free spot
                </button>
              </div>
             
            </form>{" "}
            {thankYouMessageVisible && (
          <div className="thank-you-message">
            <h3>Thank you for registering!</h3>
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webinarcontact;




