import React from 'react';
import GoogleMapReact from 'google-map-react';
import Card from 'react-bootstrap/Card';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';


import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';



 
const defaultProps = {
    center: {
        lat: 55.8642,
        lng: -4.2518
    },
    zoom: 11
};

export default function AppointmentView({route}) {
    const { setCheckInStatus } = route.params;

 
const navigationHandler = () => {
   //setCheckInStatus("In Progress");
  navigation.navigate('Employee',{ checkInStatus : "In Progress" }) ;
 }

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



            <View style={styles.card}>

                <Card>
                    <Card.Header>  1/2 190 Queen St, G3 1AB </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <>
                                <Text style={{ fontSize: 14, color: 'gray' }}>Glasgow</Text>
                            </>
                        </Card.Title>

                    </Card.Body>
                </Card>
            </View>
            <View style={styles.card}>

                <Card>
                    <Card.Header> Time </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <>
                                <Text style={{ fontSize: 14, color: 'gray' }}>11:30  - 12:30</Text>
                            </>
                        </Card.Title>

                    </Card.Body>
                </Card>
            </View>

            {/* {setCheckInStatus && <>
            <Button variant="primary" onClick={clickedCheckOut}>Check Out</Button>
            <Button variant="secondary">Report an Incident</Button></>
            }
             {!setCheckInStatus && !complete &&
              <Button variant="primary" onClick={clickedCheckIn}>Check In</Button>} */}

            <TouchableOpacity style={styles.button}>

                <Text style={styles.buttonText} onPress={() => navigationHandler()}>Check In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText2} onPress={() => navigation.navigate('Employee')}>Get directions</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: '#1C5BA7',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 20,
        margin: 4,
        alignItems: 'center',
        
        },

        button2: {
            backgroundColor: '#FFFFFF',
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderRadius: 20,
            margin: 4,
            alignItems: 'center',
            
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