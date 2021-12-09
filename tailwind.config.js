const keyframes = require("./styles/animations/keyframes");
const animation = require("./styles/animations/animations");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: ["Inter", "sans-serif"],
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
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
