import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CardElement from '../../components/CardElement';
import InformativeBar from '../../components/InformativeBar';


function EmployeeScreen({navigation}) {

  const navigationHandler = () => {
    console.log('clicked cardelement');
    //navigation.navigate('EmployeeAppointmentView');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Employees</Text>
      <Text style={styles.pageDescription}>Here is a list of my employees:</Text>

      <ScrollView style={{flexGrow: 0}}>
        {/* Add multiple CardElement components */}
        <CardElement name='Jamie' location='1/2 190 Queen St., G3 5AB, Glasgow' appointmentType={'Outcall appointment'} onCall={true}/>
        <CardElement name='Jamie' location='1/2 190 Queen St., G3 5AB, Glasgow' appointmentType={'Outcall appointment'} onCall={true} />
        <TouchableOpacity onPress={() => navigation.navigate('EmployeeAppointmentView')}>
          <CardElement name='Jamie' location='1/2 190 Queen St., G3 5AB, Glasgow' appointmentType={'Outcall appointment'} onCall={true} />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('EmployeeAppointmentView')}>
            <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>Log In</Text>
        </TouchableOpacity> */}
        {/* Add more CardElement components as needed */}
      </ScrollView>
      <View><Text style={styles.title}>Not on call</Text></View>
      <CardElement name='Jamie' location='1/2 190 Queen St., G3 5AB, Glasgow' appointmentType={'Outcall appointment'} onCall={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    margin: 12,
  },
  title: {
    marginTop: 24,
    marginRight: 12,
    marginLeft: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  pageDescription: {
    marginBottom: 24,
    marginRight:12,
    marginLeft: 12,
    marginTop: 8,
    fontSize: 16,
  },
});

export default EmployeeScreen;