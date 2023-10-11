import React from 'react';
import GoogleMapReact from 'google-map-react';
import EmployeeCard from "./EmployeeCard";
import { useNavigation } from '@react-navigation/native';
import Card from 'react-bootstrap/Card';
import { View, Text, Image, StyleSheet } from 'react-native';


import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

const navigationHandler = () => {
    navigation.navigate('AppointmentView');
  
  }
  
const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

export default function AppointmentView() {
  return (
    <>
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <div style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
    </div>
      </MDBRipple>
     
    </MDBCard>

   
    <View style={styles.card}>

<Card>
  <Card.Header>  Konrad Scroggins </Card.Header>
  <Card.Body>
            <Card.Title>
              <>
                <Text style={{ fontSize: 14, color: 'gray' }}>Outcall appointment</Text>
              </>
            </Card.Title>
           
          </Card.Body>
</Card>
</View>


 </>
  );
}


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