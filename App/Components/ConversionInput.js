import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from "react-native";

import colors from "../Constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  button: {
    padding: 15,
    borderColor: colors.border,
    borderRightWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 10,
  },
});

export const ConversionInput = ({ text, value, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} />
    </View>
  );
};
