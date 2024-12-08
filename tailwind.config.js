/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        poizonColor: "#57BFC1",
        mainbg: "#E2E8F0",
        mainText: "#73818E",
        categoryBg: "#F1F5F9",
        footer: "#57BFC10F",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
