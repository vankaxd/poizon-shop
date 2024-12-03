/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        poizonColor: "#57BFC1",
        mainbg: "#E2E8F0",
        mainText: "#73818E",
      },
    },
  },
  plugins: [],
};
