import { useEffect } from "react";
import supabase from "../utils/supabase";

const Logout = () => {
  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
    };
    logout();
  }, []);

  return <p>Logging out...</p>;
};

export default Logout;
