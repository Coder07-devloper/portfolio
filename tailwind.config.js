/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        card: "#111111",
        accent: "#6366f1", // indigo-500
        border: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
}
