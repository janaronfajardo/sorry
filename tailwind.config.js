/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#faf7f5",
        warm: "#f5ede8",
        accent: {
          DEFAULT: "#c9917b",
          soft: "#e8c5b5",
        },
        ink: {
          primary: "#3d3644",
          secondary: "#6b6270",
          muted: "#9b94a3",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "float-subtle": "floatSubtle 6s ease-in-out infinite",
        "float-slow": "floatSubtle 8s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatSubtle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.05)", opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
