import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../styles';


const CheckInStatus = (props) => {
  function getStatus() {
    console.log(props.status);

    if (props.status === "In Progress") {
      console.log("In Progress inside");

      return { status: 'In Progress', color: colors.blue_lightest, lightColour: colors.blue_darkest };
    }
    else {
      return { status: '', color: '', lightColour: '' };

    }
  }
  const { status, color, lightColour } = getStatus(props.status);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={[styles.status, { color: lightColour }]}>{status}</Text>
    </View>
  );

}

export default CheckInStatus;

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

