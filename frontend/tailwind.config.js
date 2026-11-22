/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        civic: {
          darkest: "#070D1E",
          navy: "#0E1A38",
          card: "#14244B",
          border: "#283E70",
          blue: "#2563EB",
          cyan: "#0284C7",
          emerald: "#059669",
          amber: "#D97706",
          gold: "#F59E0B",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ['"Times New Roman"', "Times", "Georgia", "serif"],
        serif: ['"Times New Roman"', "Times", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
