
const apiUrl = 'https://theratrack-therapist-create.azurewebsites.net';

const requestData = {
  ManagerId: '1',
  TherapistId: '1',
  TherapistName: 'Jamie Grant',
  AppointmentTimeSlot: '13:00',
  AppointmentAddress: '4 Clyde Place, Glasgow, G42 5GY',
  AppointmentType: 'Outcall',
  ClientName: 'Greg Peters',
  ClientWarning: true,
};

export function sendHttpRequest() {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then((data) => {
      console.log('Request succeeded with JSON response:', data);
      // You can handle the response data here
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

