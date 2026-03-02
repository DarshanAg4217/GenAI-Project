import React from "react";
import "../auth.form.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  }

  return (
    <div className="auth-wrapper">
      <div className="form-container">
        <p className="subtitle">Hey there,</p>
        <h1>Welcome Back</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group password-group">
            <input type="password" placeholder="Password" />
            <span className="eye-icon">👁</span>
          </div>

          <a href="#" className="forgot-link">
            Forgot your password?
          </a>

          <button type="submit">Login</button>
        </form>

        <div className="brand">Login<span>+</span></div>

        <p className="bottom-text">
          Don’t have an account yet? <a href="#" onClick={() => navigate("/register")}>Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;