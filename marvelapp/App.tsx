import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Importação de Componentes externos
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import api from "./src/services/api";


//Importando imagens
import Hero from "./src/assets/icons/hero.svg";
import Home from './src/pages/Home';

export default function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    api.get("/").then(({ data }) => setData(JSON.stringify(data[0])));
  }, []);


  // Carregamentos das fontes
  const [fontsLoaded] = useFonts({
    "gilroy-bold": require("./assets/fonts/gilroy-bold.ttf"),
    "gilroy-heavy": require("./assets/fonts/gilroy-heavy.ttf"),
    "gilroy-medium": require("./assets/fonts/gilroy-medium.ttf"),
    "gilroy-regular": require("./assets/fonts/gilroy-regular.ttf"),
    "gilroy-semibold": require("./assets/fonts/gilroy-semibold.ttf"),
  });

  // Caso as fontes nao sejam carregadas a tela de loading aparece
  if (!fontsLoaded) return <AppLoading />;


  return (


    <Home />

  );
}

const styles = StyleSheet.create({
 
  // Carregamento da fonte no CSS
  text: {
    fontFamily: "gilroy-semibold",
  },
});
