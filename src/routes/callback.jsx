// src/pages/auth/AuthCallback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../database/supabase";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        console.error("AuthCallback error:", error);
        navigate("/"); // go back to login if error
        return;
      }

      const userData = {
        id: user.id,
        display_name: user.user_metadata.full_name,
        email: user.email,
        photo_url: user.user_metadata.avatar_url,
        last_login: new Date().toISOString(),
      };

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      // Upsert to Supabase DB
      const { error: upsertError } = await supabase
        .from("users")
        .upsert(userData, { onConflict: ["id"] });

      if (upsertError) {
        console.error("Upsert error:", upsertError.message);
      }

      navigate("/dashboard");
    };

    handleAuth();
  }, [navigate]);

  return <div>Logging you in...</div>;
};

export default AuthCallback;
