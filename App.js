import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import utilities from "./tailwind.json";

import Routes from "./src/routes";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </TailwindProvider>
  );
}
