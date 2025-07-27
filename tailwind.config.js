/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        "custom-gray": "#545D6B",
        "custom-blue": "#3B82F6",
        "custom-white": "#cfd0dc",
        "light-gray": "#EBEBEE",
        graphite: "#717173",
        "custom-black": "#474747",
        "custom-purple": "#708DFA",
        "custom-pink": "#D464AE",
        "text-gray": "#6e6e73",
        "light-pink": "#eda4ff",
        "dark-gray": "#86868b",
        "custom-green": "#4e949f",
        "light-bg": "##fbfbfb",
        "pale-blue": "#F2F3FB",
        "pale-green": "#20B1A6",
      },
      fontWeight: {
        light: 300,
        semilight: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontFamily: {
        signpainter: ["SignPainter", "cursive"],
      },
    },
  },
  plugins: [],
};
