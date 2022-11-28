import { ThemeProvider, createTheme } from "@rneui/themed";

import { useTailwind } from "tailwind-rn";

const RNEUIProvider = ({ children }) => {
  const tw = useTailwind();

  const theme = createTheme({
    components: {
      Input: {
        renderErrorMessage: false,
        inputContainerStyle: tw("border-0 py-0.5"),
        containerStyle: tw("my-1 h-12 p-0 border rounded-md"),
        rightIconContainerStyle: tw("h-auto"),
        errorStyle: tw("text-xs text-red-500 m-1"),
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default RNEUIProvider;
