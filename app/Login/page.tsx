"use client";

import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import ReUsableButton from "../Components/ReUsableButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      // Handle error (e.g., show error message to user)
      console.error("Error logging in:", result.error);
    } else {
      // Redirect to a protected page or dashboard
      router.push(`/Dashboard/${session?.user?.name}/123`);
    }
  };

  return (
    <div className="w-full flex justify-center mt-12">
      <div className="">
        <p className="mb-4 text-2xl">Login</p>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div className="flex-col flex">
            <label className="text-prod text-s">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none"
            />
          </div>
          <div className="flex-col flex text-s">
            <label className="text-prod">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none"
            />
          </div>
          <ReUsableButton className="w-full" type="submit">
            Login
          </ReUsableButton>
          <Link href="Register" className="text-light text-sm underline">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
