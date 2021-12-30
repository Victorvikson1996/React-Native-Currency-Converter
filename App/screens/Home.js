import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
} from "react-native";

import colors from "../Constants/colors";

import { ConversionInput } from "../Components/ConversionInput";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert("todo!")}
      />

      <ConversionInput
        text="GBP"
        value="123"
        onButtonPress={() => alert("todo!")}
      />
    </View>
  );
};
