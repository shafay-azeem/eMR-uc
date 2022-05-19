import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput,Image,Pressable,Modal,Alert,Button} from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import invoice from './DATA/Invoice.json';
import drinfo from './DATA/data.json';
import { Picker } from "@react-native-picker/picker";



import { useNavigation } from '@react-navigation/native';

 
  const PaymentSuccessfull = ({route}) => {

    const {patient} = route.params;
    const {schedule} = route.params;
    const navigation = useNavigation();   
    const { slotDetails } = route.params;
    const { doctorInfo } = route.params;
    const { appDetails } = route.params;
    let appointmentId = appDetails.appointmentId
  
    const success = async () => {
      fetch(`http://emr.daldaeagleseye.com/emrappointment/appointment/${appointmentId}/complete`, {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:');
            Alert.alert(
              'Success!',
              'Doctor Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          })
          .catch((error) => {
            console.error('Error:', error);
          }).then(navigation.navigate('HomeScreen')
          )
    }
    console.log(slotDetails)
    console.log(patient)
    console.log(appDetails.appointmentId)
     
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
const getCurrentTime = () => {
  let today = new Date();
  let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
  let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
  return hours + ':' + minutes + ':' + seconds;
}

    return (
      <View style={styles.container}>
          <Header name="Payment Successfully Done" class= ""/>
          <UnitClerkHeader/>
          <PatientHeader firstName={patient.firstName} lastName = {patient.lastName} age={patient.age} phone={patient.primaryContact} mrnum={patient.mrnum}/>
      <View style = {styles.cardView91}>
         
        <View style={{width:'100%'}}>
        <View style={{backgroundColor:'#FFFFFF',padding:20,height:'20%',marginBottom:20}} >
            <View style= {{flexDirection: "row",justifyContent:'center',padding:10}}>
   
          

            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Profile Image </Text>
 
            <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/doctor.png')}
                    /> }
                  </View>
            </View>

            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Doctor Name </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:18,color:'#3FB39B',marginRight:20,fontFamily:"Montserrat-Regular"}}>{doctorInfo.fullName}</Text>
       
            </View>
            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Speciality </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:18,color:'#3FB39B',marginRight:20,fontFamily:"Montserrat-Regular"}}>{doctorInfo.speciality}</Text>
       
            </View>
          
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Fee</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:18,color:'#3FB39B',marginRight:20,fontFamily:"Montserrat-Regular"}}>{doctorInfo.initialFees} Rs</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>PhoneNo</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:18,color:'#3FB39B',marginRight:20,fontFamily:"Montserrat-Regular"}}>{doctorInfo.phoneNum}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20 , fontFamily:"Montserrat-Regular"}}>Location</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:18,color:'#3FB39B',marginRight:20,fontFamily:"Montserrat-Regular"}}>AFMC</Text>
       
            </View>
        



          </View>
          </View>
    


  

            <View style = {{width: '80%', flexDirection: 'row',alignSelf:'center'}}>

           
               
  <View style={{width:'50%',justifyContent:'center',alignSelf:'center',alignItems:'flex-start'}}>

                <View style = {{flexDirection: 'row' ,marginTop: 5}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Invoice ID: </Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{appDetails.invoiceID}</Text>
                </View>


                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Invoice Date/Time: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{getCurrentDate()}{" - "}{getCurrentTime()}</Text>
                </View>


                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Patient ID: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{patient.patientId}</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Patient Name: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{appDetails.patientName}</Text>

                </View>
                
                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Appointment Date: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{slotDetails.dayname} , {appDetails.date}</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Appointment Time: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{slotDetails.startTime}</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Teleconsultation Payment: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>{doctorInfo.initialFees}</Text>

                </View>
                
                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:15,color:'black',fontFamily:"Montserrat-Regular"}]}>Issued by: </Text>
                <Text style = {[{marginTop:7,fontSize:20,color:'#3FB39B',fontFamily:"Montserrat-SemiBold"}]}>AFMC</Text>

                </View>

                </View>

              <View style = {{width: '50%',justifyContent:'center'}}>

              


 <View style={{flexDirection:'row'}}>
                <Text style = { [{flexDirection: 'row',alignSelf:'flex-end',fontFamily:"Montserrat-Regular",fontSize:20,color:'black'}]}>Amount Payable: </Text>
                <View style = {{flexDirection: 'row',borderColor: 'orange' ,borderWidth:2, borderRadius: 15, alignItems: 'center',}}>
            
            <Text style= {{textAlign: 'right',color: 'black',fontFamily:"Montserrat-SemiBold",padding:5,fontSize:15}}>{doctorInfo.initialFees} </Text>
            
            </View>
            
            </View>

                


              </View>
      </View>
           
    

                </View>

                <TouchableOpacity style={[styles.buttonGeneral,{marginBottom:1000,width:"28%"}]}
              onPress={() =>navigation.navigate("HomeScreen")}
              > 
              <Text style={styles.Button_text_styling}>
              PRINTED INVOICE</Text>
            </TouchableOpacity>
                   </View>

    </View>
    );
      }
    export default PaymentSuccessfull;

