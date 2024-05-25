"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

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
      <div>
        {/* Your dashboard UI elements go here */}
        <h1>Welcome to your Dashboard, {session.user?.name}</h1>
        <p>This is the content of the Dashboard</p>
        {/* Add more components or elements as needed */}
      </div>
    );
  }

  return <div>Redirecting...</div>; // Show a redirecting message or leave empty
};

export default DashboardID;
