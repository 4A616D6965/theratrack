import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardElement from '../../components/CardElement';

function EmployeeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Employees</Text>
      <Text style={styles.pageDescription}>Here is a list of my employees:</Text>

      <ScrollView>
        {/* Add multiple CardElement components */}
        <CardElement />
        <CardElement />
        <CardElement />
        {/* Add more CardElement components as needed */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pageDescription: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default EmployeeScreen;