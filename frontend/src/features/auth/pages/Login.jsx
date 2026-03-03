import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../auth.form.scss"; 


const Login = () => {

  const { loading, login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    console.log("Login");
    // After successful login, go to protected home at '/'
    navigate("/");
  }
  if (loading) {
    return (
      <div className="fullscreen-loader">
        <div className="loader-box">
          <div className="spinner"></div>
          <p>Logging you in...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-wrapper">
      <div className="form-container">
        <p className="subtitle">Hey there,</p>
        <h1>Welcome Back</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email" placeholder="Email"

            />
          </div>

          <div className="input-group password-group">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password" placeholder="Password" />
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