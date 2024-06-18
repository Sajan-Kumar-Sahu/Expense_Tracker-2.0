import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import SignInScreen from '../Screens/SignInScreen/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
import TabNavigation from './TabNavigation';

export default function MainNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      
       <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNavigation}
        options={{headerShown: false}}
      /> 
    </Stack.Navigator>
  );
}
