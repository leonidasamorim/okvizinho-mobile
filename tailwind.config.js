const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{jsx,js}", "./rneui.config.js"],
  theme: {
    ...colors,
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1C3C9D",
        },
        secundary: {
          DEFAULT: "#4064B9",
        },
      },
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
