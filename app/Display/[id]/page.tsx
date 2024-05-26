import Link from "next/link";
import React from "react";

const Display = () => {
  return (
    // Full Container
    <div className="w-full min-h-screen bg-blackBackground flex flex-col justify-around p-4">
      {/* Logo */}
      <div className="w-full flex justify-center items-center my-8">
        <img
          className="max-w-full h-auto"
          src="/Logo Figma SVG.svg"
          alt="Logo"
          width={400}
        ></img>
      </div>

      {/* Paragraph */}
      <div className="w-full flex flex-col justify-around items-center my-8 gap-8">
        {/* To Map */}
        <div className="w-full flex flex-col justify-around items-center gap-8 px-4 md:px-0">
          <h1 className="text-prod text-2xl text-center">Why work with us?</h1>
          <p className="max-w-[960px] text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            egestas ante eu lacus egestas tristique. Ut sollicitudin mauris vel
            purus interdum malesuada. Vestibulum mauris sem, vestibulum ac
            dapibus quis, maximus id justo. Mauris sit amet tortor posuere,
            blandit magna id, dignissim erat.
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="w-full flex flex-col justify-around items-center my-8 gap-4 px-4 md:px-0">
        {/* To Map */}
        <div className="flex flex-col md:flex-row gap-2 items-center text-center md:text-left">
          <p className="text-white">Work Email: </p>
          <Link className="text-prod" href="mailto:Loremipsum@gmail.com">
            Loremipsum@gmail.com
          </Link>
        </div>
      </div>

      {/* Social Media */}
      <div className="w-full flex justify-around items-center my-8">
        {/* To map */}
        <div>
          <Link className="text-prod" href="https://www.facebook.com/">
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Display;
