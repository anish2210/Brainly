/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:{
          100: "#08fa6c",
          200: "#1ec562",
          400: "#152a19",
          600: "#0e100f"
        }
      }
    },
  },
  plugins: [],
}
