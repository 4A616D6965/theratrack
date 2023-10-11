import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from './src/pages/LaunchScreen';
import LoginScreen from './src/pages/LoginScreen';
import EmployeePage from './src/pages/admin/HomeScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{headerShown: false}} name="LaunchScreen" component={LaunchScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="EmployeeScreen" component={EmployeePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    );
}
