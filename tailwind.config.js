const keyframes = require("./styles/animations/keyframes");
const animation = require("./styles/animations/animations");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      animation,
      keyframes,
      textColor: {
        primary: "var(--text-primary)",
        "primary-inverted": "var(--text-primary-inverted)"
      },
      backgroundColor: {
        primary: "var(--bg-color)",
        "fill-primary": "var(--fill-primary)",
        "fill-secondary": "var(--fill-secondary)",
        nav: ({ opacityValue }) => {
          if (opacityValue) {
            return `rgba(var(--nav-color), ${opacityValue})`;
          }
          return `rgb(var(--nav-color))`;
        }
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
