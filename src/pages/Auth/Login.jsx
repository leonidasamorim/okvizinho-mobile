import React from "react";
import { View, Image, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Input, Button } from "@rneui/themed";
import { useTailwind } from "tailwind-rn";

import Logo from "../../assets/logo.png";

const Login = () => {
  const tw = useTailwind();

  return (
    <View style={tw("flex-1 bg-gray-400")}>
      <Image
        source={Logo}
        style={[
          tw("self-center absolute top-28"),
          { transform: [{ scale: 0.5 }] },
        ]}
      />

      <View style={tw("mx-4 mt-72")}>
        <Input placeholder="E-mail" />
        <Input
          placeholder="Senha"
          containerStyle={tw("mt-2")}
          rightIcon={
            <AntDesign name="eyeo" color={tw("text-gray").color} size={26} />
          }
        />
        <Text style={tw("font-wMedium self-end my-4 text-base text-secundary")}>
          Esqueceu a senha?
        </Text>
        <Button
          title="Login"
          containerStyle={tw("mt-12")}
          buttonStyle={tw("bg-primary")}
          titleStyle={tw("text-white")}
        />
        <Text
          style={tw("font-wMedium text-center mt-4 text-base text-secundary")}
        >
          Não tem uma conta?{" "}
          <Text style={tw("underline font-wMedium")}>Criar conta</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
