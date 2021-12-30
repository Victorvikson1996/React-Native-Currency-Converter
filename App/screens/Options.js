import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert } from "react-native";

import colors from "../Constants/colors";

import { RowItem, RowSeperator } from "../Components/RowItem";

import { Entypo } from "@expo/vector-icons";

const openLink = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, something went wrong", "Please try gain later");
  });
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => alert("todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />
        <RowSeperator />

        <RowItem
          text="React Native Basics"
          onPress={() =>
            openLink(
              "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
            )
          }
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeperator />

        <RowItem
          text="React Native By Example"
          onPress={() => openLink("https://reactnativebyexample.com")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
