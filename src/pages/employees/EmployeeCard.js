import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { View, Text, Image, StyleSheet } from 'react-native';
import CheckInStatus from '../employees/CheckInStatus';
import { useState , useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

function EmployeeCard(props) {

const [checkInStatus, setCheckInStatus] = useState(null);


const navigation = useNavigation();

const navigationHandler = () => {
  navigation.navigate('AppointmentView',{setCheckInStatus: setCheckInStatus});
}
  return (
    <>
      <View style={styles.card}>

        <Card>
          <Card.Header>{props.name}  {props.time} </Card.Header>
          <Card.Body>
            <Card.Title>
              <>
                <Text style={{ fontSize: 14, color: 'gray' }}>{props.appointmentsType}</Text>
              </>
              <View style={styles.status}>
                <CheckInStatus status={checkInStatus} />
              </View>
            </Card.Title>
            <Card.Text>
              {props.location}
            </Card.Text>
            <Button variant="primary" onClick={navigationHandler}>Check In</Button>
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

export default EmployeeCard;