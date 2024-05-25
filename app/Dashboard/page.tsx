"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Company {
  id: number;
  name: string;
}

// Mock function to simulate fetching company names by their IDs
const fetchCompanyNameById = async (id: number): Promise<string> => {
  const companyNames: { [key: number]: string } = {
    1: "LevelUP",
    2: "SEEUHACK",
    // Add more company IDs and names as needed
  };
  return companyNames[id];
};

const Dashboard: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const fetchedCompanies = await Promise.all(
        [1, 2].map(async (id) => {
          const name = await fetchCompanyNameById(id);
          return { id, name };
        })
      );
      setCompanies(fetchedCompanies);
    };

    fetchCompanies();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-3xl w-full px-4 mt-20">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-between rounded-lg bg-grayProd h-12 text-lg text-gray-800 p-2 relative shadow-md"
            >
              <p className="flex-grow text-center overflow-hidden whitespace-nowrap">
                {company.name}
              </p>
              {/* Link the "Details" button to the dynamic route */}
              <Link href={`/Display/${company.id}`} passHref>
                <button className="bg-prod text-white rounded-r-lg px-4 py-1">
                  Details
                </button>
              </Link>
            </div>
          ))}
          <div className="flex items-center justify-center rounded-lg bg-grayProd h-12 text-lg text-gray-800 p-2 shadow-md">
            <button className="bg-grayProd text-white px-4 py-1">
              New DigiCard+
            </button>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-grayProd h-6 text-sm text-gray-800 p-1 shadow-md">
            <button className="bg-grayProd text-white px-2 ">
              Download QR Code
            </button>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-grayProd h-6 text-sm text-gray-800 p-1 shadow-md">
            <button className="bg-grayProd text-white px-2 ">
              Download QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
