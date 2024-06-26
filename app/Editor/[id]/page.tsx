import React from "react";
import Link from "next/link";
import ReUsableButton from "@/app/Components/ReUsableButton";
const EditorID = () => {
  return (
    // Full Container
    <div className="w-full h-[91dvh] bg-blackBackground flex flex-col justify-around relative">
      {/* Editor */}
      <div className="position px-8 absolute left-0 top-0 h-full bg-blackBackground border-r-2 border-prod rounded-md overflow-y-scroll">
        <form className="flex flex-col h-full justify-around gap-12 my-8">
          {/* Submit Button */}
          <div className="flex  justify-around">
            <ReUsableButton type="submit">Save</ReUsableButton>
            <ReUsableButton>GetQR Code</ReUsableButton>
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <p className="text-prod text-2xl border-b-2 border-prod">
              Paragraph
            </p>
            <label id="Title" className="text-sm text-light">
              Title
            </label>
            <input
              type="text"
              id="Title"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none mb-2"
            ></input>

            {/* Paragraph */}
            <label id="Paragraph" className="text-sm text-light">
              Paragraph
            </label>
            <input
              type="text"
              id="Paragraph"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none "
            ></input>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <p className="text-prod text-2xl border-b-2 border-prod">Email</p>
            {/* Email Label */}
            <label id="Email Label" className="text-sm text-light">
              Email Label
            </label>
            <input
              type="text"
              id="Email Label"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none mb-2"
            ></input>

            {/* Email Text */}
            <label id="Email Text" className="text-sm text-light">
              Email Text
            </label>
            <input
              type="text"
              id="Email Text"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none mb-2"
            ></input>

            {/* Email Link */}
            <label id="Email Link" className="text-sm text-light">
              Email Link
            </label>
            <input
              type="text"
              id="Email Link"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none "
            ></input>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <p className="text-prod text-2xl border-b-2 border-prod">
              Social Media
            </p>
            {/* Social Image */}
            <label id="Social Image" className="text-sm text-light">
              Social Image
            </label>
            <input
              type="text"
              id="Email Label"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none mb-2"
            ></input>

            {/* Social Link */}
            <label id="Social Link" className="text-sm text-light">
              Social Link
            </label>
            <input
              type="text"
              id="Email Text"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none mb-2"
            ></input>

            {/* Email Link */}
            <label id="Email Link" className="text-sm text-light">
              Email Link
            </label>
            <input
              type="text"
              id="Email Link"
              className="max-w-72 rounded-md px-2 py-1 border-2 border-prod bg-blackBackground focus:outline-none "
            ></input>
          </div>
        </form>
      </div>

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

export default EditorID;
