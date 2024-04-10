/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenAict: '#00AF66',
        grayAict: '#F2F6FA',
        textBlackAict: '#2E363E',
        primary: '#00AF66',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
