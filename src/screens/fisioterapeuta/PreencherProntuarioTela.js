
import React from "react";
import { View, Button } from "react-native";

const PreencherProntuarioTela = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Voltar para Home" />
    </View>
  );
};

export default PreencherProntuarioTela;
