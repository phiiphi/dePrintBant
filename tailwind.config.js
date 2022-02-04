module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      ciri: "#181a1b",
      sea: "#f81f01",
      ocean: "#ee076e",
      bermuda: "#78dcca",
      land: "#B11244",
    },

    extend: {
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [require("daisyui", "tw-elements/dist/plugin")],
};
