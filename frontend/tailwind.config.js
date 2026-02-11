/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // scans all React components
    "./public/index.html",         // scans main HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",        // red-600 equivalent
        "primary-dark": "#b91c1c",
        premium: "#0f0f0f",
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0,0,0,0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
