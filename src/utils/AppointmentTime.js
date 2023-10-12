import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles';

function AppointmentStatus({ appointmentTime }) {
  function getStatus(appointmentTime) {
    const currentTime = new Date();
    const appointmentTimeDate = new Date(appointmentTime);
    const timeDifference = (appointmentTimeDate - currentTime) / (60 * 1000);

    if (timeDifference <= 0) {
      return { status: 'In Progress', color: colors.blue_lightest, lightColour: colors.blue_darkest };
    } else if (timeDifference <= 15) {
      return { status: 'Not Responded', color: colors.yellow_lightest, lightColour: colors.yellow_darkest };
    } else if (timeDifference <= 30) {
      return { status: 'In Danger', color: colors.red_lightest, lightColour: colors.red_darkest };
    } else {
      return { status: 'Safe', color: colors.green_lightest, lightColour: colors.green_darkest };
    }
  }

  const { status, color, lightColour } = getStatus(appointmentTime);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={[styles.status, {color: lightColour}]}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  status: {
    fontSize: 14,
    fontWeight: 400
  },
});

export default AppointmentStatus;




