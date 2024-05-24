import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      prod: "#FF6B00",
      white: "#FFFFFF",
      black: "#000000",
      blackBackground: "#242424",

      // Extra Colors
      blueProd: "#080A3F",
      greenProd: "#A7E491",
      redProd: "#D58686",
      yellowProd: "#EAF79F",
      highlight: "#7277ED",
      grayProd: "#909090",
      purplePassive: "#7277ED",
      purpleActive: "#FF00D6",
      darkHiglight: "#2E3288",
    },
  },
  plugins: [],
};
export default config;
