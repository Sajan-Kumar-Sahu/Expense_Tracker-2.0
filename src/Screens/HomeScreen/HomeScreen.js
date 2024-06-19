import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Styles from './homeStyle';
import Icons from 'react-native-vector-icons/FontAwesome6';
import Icons2 from 'react-native-vector-icons/MaterialIcons';
import homeStyle from './homeStyle';

const HomeScreen = () => {
  return (
    <ScrollView style={Styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#071611" />
      <View style={Styles.headerContainer}>
        <TouchableOpacity>
          <Icons name="bars-staggered" size={30} color={'#18FBB6'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.iconView}>
            <Icons name="user" size={25} color={'#18FBB6'} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
          Available Balance
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icons2 name="currency-rupee" size={30} color={'#18FBB6'} />
          <Text style={{fontSize: 25, color: '#18FBB6', fontWeight: 'bold'}}>
            30,000,00
          </Text>
        </View>
      </View>
      <Text style={Styles.categoryText}>Categories</Text>
      <ScrollView horizontal={true} style={{padding: 10}}>
        <View style={homeStyle.Shopping}>
          <Text style={Styles.categoryNameText}>Shopping</Text>
        </View>
        <View style={Styles.Education}>
          <Text style={Styles.categoryNameText}>Education</Text>
        </View>
        <View style={Styles.HealthCare}>
          <Text style={Styles.categoryNameText}>Health Care</Text>
        </View>
        <View style={Styles.Food}>
          <Text style={Styles.categoryNameText}>Food</Text>
        </View>
        <View style={homeStyle.Shopping}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Shopping
          </Text>
        </View>
        <View style={homeStyle.Education}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Education
          </Text>
        </View>
        <View style={homeStyle.HealthCare}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Health Care
          </Text>
        </View>
        <View style={homeStyle.Food}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Food
          </Text>
        </View>
      </ScrollView>
      <Text
        style={{
          marginTop: 20,
          marginStart: 10,
          fontWeight: 'bold',
          fontSize: 20,
          color: 'white',
          marginBottom: 10,
        }}>
        This Month
      </Text>
      <View style={homeStyle.incomeCard}>
        <View style={homeStyle.incomeCardContent}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            35,000,00
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              color: 'green',
              fontWeight: 'bold',
            }}>
            Income
          </Text>
        </View>
        <View style={homeStyle.incomeCardContent}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            36,000,00
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              color: 'red',
              fontWeight: 'bold',
            }}>
            Expenses
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 20,
          marginStart: 10,
          fontWeight: 'bold',
          fontSize: 20,
          color: 'white',
          marginBottom: 10,
        }}>
        Transactions
      </Text>
    </ScrollView>
  );
};

export default HomeScreen;
