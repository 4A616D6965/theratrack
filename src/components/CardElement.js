import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardElement = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/profile-icon.png' }}
          style={styles.profileIcon}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.description}>Some text beneath the name</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.statusText}>Online</Text>
        </View>
      </View>
      <Text style={styles.location}>Location: New York</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  status: {
    flex: 1,
    alignItems: 'flex-end',
  },
  statusText: {
    color: 'green',
  },
  location: {
    marginTop: 10,
    color: 'lightgray',
  },
});

export default CardElement;