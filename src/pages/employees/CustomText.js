import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontFamily: "Inter",
      fontSize: 16,
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: 20,
      color: "#303437",
    },
  });

export default CustomText;