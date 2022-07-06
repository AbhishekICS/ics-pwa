import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("username", username);
    navigate("/");
  };

  return (
    <div className="h-[50vh] flex justify-center items-center">
      <section className="max-w-7xl mx-auto">
        <div className="text-2xl font-semibold uppercase my-5">Login here</div>
        <form
          action=""
          className="flex flex-col space-y-2"
          onSubmit={handleLogin}
        >
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            className="rounded shadow-md my-2 border border-gray-500 px-10 py-2"
          />
          <button type="submit" className=" bg-teal-600 py-2 rounded">
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
