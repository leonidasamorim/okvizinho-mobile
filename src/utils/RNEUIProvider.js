import { ThemeProvider, createTheme } from "@rneui/themed";

import { useTailwind } from "tailwind-rn";
import cn from "classnames";

const RNEUIProvider = ({ children }) => {
  const tw = useTailwind();

  const theme = createTheme({
    components: {
      Input: {
        inputStyle: tw(
          cn("font-wRegular px-3 text-base text-gray-900 border-0", {
            "leading-5": Platform.OS == "ios",
          })
        ),
        renderErrorMessage: false,
        inputContainerStyle: tw("border-0 py-0.5"),
        containerStyle: tw(
          "my-1 h-12 p-0 border border-primary rounded-md bg-white"
        ),
        rightIconContainerStyle: tw("h-auto pr-4"),
        errorStyle: tw("text-xs text-red-500 m-1"),
      },
      Button: {
        titleStyle: tw("text-primary text-lg font-wMedium"),
        containerStyle: tw("rounded-lg"),
        buttonStyle: tw("bg-white px-8"),
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default RNEUIProvider;
