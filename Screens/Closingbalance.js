import React, {Component,useState} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView,Alert,} from 'react-native';
import styles from './Styles/CompleteStyling';

import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';

const Closingbalance = () => {
  
  const navigation = useNavigation();

  let statusCode

  let [closing_amount, setclosing_amount] = useState('');  
  
  let [closing_cash, setclosing_cash] = useState('');
  let [closing_non_cash, setclosing_non_cash] = useState('');
  let [closing_user, setclosing_user] = useState('');






const confirm = async () => {
    

    const data = 
    {
      "closing_date_time":" null",
      "closing_amount": closing_amount,
      "closing_cash":closing_cash ,
      "closing_non_cash": closing_non_cash,
      "closing_user": "th1"
  }
  fetch('http://emr.daldaeagleseye.com/emrappointment/balance-tracking/closing/today', {
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
           <Header style={{height:"20%"}} name="CLOSING BALANCE " class= ""/>
           <UnitClerkHeader/>


           </View>
           <View style={styles.containerWithinScrollView} >
           <Text style = {[styles.mediumText,{alignSelf:'center'}]}>CLOSING BALANCE</Text>
           <Text style={styles.EdittextHeading}>Closing Amount</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Closing Amount" 
              keyboardType = 'numeric'
        
              placeholderTextColor="#30A28C"
              onChangeText={ (closing_amount)=> setclosing_amount(closing_amount)}/>  
         
           <Text style={styles.EdittextHeading}>Closing User</Text>
            <TextInput  
              style={styles.Edittext}
  selectTextOnFocus={false}
      editable={false}
              placeholder="Enter Closing User" 
              
              placeholderTextColor="#30A28C"
              onChangeText={ (cnic)=> setcnic(cnic)}/>  
          
           
         <Text style={styles.EdittextHeading}>Closing Cash</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Closing Cash" 
              keyboardType='numeric'
             
              placeholderTextColor="#30A28C"
              onChangeText={ (closing_cash)=> setclosing_cash(closing_cash)}/>  


<Text style={styles.EdittextHeading}>Closing Non Cash</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Closing  Non Cash" 
              placeholderTextColor="#30A28C"
              keyboardType = 'numeric'
              onChangeText={ (closing_non_cash)=> setclosing_non_cash(closing_non_cash)}/>  
         
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
