import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", loginDetails);
  };

  return (
    <div className="wrapper">
      {/* Login Section */}
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={loginDetails.email}
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
              value={loginDetails.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>

      {/* Image Section */}
      <div className="image-container">
        <img
          src="https://www.wanderlustchloe.com/wp-content/uploads/2021/01/Logo-Quiz-Questions-And-Answers.jpg"
          alt="Quiz Illustration"
        />
      </div>
    </div>
  );
};

export default Login;
