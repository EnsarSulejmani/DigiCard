"use client";

import Link from "next/link";
import React from "react";
import ReUsableButton from "./ReUsableButton";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="border-b-2 border-prod flex w-full justify-center flex-wrap">
      <div className="max-w-[960px] w-[900px] flex h-full items-center justify-between mr-24">
        <div className="flex justify-between w-full h-full align-middle flex-wrap">
          <Link href="/" passHref>
            <img src="/Logo Figma SVG.svg" width={150} className="my-4"></img>
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
        {session ? (
          <ReUsableButton onClick={() => signOut()}>Log Out</ReUsableButton>
        ) : (
          <Link href="/Login" className="underline hover:text-prod" passHref>
            <ReUsableButton>Login</ReUsableButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
