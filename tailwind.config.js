/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mci_blue: "#8bbcdd",
      },
      backgroundImage: {
        bg_premier: "url('../src/assets/img/premierleague-bg.png')"
      }
    },
  },
  plugins: [],
};
