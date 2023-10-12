import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function InformativeBar({image, title, description}) {
  return (
    <View style={styles.container}>
      {/* Left side with an icon */}
      <View style={styles.iconContainer}>
        <Image source={image} style={styles.icon} />
      </View>

      {/* Right side with a column layout */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#72777A',
  },
});

export default InformativeBar;
