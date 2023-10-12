import React from 'react';
import GoogleMapReact from 'google-map-react';
import Card from 'react-bootstrap/Card';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import CardElement from '../../components/CardElement';
import InformativeBar from '../../components/InformativeBar';




const navigationEmployee = () => {
    navigation.navigate('Employee');
}
const defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 11
};

export default function EmployeeAppointmentView({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.headerBack}>
                <TouchableOpacity style={styles.headerButton}>
                    <Icon onPress={() => navigation.navigate('EmployeeScreen')} name="chevron-left" size={12} color="black" />
                </TouchableOpacity>
                <Text style={styles.backTitle}>Employee Details</Text>
            </View>

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
            <CardElement name='David Beckham' location='1/2 190 Queen St., G3 5AB, Glasgow' appointmentTime={new Date(Date.now() + 0 * 60 * 1000)} appointmentType={'Outcall appointment'} onCall={true} image={require('../../assets/profile3.jpg')}/>
            <InformativeBar image={require('../../assets/profile.svg') } title={'Client Name'} description={'David Beckham'}/>
            <InformativeBar image={require('../../assets/location.svg') } title={'Date'} description={'Wednesday 11 October, 2023'} />
            <InformativeBar image={require('../../assets/time.svg') } title={'Appointment Time'} description={'11:30 - 12:30'} />

<View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>

                <Text style={styles.buttonText} onPress={() => navigation.navigate('Employee')}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText2} onPress={() => navigation.navigate('Employee')}>Send SMS</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    headerButton: {
        marginRight: 'auto'
    },
    buttonRow: {
        display: 'flex',
        bottom: 0,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:10
      },
      backTitle: {
        fontSize: 18,
        marginRight: 100,
        textAlign: 'center'
      },

    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        margin: 10,
        padding: 10,
    },
    profileIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    headerText: {
        marginLeft:20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: 'fff',
    },
    status: {
        flex: 1,
        alignItems: 'flex-end',
    },
    statusText: {
        color: 'green',
    },
    // location: {
    //     marginTop: 10,
    //     color: 'lightgray',
    // },
    button: {
        backgroundColor: '#1C5BA7',
        paddingVertical: 10,
        paddingHorizontal: 70,
        borderRadius: 20,
        margin: 4,
        alignItems: 'center',
        maxWidth: 150
        },

        button2: {
            backgroundColor: '#FFFFFF',
            paddingVertical: 10,
            paddingHorizontal: 40,
            borderRadius: 20,
            borderWidth: 1,
            margin: 4,
            alignItems: 'center',
            maxWidth: 200,
            borderColor: '#1C5BA7'
            },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
        alignItems: 'center',
    },
    buttonText2: {
        fontSize: 20,
        color: '#1C5BA7',
        alignItems: 'center',
    }
});