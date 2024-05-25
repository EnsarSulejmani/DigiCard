"use client";

import React, { useState } from "react";
import ReUsableButton from "../Components/ReUsableButton";
import Link from "next/link";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/userRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Handle successful registration
      console.log("User registered successfully");
    } else {
      // Handle registration error
      console.log("Registration failed");
    }
  };

  return (
    <div className="w-full flex justify-center mt-12">
      {/* Form Container */}
      <div className="">
        <p className="mb-4 text-2xl">Register</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="flex-col flex">
            <label className="text-prod text-s">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="flex-col flex  text-s">
            <label className="text-prod">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none"
              required
            />
          </div>
          <ReUsableButton className="w-full" type="submit">
            Register
          </ReUsableButton>

          <Link href="Login" className="text-light text-sm underline">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
