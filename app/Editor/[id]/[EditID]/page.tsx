"use client";
import Link from "next/link";
import ReUsableButton from "@/app/Components/ReUsableButton";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";

const EditorID = () => {
  const qrCodeWrapperRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const [qrCodeVisible, setQrCodeVisible] = useState(false);

  const downloadQRCode = async () => {
    setQrCodeVisible(true);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for QR code to be rendered

    const qrCodeWrapper = qrCodeWrapperRef.current;
    if (qrCodeWrapper) {
      html2canvas(qrCodeWrapper).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const qrWidth = qrCodeWrapper.getBoundingClientRect().width;
        const qrHeight = qrCodeWrapper.getBoundingClientRect().height;
        pdf.addImage(imgData, "PNG", 10, 10, qrWidth / 4, qrHeight / 4);
        pdf.save("qr_code.pdf");
        setQrCodeVisible(false); // Hide QR code after download
      });
    }
  };

  return (
    <div className="w-full h-[91dvh] bg-blackBackground flex flex-col justify-around relative">
      {/* Editor */}
      <div className="position px-8 absolute left-0 top-0 h-full bg-blackBackground border-r-2 border-prod rounded-md overflow-y-scroll">
        <div
          style={{ display: qrCodeVisible ? "block" : "none" }}
          ref={qrCodeWrapperRef}
        >
          {session?.user?.name && (
            <QRCode
              value={`http://localhost:3000/Display/${session.user.name}/123`}
              renderAs="svg"
            />
          )}
        </div>
        <div className="w-full flex justify-center">
          <ReUsableButton onClick={downloadQRCode}>Get QR Code</ReUsableButton>
        </div>
        <form className="flex flex-col h-full justify-around gap-12 my-8">
          <div className="flex justify-around">
            <ReUsableButton type="submit">Save</ReUsableButton>
          </div>
          <div className="flex flex-col">
            <p className="text-prod text-2xl border-b-2 border-prod">
              Paragraph
            </p>
            <label htmlFor="Title" className="text-sm text-light">
              Title
            </label>
            <input
              type="text"
              id="Title"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none mb-2"
            />
            <label htmlFor="Paragraph" className="text-sm text-light">
              Paragraph
            </label>
            <input
              type="text"
              id="Paragraph"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-prod text-2xl border-b-2 border-prod">Email</p>
            <label htmlFor="EmailLabel" className="text-sm text-light">
              Email Label
            </label>
            <input
              type="text"
              id="EmailLabel"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none mb-2"
            />
            <label htmlFor="EmailText" className="text-sm text-light">
              Email Text
            </label>
            <input
              type="text"
              id="EmailText"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none mb-2"
            />
            <label htmlFor="EmailLink" className="text-sm text-light">
              Email Link
            </label>
            <input
              type="text"
              id="EmailLink"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-prod text-2xl border-b-2 border-prod">
              Social Media
            </p>
            <label htmlFor="SocialImage" className="text-sm text-light">
              Social Image
            </label>
            <input
              type="text"
              id="SocialImage"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none mb-2"
            />
            <label htmlFor="SocialLink" className="text-sm text-light">
              Social Link
            </label>
            <input
              type="text"
              id="SocialLink"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none mb-2"
            />
            <label htmlFor="SocialEmailLink" className="text-sm text-light">
              Email Link
            </label>
            <input
              type="text"
              id="SocialEmailLink"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none"
            />
          </div>
        </form>
      </div>
      <div className="w-full flex justify-center items-center my-8">
        <img className="" src="/Logo Figma SVG.svg" width={400} alt="Logo" />
      </div>
      <div className="w-full flex justify-around items-center my-8 gap-8 flex-col">
        <div className="w-full flex justify-around items-center gap-8 flex-col">
          <h1 className="text-prod text-2xl">Why work with us?</h1>
          <p className="max-w-[960px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            egestas ante eu lacus egestas tristique. Ut sollicitudin mauris vel
            purus interdum malesuada. Vestibulum mauris sem, vestibulum ac
            dapibus quis, maximus id justo. Mauris sit amet tortor posuere,
            blandit magna id, dignissim erat.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-around items-center my-8 flex-wrap">
        <div className="flex gap-2">
          <p>Work Email: </p>
          <Link className="text-prod" href="https://www.facebook.com/">
            Loremipsum@gmail.com
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-around items-center my-8">
        <div>
          <Link className="text-prod" href="https://www.facebook.com/">
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditorID;
