import React from "react";
import ReUsableButton from "../Components/ReUsableButton";
import Link from "next/link";

const Register = () => {
  return (
    <div className="w-full flex justify-center mt-12">
      {/* Form Container */}
      <div className="">
        <p className="mb-4 text-2xl">Register</p>
        <form className="flex flex-col gap-4">
          {/* Username */}
          <div className="flex-col flex">
            <label className="text-prod text-s">Username</label>
            <input
              type="text"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none"
            ></input>
          </div>

          {/* Password */}
          <div className="flex-col flex  text-s">
            <label className="text-prod">Password</label>
            <input
              type="password"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none"
            ></input>
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
