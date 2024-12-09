import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(email, password);

    let isValid = true;
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    if (email === "") {
      setEmailError("Email is required!");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address!");
      isValid = false;
    }

    if (password === "") {
      setPasswordError("Password is required!");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must contain at least 8 characters");
      isValid = false;
    }

    if (isValid) {
      axios
        .post("https://www.kggeniuslabs.com:5000/login", { email, password })
        .then((response) => {
          console.log(response);

          if (response.data.message === "Login successful") {
            const userid = response.data.user.id;
            console.log(userid);

            navigate(`/blogeditor/${btoa(userid)}`, {
              // state: {
              //   isAuthenticated: true,
              //   title: "Blog Title",
              //   category: "Category",
              //   content: "Blog content",
              //   conclusion: "Blog conclusion",
              //   image: "image-url",
              // },
            });
          } else if (response.data.message === "Invalid email or password") {
            alert("Invalid email or password");
          } else if (
            response.data.message === "Please provide both email and password."
          ) {
            alert("Please provide both email and password.");
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            setLoginError("Invalid email or password");
          } else {
            setLoginError("An error occurred. Please try again later.");
          }
        });
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#291571" }}
    >
      <div className="card p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h1 className="text-center mb-4">Login Page</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {emailError && <p className="text-danger mt-1">{emailError}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {passwordError && (
              <p className="text-danger mt-1">{passwordError}</p>
            )}
          </div>
          {loginError && <p className="text-danger mt-1">{loginError}</p>}
          <button type="submit" className="btn btn-primary w-100 my-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
