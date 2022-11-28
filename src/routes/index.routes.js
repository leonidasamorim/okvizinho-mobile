import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "./Auth.routes";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};
