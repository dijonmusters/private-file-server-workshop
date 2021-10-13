import { useState } from "react";
import supabase from "../utils/supabase";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.auth.signIn({
      email,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center min-h-screen py-2"
    >
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-b-2 ml-2 p-2"
      />
    </form>
  );
};

export default Login;
