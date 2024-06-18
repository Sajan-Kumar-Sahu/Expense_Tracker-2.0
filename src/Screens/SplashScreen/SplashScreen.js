import { View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


const splashImage = require('E:/Study Materials/Development/Expense_Tracker_2/src/assets/Images/SplashScreen.png');
export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(async () => {
      const unSubscribe = auth().onAuthStateChanged(user => {
        const routeName = user !== null ? 'TabNav' : 'SignIn';
        navigation.dispatch(StackActions.replace(routeName)); 
      });
      return () => {
        clearTimeout(timer);
        unSubscribe();
      };
    }, 2000);
  }, [navigation]);
  return (
    <View>
      <Image style={{width: '100%', height: '100%'}} source={splashImage} />
    </View>
  );
}
