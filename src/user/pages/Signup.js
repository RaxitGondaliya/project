import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [signupDetails, setSignupDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Details:", signupDetails);
  };

  return (
    <div className="wrapper">
      {/* Signup Section */}
      <div className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={signupDetails.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={signupDetails.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={signupDetails.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={signupDetails.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <p className="signup-footer">
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </div>

      {/* Image Section */}
      <div className="image-container">
        <img
          src="https://www.wanderlustchloe.com/wp-content/uploads/2021/01/Logo-Quiz-Questions-And-Answers.jpg"
          alt="Signup Illustration"
        />
      </div>
    </div>
  );
};

export default Signup;
