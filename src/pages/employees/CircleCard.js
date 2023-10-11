import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Title, Subheading } from "react-native-paper";

const ProfileCard = ({ title, subtitle, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Avatar.Image size={96} source={image} />
      </View>
      <View style={styles.content}>
        <Title>{title}</Title>
        <Subheading>{subtitle}</Subheading>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  iconContainer: {
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
  },
});

export default ProfileCard;