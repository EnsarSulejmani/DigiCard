"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Company {
  id: number;
  name: string;
}

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
  const [showQRCode, setShowQRCode] = useState(false);
  const qrCodeWrapperRef = useRef<HTMLDivElement>(null);

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

  const addNewDigiCard = () => {
    const newId =
      companies.length > 0 ? companies[companies.length - 1].id + 1 : 1;
    const newCompany: Company = { id: newId, name: `NewCompany${newId}` };
    setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
  };

  const downloadQRCode = () => {
    setShowQRCode(true);
    setTimeout(() => {
      const qrCodeWrapper = qrCodeWrapperRef.current;
      if (qrCodeWrapper) {
        html2canvas(qrCodeWrapper).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          const qrWidth = qrCodeWrapper.getBoundingClientRect().width;
          const qrHeight = qrCodeWrapper.getBoundingClientRect().height;
          pdf.addImage(imgData, "PNG", 10, 10, qrWidth / 4, qrHeight / 4);
          pdf.save("qr_code.pdf");
          setShowQRCode(false);
        });
      }
    }, 100);
  };

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
              <Link href={`/Display/${company.id}`} passHref>
                <button className="bg-prod text-white rounded-r-lg px-4 py-2">
                  Details
                </button>
              </Link>
            </div>
          ))}
          <div className="flex items-center justify-center rounded-lg bg-grayProd h-12 text-lg text-gray-800 p-2 shadow-md">
            <button
              className="bg-grayProd text-white px-4 py-1"
              onClick={addNewDigiCard}
            >
              New DigiCard+
            </button>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-grayProd h-6 text-sm text-gray-800 p-1 shadow-md">
            <button
              className="bg-grayProd text-white px-2"
              onClick={downloadQRCode}
            >
              Download QR Code
            </button>
          </div>
        </div>
      </div>
      {showQRCode && (
        <div style={{ display: "none" }} ref={qrCodeWrapperRef}>
          {companies.map((company) => (
            <QRCode
              key={company.id}
              value={`http://localhost:3000/Display/${company.id}`}
              renderAs="svg"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
