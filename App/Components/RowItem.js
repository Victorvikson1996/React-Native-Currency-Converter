import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 16,
    color: colors.text,
  },
});

export const RowItem = ({ rightIcon }) => {
  return (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>Themes</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};
