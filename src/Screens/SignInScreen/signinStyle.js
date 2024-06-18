import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#071611',
    justifyContent: 'center',
  },
  mainViewContainer: {
    paddingHorizontal: 10,
  },
  helloText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  welcomeText: {
    color: '#DFFF70',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 70,
  },
  signInText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  orText: {
    width: 50,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textField: {
    fontSize: 20,
    backgroundColor: '#2A3934',
    color: 'white',
    borderRadius: 15,
    marginTop: 20,
    paddingStart: 8,
    elevation: 3,
  },
  btnCmp: {
    backgroundColor: '#DFFF70',
    marginHorizontal: 120,
    marginTop: 30,
    borderRadius: 50,
    paddingVertical: 8,
    elevation: 3,
  },
  otherSigninView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 120,
    marginTop: 20,
  },
  googleButton: {
    flexDirection: 'row',
    height: 50,
    width: 300,
    borderRadius: 25,
    backgroundColor: '#2A3934',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googlebuttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginStart: 10,
  },
  navigationView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  bottomText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  navigationText: {
    color: '#DFFF70',
    fontWeight: 'bold',
    fontSize: 18,
    marginStart: 3,
  },
});
