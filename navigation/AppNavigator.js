import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import ServicesListScreen from '../screens/ServicesListScreen';
import ScheduleServiceScreen from '../screens/ScheduleServiceScreen';
import ReviewScreen from '../screens/ReviewScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Services" component={ServicesListScreen} />
      <Stack.Screen name="Schedule" component={ScheduleServiceScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
