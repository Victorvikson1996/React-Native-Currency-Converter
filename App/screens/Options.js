import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import colors from "../Constants/colors";

import { RowItem } from "../Components/RowItem";

import { Entypo } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export default () => {
  return (
    <SafeAreaView>
      <RowItem
        rightIcon={<Entypo name="chevron-right" size={20} color={color.blue} />}
      />
      <View style={styles.seperator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
        <Entypo name="export" size={20} color={color.blue} />
      </TouchableOpacity>

      <View style={styles.seperator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native By Example</Text>
        <Entypo name="export" size={20} color={color.blue} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
