import ReUsableButton from "./Components/ReUsableButton";

export default function Home() {
  return (
    <div className="w-full relative h-[40dvh]">
      {/* Background Image */}
      <img
        src="Man.jpg"
        className="w-full h-[40dvh] object-cover position absolute -z-20"
      ></img>

      {/* Black Background */}
      <div className="absolute top-0 left-0 min-w-[80dvw] h-full -z-10 bg-blackBackground transform origin-center transition-transform animate-ping overflow-x-hidden"></div>

      {/* Logo + text container */}
      <div className="w-full h-full flex justify-around items-center flex-wrap">
        {/* Text */}
        <div className="max-w-[60dvw] flex justify-center items-center flex-col h-full ">
          <h1 className=" text-2xl mb-2">
            Where the digital and physical mix together!
          </h1>
          <p className="max-w-[42rem] text-center mb-8">
            Design your digital business card and share it with the world using
            a QR code on your physical business card. The bridge has never been
            easier{" "}
          </p>
          <ReUsableButton>Create My DigiCard</ReUsableButton>
        </div>

        {/* Logo */}
        <div>
          <img
            src="Logo Figma SVG.svg"
            className="fill-prod "
            width={600}
          ></img>
        </div>
      </div>
    </div>
  );
}
