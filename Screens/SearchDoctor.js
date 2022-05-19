import React, {Component,useState} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles/CompleteStyling';
import { Picker } from "@react-native-picker/picker";

import Header from './Header';

import { useNavigation } from '@react-navigation/native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

const SearchDoctor = ({route}) => {
  const navigation = useNavigation();
  const { patient } = route.params;

  let [AFMC, setAFMC] = useState('');
  let [specality, setSpeaciality] = useState('Cardiologist');
  let [Family_Medicine, setFamily_Medicine] = useState('');
  let [specifyDoctor, setSpecifyDoctor] = useState('');
  let [phone, setPhone] = useState('');
  let [mrNumber, setMrNumber] = useState('');
  console.log("search doc here" ,patient)

    return (
    
      <SafeAreaView style={[styles.container,{flex: 1}]}>
 
   
      <View style={{backgroundColor:'#38AB94'}}> 
           <Header style={{height:"20%"}} name="Search Doctor " class= ""/>
           <UnitClerkHeader/>
           {/* <PatientHeader firstName={patient.firstName} lastName = {patient.lastName} age={patient.age} phone={patient.primaryContact} mrnum={patient.mrnum}/> */}
           </View>
           <View style={styles.containerWithinScrollView} >
           <Text style = {[styles.mediumText,{alignSelf:'center'}]}>SEARCH DOCTOR BY:
           
           </Text>
           <Text style={styles.EdittextHeading}>Location </Text>
           <TextInput  
              style={styles.Edittext}
             value={"AFMC"}
             color="black"
              placeholderTextColor="#30A28C"
              editable={false}
              selectTextOnFocus={false}
              keyboardType = 'numeric'
              // onChangeText={ (phone)=> setPhone(phone)}
              />  


       
     
  
           <Text style={styles.EdittextHeading}>Speciality</Text>
           <TextInput  
              style={styles.Edittext}
             value={"Family Medicine"}
             color="black"
              placeholderTextColor="#30A28C"
              editable={false}
              selectTextOnFocus={false}
              keyboardType = 'numeric'
              // onChangeText={ (phone)=> setPhone(phone)}
              />  



          
           
           <Text style={styles.EdittextHeading}>Specify Doctor</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Specify Name of Desired Doctor" 
              placeholderTextColor="#30A28C"
              onChangeText={ (specifyDoctor)=> setSpecifyDoctor(specifyDoctor)}/>  


                         
           <Text style={styles.EdittextHeading}>Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Search by Phone Number" 
              placeholderTextColor="#30A28C"
             maxLength={11}
              keyboardType = 'numeric'
              onChangeText={ (phone)=> setPhone(phone)}/>  
        
             <TouchableOpacity style={styles.buttonForSearchPatient}
             onPress={() =>navigation.navigate('SelectDoc', {
              specality: specality,
              specifyDoctor: specifyDoctor,
              patient: patient,
              phone:phone

            })}
             > 
             <Text style={styles.Button_text_styling}>
             SEARCH </Text>
           </TouchableOpacity>
      



          
        
           </View>
         
           </SafeAreaView>
       
     );
     }
     export default SearchDoctor;
