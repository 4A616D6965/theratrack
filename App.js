import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from './src/pages/LaunchScreen';
import LoginScreen from './src/pages/LoginScreen';
import EmployeeScreen from './src/pages/admin/EmployeeScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{headerShown: false}} name="LaunchScreen" component={LaunchScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="EmployeeScreen" component={EmployeeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    );
}
