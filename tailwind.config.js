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
    },
  },
  plugins: [],
};
