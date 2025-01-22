/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        fontBase: "18px",
        "small-screen": "9px",
        "small-screen-h1": "10px",
        "small-screen-p": "6px"
      },
      colors: {
        purple100: "#dacffc",
        purple500: "#7650dc",
        yellow100: "#f9eee1",
        yellow500: "#ffcb6b",
        whitepure: "#fff",
        black50: "#121212"
      }
    },
  },
  plugins: [],
}

