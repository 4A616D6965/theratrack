import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function InformativeBar() {
  return (
    <View style={styles.container}>
      {/* Left side with an icon */}
      <View style={styles.iconContainer}>
        <Image source={require('../assets/background.png')} style={styles.icon} />
      </View>

      {/* Right side with a column layout */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Information Title</Text>
        <Text style={styles.description}>A brief description of the information goes here.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0074E4',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
});

export default InformativeBar;
