import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import utilities from "./tailwind.json";

import RNEUIProvider from "./src/utils/RNEUIProvider";
import Routes from "./src/routes/index.routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <TailwindProvider utilities={utilities}>
        <RNEUIProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </RNEUIProvider>
      </TailwindProvider>
    </SafeAreaProvider>
  );
}
