import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CardElement from '../../components/CardElement';
import InformativeBar from '../../components/InformativeBar';

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
        <InformativeBar />
        <TouchableOpacity onPress={() => navigation.navigate('EmployeeScreen')}>
            <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>Log In</Text>
        </TouchableOpacity>
        {/* Add more CardElement components as needed */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginTop: 24,
    marginRight: 24,
    marginLeft: 24,
    fontSize: 24,
    fontWeight: 'bold',
  },
  pageDescription: {
    marginBottom: 24,
    marginRight: 24,
    marginLeft: 24,
    marginTop: 8,
    fontSize: 16,
  },
});

export default EmployeeScreen;