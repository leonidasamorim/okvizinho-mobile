const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{jsx,js}", "./rneui.config.js"],
  theme: {
    ...colors,
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1C3C9D",
          700: "#061033",
        },
        gray: {
          DEFAULT: "#C8D3D5",
        },
        secundary: {
          DEFAULT: "#4064B9",
          200: "#A4B8C4",
        },
      },
      fontFamily: {
        wLight: "WorkSans_300Light",
        wRegular: "WorkSans_400Regular",
        wMedium: "WorkSans_500Medium",
        wSemiBold: "WorkSans_600SemiBold",
        wBold: "WorkSans_700Bold",
      },
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
