/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: "Inter , san-serif",
    },
    colors: {
      primary: "#C811AA",
      secondary: "#FFD057",
      blue: "#56AEFF",
      bgGray: "#F4F4F4",
      borderColor: "#BFBFBF",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
