"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

const DashboardID = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/Login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Show loading spinner or message
  }

  if (status === "authenticated") {
    return (
      <div className="w-full flex justify-center items-center flex-col flex-wrap mt-8">
        {/* Your dashboard UI elements go here */}
        <h1>Welcome to your Dashboard, {session.user?.name}</h1>

        {/* Button */}
        <div className="w-full mt-24 max-w-[960px] flex justify-around">
          <Link
            href={`/Editor/${session.user?.name}/123`}
            className="px-2 py-1 rounded-md border-prod border-2 hover:bg-prod ease-in-out duration-200 focus:outline-none"
          >
            DigiCard
          </Link>
        </div>

        {/* Add Card */}
        <div className="mt-24">
          <form>
            <label htmlFor="NewName">New DigiCard: </label>
            <input
              type="text"
              id="NewName"
              className="max-w-72 rounded-l-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none "
              placeholder="DigiCard Name"
              required
            ></input>
            <button
              type="submit"
              className="max-w-72 rounded-r-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none hover:bg-prod ease-in-out duration-200"
            >
              +
            </button>
          </form>
          <div></div>
        </div>
        {/* Add more components or elements as needed */}
      </div>
    );
  }

  return <div>Redirecting...</div>; // Show a redirecting message or leave empty
};

export default DashboardID;
