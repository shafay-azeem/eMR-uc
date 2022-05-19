import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput,ActivityIndicator} from 'react-native';
import React, {Component, useState,useEffect} from 'react';


import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';


const PatientDemographics = ({route}) => {
   
 const navigation = useNavigation();  

 const { patientId } = route.params;
 const { patient } = route.params;
 console.log(patient,"pap")
 console.log(patient.mrnum,'age')
 const [isLoading, setLoading] = useState(true);
 const [patient1, setPatient] = useState([]);
 useEffect(() => {

 let one = "http://emr.daldaeagleseye.com/emrappointment/patient/"+patient.patientId;
 const requestOne = axios.get(one);

 axios.all([requestOne]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  console.warn(responseOne.data)
 


        

  
  setPatient( responseOne.data.result[0])
  console.log("PD first", patient1)


      })).catch(errors => {
        console.log(errors)
  
    }).then(() => setLoading(false))
  
  
  }, []);
  console.log("PD",patient1)


console.log("Heheheheheh", patientId)
     return (
       <ScrollView style={styles.container}>
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
          <Header name="Patient Demographics" class= ""/>
       <UnitClerkHeader/>
       {/* <PatientHeader/> */}
       
       {isLoading ? (
              <View style={{alignContent:'center', justifyContent: 'center',  alignSelf: 'center', marginTop: 200}}>

             <ActivityIndicator size="large" color="#000000"/>
             <Text style={{textAlign: 'center', fontSize: 20, fontFamily:" Montserrat-Medium"}}>Loading..</Text>

             </View>

                ) : (
                  
<View>
<PatientHeader firstName={patient.firstName} lastName = {patient.lastName} age={patient.age} phone={patient.primaryContact} mrnum={patient.mrnum}/>

                 <TouchableOpacity style={[styles.buttonGeneral,{marginTop:100}]}
              onPress={() =>navigation.navigate("SearchDoctor", {
                patient: patient

              })}
              > 
              <Text style={styles.Button_text_styling}>
              BOOK APPOINTMENT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonGeneral,]}
              onPress={() =>navigation.navigate("UpcomingAppointmentSchedule",{
                patient: patient

              })}
              > 
              <Text style={styles.Button_text_styling}>
              UPCOMING APPOINTMENT SCHEDULE </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>navigation.navigate("RecordsSee",{
                patient: patient

              })}
              > 
              <Text style={styles.Button_text_styling}>
              SEE RECORDS </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>navigation.navigate("ImagesRecords",{
                patient: patient
              })}
              > 
              <Text style={styles.Button_text_styling}>
             IMAGES OR RECORD </Text>
            </TouchableOpacity>
            
            </View>
                )}
            </View>
       
           
             </SafeAreaView>
             </ScrollView>
      
     );
    }

export default PatientDemographics;
 