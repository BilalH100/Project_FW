import { useNavigate } from "react-router-dom"; // ✅ Ajout
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import {
  initFirebase,
  getFirebaseAuth,
  getGoogleProvider
} from "../../firebase";

import logo from "../../Assets/Images/logo.jpg";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firebaseError, setFirebaseError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // ✅ Ajout

  useEffect(() => {
    initFirebase("v2");
  }, []);

  const auth = getFirebaseAuth();
  const provider = getGoogleProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      console.error(error);
      setFirebaseError("Incorrect email or password.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome, ${result.user.displayName}`);
    } catch (error) {
      console.error(error);
      setFirebaseError("Google sign-in failed.");
    }
  };

  // ✅ Fonction pour rediriger vers la page visiteur
  const handleVisitorClick = () => {
    navigate("/visitor");
  };

  return (
    <div className="login-container">
      <div className="login-left eco-bg">
        <img src={logo} alt="App Logo" className="logo-img-full" />
      </div>

      <div className="login-right cream-bg">
        <div className="login-form-wrapper">
          <h2 className="heading">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {emailError && <span className="error-text">{emailError}</span>}

            <div className="form-group password-group">
              <FaLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordError && <span className="error-text">{passwordError}</span>}
            {firebaseError && <span className="error-text">{firebaseError}</span>}

            <div className="options">
              <label>
                <input type="checkbox" /> keep me logged in
              </label>
              <button
                type="button"
                onClick={() => alert("Redirect to forgot password page")}
                className="link-button"
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="main-btn">Log in now</button>

            <div className="or-text">- OR -</div>

            <button
              type="button"
              className="main-btn"
              onClick={() => navigate("/signup")}
            >
              Create new account
            </button>

            <div className="or-text">- OR -</div>

            {/* ✅ Redirection vers la page visiteur */}
            <button
              type="button"
              className="main-btn"
              onClick={handleVisitorClick}
            >
              Continue as visitor
            </button>

            <div className="google-btn">
              <button type="button" onClick={handleGoogleLogin}>
                <FaGoogle /> Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
