import React from "react";
import "../auth.form.scss";
import { useNavigate } from "react-router";

const Register = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register");
  }
  return (
    <div className="auth-wrapper">
      <div className="form-container">
        <p className="subtitle">Hey there,</p>
        <h1>Create an Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Username" />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group password-group">
            <input type="password" placeholder="Password" />
            <span className="eye-icon">👁</span>
          </div>

          <div className="input-group password-group">
            <input type="password" placeholder="Confirm Password" />
            <span className="eye-icon">👁</span>
          </div>

          <button type="submit">Register</button>
        </form>

        <div className="brand">
          Login<span>+</span>
        </div>

        <p className="bottom-text">
          Already have an account? <a href="#" onClick={() => navigate("/login")}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;