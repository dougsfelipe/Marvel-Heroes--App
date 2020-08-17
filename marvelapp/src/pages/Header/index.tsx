import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";

import Menu from "../../assets/icons/menu.svg";
import Logo from "../../assets/icons/marvel.svg";
import Search from "../../assets/icons/search.svg";

const Home = () => {
  return (
    <View style={styles.container}>
    <View style={styles.bar}>
      <Menu />
      <Logo />
      <Search />
    </View>

    <View style={styles.head}>
      <Text style={styles.title}>Bem vindo ao Marvel Heroes</Text>
      <Text style={styles.subTitle}>Escolha o seu personagem</Text>
    </View>
  </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
      },
      bar: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      head: {
        marginTop: 20,
      },
      title: {
        fontFamily: "gilroy-semibold",
        fontSize: 14,
        color: "#B7B7C8",
      },
      subTitle: {
        fontFamily: "gilroy-heavy",
        fontSize: 32,
        color: "#313140",
      },
});