import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button( { label, labelStyle, style, ...props } ) {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]} activeOpacity={0.6}>
      <Text style={[styles.buttonText, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#63b76d",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center"
  },
});