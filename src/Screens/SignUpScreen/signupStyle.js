import {StyleSheet, Text, View} from 'react-native';

export default styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#071611',
    justifyContent: 'center',
  },
  signupText: {
    color: '#DFFF70',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 50,
    textAlign: 'center',
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
  passwordError: {
    color: '#DFFF70',
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 8,
    marginTop: 5,
  },
  btnCmp: {
    backgroundColor: '#DFFF70',
    marginHorizontal: 120,
    marginTop: 30,
    borderRadius: 50,
    paddingVertical: 8,
    elevation: 3,
  },
  siginupBtnText: {
    color: '#2A3934',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  orText: {
    width: 50,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomView: {
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
  bottomTextView: {
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
