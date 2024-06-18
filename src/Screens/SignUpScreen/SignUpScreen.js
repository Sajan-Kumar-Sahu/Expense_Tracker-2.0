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
import React, {useState} from 'react';
import styles from './signupStyle';
import Icons from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const handleSignUp = async (email, password) => {
    if (email && password && password == confirmPassword) {
      setLoading(true);
      try {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        const userData = {
          name: name,
          email: email,
        };

        await firestore()
          .collection('users')
          .doc(response.user.id)
          .set(userData);

        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
        Alert.alert(
          'Verification Request',
          'A link has been sent to your email. Kindly verify your email by clicking the link.',
        );
        navigation.dispatch(StackActions.replace('SignIn'));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert('Invalid input', 'Kindly fill all the details correctly.');
    }
  };
  return (
    <SafeAreaView style={styles.parentContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#071611" />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.signupText}>Sign Up</Text>

        <TextInput //Input Field (Name)
          style={styles.textField}
          placeholder="Name"
          placeholderTextColor={'grey'}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput //Input Field (Email)
          style={styles.textField}
          placeholder="Email"
          placeholderTextColor={'grey'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput //Input Field (Password)
          style={styles.textField}
          placeholder="Password"
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput //Input Field (Confirm Passwod)
          style={styles.textField}
          placeholder="Confirm Password"
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />

        {password !== confirmPassword ? ( //password verification
          <Text style={styles.passwordError}>Password does not match</Text>
        ) : null}

        {loading ? (
          <ActivityIndicator size="large" color="#DFFF70" />
        ) : (
          <TouchableOpacity //Sign up Button
            style={styles.btnCmp}
            onPress={() => handleSignUp(email, password)}>
            <Text style={styles.siginupBtnText}>Sign Up</Text>
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

        <View //Other Sign in options
          style={styles.bottomView}>
          <TouchableOpacity onPress={() => handleGoogleSignIn()}>
            <View style={styles.googleButton}>
              <Icons name="google" size={25} color={'white'} />
              <Text style={styles.googlebuttonText}>Sign in with Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomTextView}>
          <Text style={styles.bottomText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(StackActions.replace('SignIn'));
            }}>
            <Text style={styles.navigationText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
