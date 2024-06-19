import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icons from 'react-native-vector-icons/FontAwesome5';
import styles from './signinStyle';

import auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '619988092314-qhpk3b347k7u7d2rd9umsefa12vioc6g.apps.googleusercontent.com',
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      if (email && password) {
        const isLogin = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        console.log(isLogin);
        setEmail('');
        setPassword('');

        if (isLogin.user.emailVerified) {
          navigation.dispatch(StackActions.replace('TabNav'));
        } else {
          Alert.alert(
            'Verification Required',
            'Kindly verify your email. If link not received click RESEND to get the link',
            [
              {
                text: 'RESEND',
                onPress: async () => {
                  await auth().currentUser.sendEmailVerification();
                },
              },
              {
                text: 'OK',
              },
            ],
          );

          await auth().signOut();
        }
      } else {
        Alert.alert('Invalid input', 'Please fill all the details.');
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Unauthorized',
        'Email does not exist.Kindly register your email.',
      );
      setEmail('');
      setPassword('');
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#071611" />
      <View style={styles.mainViewContainer}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.welcomeText}>Welcome !</Text>

        <TextInput //Input Field (Email)
          style={styles.textField}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          placeholderTextColor={'grey'}
        />
        <TextInput //Input Field (Password)
          style={styles.textField}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          placeholderTextColor={'grey'}
          secureTextEntry={true}
        />

        {/* SignIn Button Validation */}
        {loading ? (
          <ActivityIndicator size="large" color="#DFFF70" />
        ) : (
          <TouchableOpacity
            style={styles.btnCmp}
            onPress={() => handleLogin(email, password)}>
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>
        )}
        <View //Separator
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#DFFF70'}} />
          <View>
            <Text style={styles.orText}>Or</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#DFFF70'}} />
        </View>

        {/* Google Signin Button */}
        <View style={styles.otherSigninView}>
          <TouchableOpacity onPress={() => handleGoogleSignIn()}>
            <View style={styles.googleButton}>
              <Icons name="google" size={25} color={"white"}/>
              <Text style={styles.googlebuttonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Don't have an account */}
        <View style={styles.navigationView}>
          <Text style={styles.bottomText}>Don't have an account yet?</Text>

          {/* Sign up navigation */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.navigationText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
