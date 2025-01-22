/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      purple100: "#dacffc",
      purple500: "#7650dc",
      yellow100: "#f9eee1",
      yellow500: "#ffcb6b",
      whitepure: "#fff",
      black50: "#121212"
    },
    extend: {
      fontSize: {
        fontBase: "18px",
        fontSmall: "0.4rem",
        fontsemibold: "0.5rem",
        h1: "18px"
      }
    },
  },
  plugins: [],
}

