import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppointmentStatus from '../utils/AppointmentTime';

const CardElement = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={require('../assets/background.png')} 
          style={styles.profileIcon}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.description}>Outcall appointment</Text>
        </View>
        <View style={styles.status}>
        <AppointmentStatus appointmentTime={new Date(Date.now() + 15 * 60 * 1000)} /> {/* In Progress */}
            {/* <AppointmentStatus appointmentTime={new Date(Date.now() + 15 * 60 * 1000)} />Not Responded
            <AppointmentStatus appointmentTime={new Date(Date.now() + 30 * 60 * 1000)} /> In Danger
            <AppointmentStatus appointmentTime={new Date(Date.now() + 45 * 60 * 1000)} /> Safe */}
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.iconContainer}>
            <Image source={require('../assets/location.svg')} style={styles.icon} />
        </View>
        {/* Right side with a column layout */}
        <View style={styles.textContainer}>
            <Text style={styles.description}>1/2 190 Queen St., G3 5AB, Glasgow</Text>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1, 
    borderColor: '#ddd',
    borderRadius: 5,
    width: '100%',
    padding: 12,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 24,    
    height: 24,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
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