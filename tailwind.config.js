/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('./assets/img/water-164964_1920.jpg')",
      },
      fontFamily: {
        display: ["Satisfy", "cursive"],
      },
    },
  },
  plugins: [],
};
