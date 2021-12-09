const keyframes = require("./styles/animations/keyframes");
const animation = require("./styles/animations/animations");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      animation,
      keyframes,
      colors: {
        primary: "#1397CC",
        "primary-light": "#56bfe2"
      },
      fontFamily: {
        body: ["'M PLUS Rounded 1c'", "sans-serif"],
        system: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol"
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
