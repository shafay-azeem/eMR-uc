import React, {Component, useState,useEffect} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,SafeAreaView,Modal,Button,Alert,ActivityIndicator,RefreshControl}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import Balance from './Balance';
import axios from 'axios';
import AppointmentHeading from './AllHeaders/AppointmentHeading';
import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctorApp from './DATA/doctorApp.json';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import drinfo from './DATA/data.json';
import Patientinfo from './DATA/patient.json';
import patientDoc from './DATA/patientDoc.json';
import {DevSettings} from 'react-native';




 const getandcreate = () => {

  const numColumns = 3;






 
 const navigation = useNavigation();  
 const [refreshing, setRefreshing] = useState(true);
 const [closing_amount, setclosing_amount] = useState([]);
 const [opening_amount, setopening_amount] = useState([]);
 const [opening_non_cash ,setopening_non_cash] = useState([]);
 const [opening_cash, setopening_cash] = useState([]);
 const [balance, setbalance] = useState([]);
      


 const [isLoading, setLoading] = useState();



 useEffect(() => {

    let one = "http://emr.daldaeagleseye.com/emrappointment/balance-tracking/today"
    const requestOne = axios.get(one);
  
     
    axios.all([requestOne]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      console.log(responseOne.data)
         
      console.log(responseOne.data.status.opening_amount)
    
      setopening_amount(responseOne.data.status.opening_amount)
      setopening_cash(responseOne.data.status.opening_cash)
        setopening_non_cash (responseOne.data.status.opening_non_cash)
        setclosing_amount(responseOne.data.status.closing_amount)
      console.log(opening_amount ,'bal')
      console.log(opening_amount ,'opening_amountbal')
      
            
         
          })).catch(errors => {
            console.log(errors)
      
        }).then(() => setRefreshing(false))
      
      
      }, []);

           
    const today = new Date();
    const date = today.getDate() + "-" + Number(today.getMonth()) +1+ "-" + today.getFullYear()
    const getCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
}

if (closing_amount==null){
    setclosing_amount("0")
}
if (opening_amount==null){
  setopening_amount("0")
}
if (opening_cash==null){
  setopening_cash("0")
}
if (opening_non_cash==null){
  setopening_non_cash("0")
}
    return (
  
        <View style={styles.container} >
    
    <UnitClerkHeader/>
           
           <View style={[styles.containerForButton,]}>
            <TouchableOpacity style={[styles.button_Side_by_Side,{width:300,marginTop:30}]}
              onPress={() =>navigation.navigate("OpeningBalance")}
              > 
              <Text style={styles.Button_text_styling}>
              OPENING BALANCE</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button_Side_by_Side,{width:300,marginTop:30}]}
              onPress={() =>navigation.navigate("Closingbalance")}
              > 
              <Text style={styles.Button_text_styling}>
              CLOSING BALANCE</Text>
            </TouchableOpacity>

          
        
    </View>
    {isLoading ? (

<ActivityIndicator size="large" color="#000000" style={{marginTop:280}}/>
    
) : (
    <View style={[styles.containerWithinScrollView,{}]} >

           <Text style = {[styles.mediumText,{alignSelf:'center',}]}>BALANCE</Text>
           <Text style = {[styles.mediumText1,{alignSelf:'center',marginTop:30}]}>Today's Date : {getCurrentDate()}</Text>

          
<Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Opening Amount: </Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{opening_amount}</Text>

                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Cash: </Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{opening_cash}</Text>

                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Non Cash</Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{opening_non_cash}</Text>


                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Closing Amount </Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{closing_amount}</Text>
           
            
                </View>
)}
      
        </View>
     
    );
        };
    

export default getandcreate;