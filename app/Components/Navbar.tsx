"use client";

import Link from "next/link";
import React, { useState } from "react";
import ReUsableButton from "./ReUsableButton";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="border-b-2 border-prod flex w-full justify-center flex-wrap">
      <div className="max-w-[960px] w-full flex h-full items-center justify-between px-4 md:px-0">
        <div className="flex justify-between w-full h-full items-center lg:pr-12">
          <Link href="/" passHref>
            <img src="/Logo Figma SVG.svg" width={150} className="my-4"></img>
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:gap-4 w-full md:w-auto`}
          >
            <Link
              href="/"
              className="transition ease-in-out hover:bg-prod py-5 block md:inline-block"
            >
              Home
            </Link>
            <Link
              href="/"
              className="transition ease-in-out hover:bg-prod py-5 block md:inline-block"
            >
              About
            </Link>
            <Link
              href={`/Dashboard/${session?.user?.name}/123`}
              className="transition ease-in-out hover:bg-prod py-5 block md:inline-block"
            >
              Dashboard
            </Link>
            <Link
              href="/"
              className="transition ease-in-out hover:bg-prod py-5 block md:inline-block"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-end">
          {session ? (
            <ReUsableButton onClick={() => signOut()}>Log Out</ReUsableButton>
          ) : (
            <Link href="/Login" className="underline hover:text-prod" passHref>
              <ReUsableButton>Login</ReUsableButton>
            </Link>
          )}
        </div>
      </div>
      <div className="flex md:hidden items-center justify-end w-full px-4 pb-4">
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
