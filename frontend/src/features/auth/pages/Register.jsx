import { useState } from "react";
import "../auth.form.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Register = () => {

  const navigate = useNavigate();
  
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { register, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ username, email, password });
    console.log("Register");
    navigate("/");
  }
  if (loading) {
    return (
      <div className="fullscreen-loader">
        <div className="loader-box">
          <div className="spinner"></div>
          <p>Registering your account...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="auth-wrapper">
      <div className="form-container">
        <p className="subtitle">Hey there,</p>
        <h1>Create an Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
            onChange={(e) => setUserName(e.target.value)}
            type="text" placeholder="Username"
             />
          </div>

          <div className="input-group">
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          </div>

          <div className="input-group password-group">
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
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