import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from './src/pages/LaunchScreen';
import LoginScreen from './src/pages/LoginScreen';
import EmployeeScreen from './src/pages/admin/EmployeeScreen';
import  Employee from './src/pages/employees/Employee';
import AppointmentView from './src/pages/employees/AppointmentView';
import EmployeeAppointmentView from './src/pages/admin/EmployeeAppointmentView';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Employee">
          <Stack.Screen options={{headerShown: false}} name="LaunchScreen" component={LaunchScreen} />
          <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="EmployeeScreen" component={EmployeeScreen} />
          <Stack.Screen options={{headerShown: false}} name="EmployeeAppointmentView" component={EmployeeAppointmentView} />
          <Stack.Screen options={{ path: 'Employee' }} name="Employee" component={Employee} />

          <Stack.Screen options={{ path: 'AppointmentView' }} name="AppointmentView" component={AppointmentView} />


        </Stack.Navigator>
      </NavigationContainer>
    </>
    );
}
