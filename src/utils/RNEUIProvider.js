import { ThemeProvider, createTheme } from "@rneui/themed";

import { useTailwind } from "tailwind-rn";

const RNEUIProvider = ({ children }) => {
  const tw = useTailwind();

  const theme = createTheme({
    components: {
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
