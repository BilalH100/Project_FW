// signup.js
import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaCity,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebook,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebase";
import logoImage from "./logoapp.jpg";
import "./signup.CSS"; // case sensitive!

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setFirebaseError("");
    setMessage("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.email.match(/\S+@\S+\.\S+/)) newErrors.email = "Invalid email.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });
      setMessage("Account created successfully!");
      setFormData({ name: "", phone: "", city: "", email: "", password: "" });
    } catch (error) {
      setFirebaseError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setMessage(`Welcome, ${result.user.displayName}`);
    } catch (error) {
      setFirebaseError("Google sign-up failed.");
    }
  };

  const handleFacebookSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      setMessage(`Welcome, ${result.user.displayName}`);
    } catch (error) {
      setFirebaseError("Facebook sign-up failed.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={logoImage} alt="App Logo" className="logo-img-full" />
      </div>

      <div className="login-right">
        <div className="login-form-wrapper">
          <h2 className="heading">Create Account</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <FaUser className="icon" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            {errors.name && <span className="error-text">{errors.name}</span>}

            <div className="form-group">
              <FaPhone className="icon" />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            {errors.phone && <span className="error-text">{errors.phone}</span>}

            <div className="form-group">
              <FaCity className="icon" />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            {errors.city && <span className="error-text">{errors.city}</span>}

            <div className="form-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {errors.email && <span className="error-text">{errors.email}</span>}

            <div className="form-group password-group">
              <FaLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <span className="error-text">{errors.password}</span>}

            {firebaseError && <span className="error-text">{firebaseError}</span>}
            {message && <p className="success-text">{message}</p>}

            <button type="submit" className="main-btn">
              Sign Up
            </button>
          </form>

          <div className="or-text">- OR -</div>

          <div className="google-btn">
            <button onClick={handleGoogleSignUp}>
              <FaGoogle /> Sign up with Google
            </button>
          </div>

          <div className="google-btn" style={{ marginTop: "10px" }}>
            <button onClick={handleFacebookSignUp}>
              <FaFacebook /> Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
