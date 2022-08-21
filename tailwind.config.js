/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#41729F",
        secondary: "#5885AF",
        tertiary: "#274472",
        quaternary: "#C3E0E5",
      },
    },
  },
  plugins: [],
};
