const keyframes = require("./styles/animations/keyframes");
const animation = require("./styles/animations/animations");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      animation,
      keyframes,
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)"
      },
      textColor: {
        inverted: "var(--text-color-inverted)",
        muted: "var(--text-color-muted)"
      },
      backgroundColor: {
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
