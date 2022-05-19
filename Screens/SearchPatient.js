import React, {Component,useState} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles/CompleteStyling';

import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';

const SearchPatient = () => {
  
  const navigation = useNavigation();


  let [Mr_Number, setMr_Number] = useState('');
    
  let [cnic, setcnic] = useState('');
  let [familyid, setfamilyid] = useState('');
    
  let [Phone_Number, setPhone_Number] = useState('');

  // if (Mr_Number.trim().length < 7 ||Mr_Number.trim().length > 7 ) {
  //   alert('MRNumber must be of 7 characters');
  //    return;
  //   }

  // let regMR=/^[MR]{2}[0-9]{5}$/;
  // if (regMR.test(Mr_Number.toString())){
  // }
  // else{
  //   alert('Enter Mr Number Acc to Our Hints');
  //   return;
  // }

    return (
  
      <SafeAreaView style={[styles.container,{flex: 1}]}>
 
   
      <View style={{backgroundColor:'#38AB94'}}> 
           <Header style={{height:"20%"}} name="Search Patient " class= ""/>
           <UnitClerkHeader/>


           </View>
           <View style={styles.containerWithinScrollView} >
           <Text style = {[styles.mediumText,{alignSelf:'center'}]}>SEARCH PATIENT BY:</Text>
           <Text style={styles.EdittextHeading}>Mr Number </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Patient's MR Number" 
              keyboardType = 'numeric'
              maxLength={7}
              placeholderTextColor="#30A28C"
              onChangeText={ (Mr_Number)=> setMr_Number(Mr_Number)}/>  
         
           <Text style={styles.EdittextHeading}>CNIC</Text>
            <TextInput  
              style={styles.Edittext}
             maxLength={13}
             keyboardType="number-pad"
              placeholder="Enter Patient's CNIC Number" 
              
              placeholderTextColor="#30A28C"
              onChangeText={ (cnic)=> setcnic(cnic)}/>  
          
           
         <Text style={styles.EdittextHeading}>Family Id</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Your Family Id" 
              keyboardType='numeric'
              maxLength={7}
              placeholderTextColor="#30A28C"
              onChangeText={ (familyid)=> setfamilyid(familyid)}/>  


<Text style={styles.EdittextHeading}>Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Search by Phone Number" 
              maxLength={11}
              placeholderTextColor="#30A28C"
              keyboardType = 'numeric'
              onChangeText={ (Phone_Number)=> setPhone_Number(Phone_Number)}/>  
         
             <TouchableOpacity style={styles.buttonForSearchPatient}
             onPress={() =>navigation.navigate("SelectPatient", {
              mrNum: Mr_Number,
              cnic: cnic,
              Phone_Number:Phone_Number
            })}
             > 
             <Text style={styles.Button_text_styling}>
             SEARCH </Text>
           </TouchableOpacity>
      



          
        
           </View>
         
           </SafeAreaView>
     
     );
     }


     export default SearchPatient;
