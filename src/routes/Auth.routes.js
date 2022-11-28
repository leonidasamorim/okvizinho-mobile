import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import Intro from "../pages/Auth/Intro";
import Login from "../pages/Auth/Login";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackVisible: true,
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerTitle: (props) => <View />,
      }}
    >
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
