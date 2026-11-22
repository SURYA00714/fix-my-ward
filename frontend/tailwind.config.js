/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Times New Roman"', "Times", "Georgia", "serif"],
        serif: ['"Times New Roman"', "Times", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
