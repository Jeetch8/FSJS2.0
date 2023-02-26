/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amantic: ["Amatic SC", "cursive"],
        apple: ["Homemade Apple", "cursive"],
        nanum: ["Nanum Pen Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        yellowtail: ["Yellowtail", "cursive"],
      },
    },
  },
  plugins: [],
};
