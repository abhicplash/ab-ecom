// src/components/Pages/SignUp.js
import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Layout from "../Layout/Layout";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      navigate("/"); // ✅ redirect to home
    } catch (error) {
      alert(error.message);
    }
  };

  // Optional: Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Layout>
      <div className="login-wrapper">
        <form onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
