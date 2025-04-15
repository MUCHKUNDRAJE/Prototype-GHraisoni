import React, { useEffect } from "react";
import { supabase } from "../../database/supabase";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + "/auth/callback", // Adjust as needed
      },
    });

    if (error) {
      console.error("Google Sign-In Error:", error);
      alert("Login failed. Try again.");
    } else {
      console.log("Redirecting to Google...");
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("User session:", session);
    });
  }, []);
  

  useEffect(() => {
    const storeUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (user) {
        const userData = {
          id: user.id,
          display_name: user.user_metadata.full_name,
          email: user.email,
          photo_url: user.user_metadata.avatar_url,
          last_login: new Date().toISOString(),
        };

        // Store in localStorage
        localStorage.setItem("user", JSON.stringify(userData));

        // Upsert in Supabase users table
        await supabase.from("users").upsert(userData);

        // Navigate to dashboard
        navigate("/dashboard");
      }
    };

    storeUser();
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        onClick={handleGoogleLogin}
        className="text-black rounded-2xl cursor-pointer gap-2"
        variant="default"
        size="medium"
      >
        <i className="ri-google-fill text-xl"></i>
        Login with Google
      </Button>
    </div>
  );
};

export default Login;
