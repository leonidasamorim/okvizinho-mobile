import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Intro from "../pages/Auth/Intro";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Intro" component={Intro} />
    </Stack.Navigator>
  );
};
