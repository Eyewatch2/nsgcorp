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
      colors: {
        primary: {
          DEFAULT: "#3887E5",
          alternativo: "#0066cc"
        },
        white: {
          DEFAULT: "white",
        },
        black: {
          DEFAULT: "black",
        }
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        durk: ["var(--font-durk)"],
      },
    },
  },
  plugins: [],
};
export default config;
