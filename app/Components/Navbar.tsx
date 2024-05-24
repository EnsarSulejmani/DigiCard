import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b-2 border-prod flex w-full justify-center">
      <div className="min-w-[960px] flex h-full items-center justify-between mr-24">
        <div className="flex justify-between text-xl w-full h-full align-middle">
          <Link href="#" passHref>
            <img
              src="Logo Figma.png"
              width="200px"
              className=" my-4 max-h-[36.6px]"
            ></img>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="transition ease-in-out hover:bg-prod py-5"
            >
              Home
            </Link>
            <Link
              href="/"
              className="transition ease-in-out hover:bg-prod py-5"
            >
              About
            </Link>
            <Link
              href="/Dashboard"
              className="transition ease-in-out hover:bg-prod py-5"
            >
              Dashboard
            </Link>
            <Link
              href="/"
              className="transition ease-in-out hover:bg-prod py-5"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Link href="#" className="text-xl underline hover:text-prod">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
