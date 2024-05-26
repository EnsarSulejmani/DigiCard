import Link from "next/link";
import React from "react";

const Display = () => {
  return (
    // Full Container
    <div className="w-full h-[91dvh] bg-blackBackground flex flex-col justify-around">
      {/* Logo */}
      <div className="w-full flex justify-center items-center my-8">
        <img className="" src="/Logo Figma SVG.svg" width={400}></img>
      </div>

      {/* Paragraph */}
      <div className="w-full flex justify-around items-center my-8 gap-8 flex-col">
        {/* To Map */}
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

      {/* Links */}
      <div className="w-full flex justify-around items-center my-8 flex-wrap">
        {/* To Map */}
        <div className="flex gap-2">
          <p>Work Email: </p>
          <Link className="text-prod" href="https://www.facebook.com/">
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
