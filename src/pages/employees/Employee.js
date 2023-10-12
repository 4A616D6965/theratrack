import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomTabPanel from "./TabPages";
import CardElement from "../../components/CardElement";
const Employee = () => {
  return (
    <>
      <CardElement />
      <View style={styles.header}>
        <Text style={styles.title}>My Appointments</Text>
      </View>
      <CustomTabPanel />
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: "Inter",
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 36,
    color: "#000000",
  },
});

export default Employee;