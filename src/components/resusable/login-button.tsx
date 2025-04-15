// src/Login.jsx
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider,db } from "../../database/firebase";
import { Button } from "../ui/button";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate =  useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastLogin: new Date(),
      });

      localStorage.setItem("user", JSON.stringify({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      }));

      console.log("User Info:", user);

      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div>
      <Button
        onClick={handleGoogleLogin}
        className="text-black rounded-2xl cursor-pointer"
        variant="default"
        size="medium"
      >
        <i className="ri-google-fill"></i> Login with Google
      </Button>
    </div>
  );
};

export default Login;
