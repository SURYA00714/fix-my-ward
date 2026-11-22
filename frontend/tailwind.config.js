/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gov: {
          bg: "#0B0F19",
          surface: "#111827",
          card: "#161F33",
          border: "#24324D",
          borderLight: "#334566",
          emerald: "#10B981",
          emeraldHover: "#059669",
          blue: "#3B82F6",
          blueHover: "#2563EB",
          cyan: "#06B6D4",
          amber: "#F59E0B",
          textMuted: "#94A3B8",
          textLight: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
