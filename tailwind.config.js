module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "2560px",
    },
    colors: {
      primary: "#a855f7",
      secondary: "#c4b5fd",
      background: "#f3f4f6",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
    },
  },
  plugins: [],
};
