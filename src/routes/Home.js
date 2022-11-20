import React from "react";
import { View, Text } from "react-native";

import { useTailwind } from "tailwind-rn/dist";

const Home = () => {
  const tw = useTailwind();
  return (
    <View style={tw("flex-1 justify-center items-center bg-primary")}></View>
  );
};

export default Home;
