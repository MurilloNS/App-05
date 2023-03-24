import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Image } from "react-native";
import Title from "./src/components/Title";
import Input from "./src/components/Input";
import Button from "./src/components/Button";
import Result from "./src/components/Result";

export default function App() {
  const [alcool, setAlcool] = useState("");
  const [gas, setGas] = useState("");
  const [resultado, setResultado] = useState("Resultado");

  const calcular = () => {
    res = {alcool} / {gas}
    res < 0.7 ? setResultado("Alcool é melhor para abastecer") : setResultado("Gasolina é melhor para abastecer")
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Title title="Alcool ou Gasolina" />
        <Image style={styles.img} source={require("./src/assets/gas.png")} />
        <Input text="Preço do Alcool" onChangeText={setAlcool} />
        <Input text="Preço da Gasolina" onChangeText={setGas} />
        <Button textButton="Verificar" onPress={calcular} />
        <Result textResult={resultado} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  img: {
    width: "30%",
    height: "30%",
    alignSelf: "center"
  }
});
