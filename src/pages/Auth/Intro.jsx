import React from "react";

import { View, Text } from "react-native";
import { Button } from "@rneui/themed";
import { useTailwind } from "tailwind-rn";

const Intro = () => {
  const tw = useTailwind();
  return (
    <View style={tw("flex-1 bg-secundary")}>
      <View style={tw("flex-1 bg-white rounded-3xl")}></View>
      <View style={tw("mx-4 mt-8 mb-12")}>
        <View style={tw("flex-row items-center justify-center")}>
          <Button
            title="Criar Conta"
            buttonStyle={tw("bg-secundary")}
            titleStyle={tw("text-white")}
            containerStyle={tw("border-2 border-white")}
          />
          <Button
            title="Fazer Login"
            containerStyle={tw("ml-4")}
            titleStyle={tw("text-secundary")}
          />
        </View>
        <Text style={tw("text-center mt-4 text-white font-wMedium")}>
          Esqueceu a senha? <Text style={tw("underline")}>Clique aqui</Text>
        </Text>
      </View>
    </View>
  );
};

export default Intro;
