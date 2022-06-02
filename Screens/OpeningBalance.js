import React, {Component,useState} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView,Alert,} from 'react-native';
import styles from './Styles/CompleteStyling';

import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';

const Closingbalance = () => {
  
  const navigation = useNavigation();

  let statusCode

  let [opening_amount, setopening_amount] = useState('');  
  
  let [opening_cash, setopening_cash] = useState('');
  let [opening_non_cash, setopening_non_cash] = useState('');
  let [opening_user, setopening_user] = useState('');


//  const async  onFetchLoginRecords() {
//    const data = 
//     {
//       "opening_amount":1244,
//       "opening_cash": 1244,
//       "opening_non_cash":1244,
//       "opening_user": "th1"
//   }
//     try {
//      let response = await fetch(
//       "http://emr.daldaeagleseye.com/emrappointment/balance-tracking/opening/today",
//       {
//         method: "POST",
//         headers: {
//          "Accept": "application/json",
//          "Content-Type": "application/json"
//         },
//        body: JSON.stringify(data)
//      }
//     );
//      if (response.status >= 200 && response.status < 300) {
//         alert("authenticated successfully!!!");
//      }
//    } catch (errors) {

//      alert(errors);
//     } 
//   }
// const getMoviesFromApiAsync = async () => {
//   try {
//     const response = await fetch(
//       'http://emr.daldaeagleseye.com/emrappointment/balance-tracking/opening/today'
//     );
//     const json = await response.json();
//     return json.movies;
//   } catch (error) {
//     console.error(error);
//   }
// };



const confirm = async () => {
    
  if (!opening_amount) {
    alert('Enter opening amount');
    return;
  }
    const data = 
    {
      "opening_amount":opening_amount,
      "opening_cash": opening_cash,
      "opening_non_cash":opening_non_cash,
      "opening_user": "22"
  }
  fetch('http://emr.daldaeagleseye.com/emrappointment/balance-tracking/opening/today', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response =>{ 
       statusCode =   response.status;
      const data = response.json();
      console.log(data,'data');
      return Promise.all([statusCode, data],console.log(statusCode,'sss'));
    })
    .then(data => {
      console.log('Successc1:', data);
      if (statusCode==200) {
        Alert.alert(
          'Success',
          'Added Successfully',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('getandcreate'),
            },
          ],
          { cancelable: false }
        );
      } 
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    
  };

    return (
  
      <SafeAreaView style={[styles.container,{flex: 1}]}>
 
   
      <View style={{backgroundColor:'#38AB94'}}> 
           <Header style={{height:"20%"}} name="OPENING BALANCE " class= ""/>
           <UnitClerkHeader/>


           </View>
           <View style={styles.containerWithinScrollView} >
           <Text style = {[styles.mediumText,{alignSelf:'center'}]}>OPENING BALANCE</Text>
           <Text style={styles.EdittextHeading}>Opening Amount </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Opening Amount" 
              keyboardType = 'numeric'
        
              placeholderTextColor="#30A28C"
              onChangeText={ (opening_amount)=> setopening_amount(opening_amount)}/>  
         
           <Text style={styles.EdittextHeading}>Opening User</Text>
            <TextInput  
              style={styles.Edittext}
  selectTextOnFocus={false}
      editable={false}
              placeholder="Enter Opening User" 
              
              placeholderTextColor="#30A28C"
              onChangeText={ (cnic)=> setcnic(cnic)}/>  
          
           
         <Text style={styles.EdittextHeading}>Cash</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Opening Cash" 
              keyboardType='numeric'
             
              placeholderTextColor="#30A28C"
              onChangeText={ (opening_cash)=> setopening_cash(opening_cash)}/>  


<Text style={styles.EdittextHeading}> Non Cash</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Opening Non Cash" 
              placeholderTextColor="#30A28C"
              keyboardType = 'numeric'
              onChangeText={ (opening_non_cash)=> setopening_non_cash(opening_non_cash)}/>  
         
             <TouchableOpacity style={styles.buttonForSearchPatient}
             onPress={confirm}
             > 
             <Text style={styles.Button_text_styling}>
             SUBMIT </Text>
           </TouchableOpacity>
      



          
        
           </View>
         
           </SafeAreaView>
     
     );
     }


     export default Closingbalance;
