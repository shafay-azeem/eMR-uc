import React, {Component, useState,useEffect} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,ActivityIndicator}  from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import doctorApp from './DATA/doctorApp.json';
import paymentStatus from './DATA/paymentStatus.json';
import { useNavigation } from '@react-navigation/native';
import Patientinfo from './DATA/patient.json';
import axios from 'axios';
function Item({ item }) {
    // const navigation = useNavigation();   
  
      return (
        <ScrollView>
          <SafeAreaView>
        <View style={styles.listItem}>
            <View style={{width: '100%', height: '100%'}}>
            <Text style={{ textAlign: 'center',fontFamily:"Montserrat-Regular"}}>{item.date}</Text>
            <Text style={{ textAlign: 'center',fontFamily:"Montserrat-Regular"}}>{item.slot}</Text>


            </View>  
        
        </View>
        </SafeAreaView>
        </ScrollView>
      );
    }




  const AppointmentDetails = ({route}) => {
  
  
   
    const {patient} = route.params;
    const {schedule} = route.params;
    const [isLoading, setLoading] = useState(true);
    const navigation = useNavigation();   
   
    const[ appDetails, setAppDetails] = useState([])
   
    const { slotDetails } = route.params;
    const { doctorInfo } = route.params;
   
    
   
      
    console.log("Slot Details",slotDetails);
    console.log("Shedule",schedule);
    console.log("doctorInfo",doctorInfo);
    console.log("PatientInfo",patient);
   
    const slotId = slotDetails.provider_slot_id
    const pId = patient.patientId
    console.log(slotId)
    console.log(pId)
    useEffect(() => {
   
     try{
     axios({
         method: 'get',
         url: `http://emr.daldaeagleseye.com/emrappointment/appointment/appointment-details?provider_slot_id=${slotId}&patientId=${pId}`,
       }).then((response) => {
   
             //Balance / transaction-list
             console.log("App details response",response.data.result);
             // appDetails = response.data.result[0];
             setAppDetails(response.data.result[0])
             console.log("dadadadaddsdsada", appDetails)
   
       }).then(() => setLoading(false));
     }catch(error) {
       console.log(error)
      alert("An network error has occurred");
      }
   }, []);
   

    return (
        <View style={styles.container}>
        <Header name="Appointment Details"/>
        <UnitClerkHeader/>
        <PatientHeader firstName={patient.firstName} lastName = {patient.lastName} age={patient.age} phone={patient.primaryContact} mrnum={patient.mrnum}/>
         <View style = {styles.cardView90}>
         {isLoading ? (
              <View style={{alignContent:'center', justifyContent: 'center',  alignSelf: 'center', marginTop: 200}}>
            <ActivityIndicator size="large" color="#0000ff"/>
            <Text style={{textAlign: 'center', fontSize: 20, fontFamily: "Montserrat-Medium"}}>Loading..</Text>
                </View>
            ) : (

         <View style= {{backgroundColor: '', height: '100%', width: '70%', alignSelf: 'center',marginTop: 20}}>
             {/* <View style={{alignSelf: 'center', backgroundColor: 'grey', borderRadius: 20, height: '23%', width: '20%'}}>
                <Text> </Text>
             </View> */}
                        <View style = {{flexDirection: 'row', alignItems:'center', justifyContent:'center' }}>
             <View style={{alignSelf: 'center',height: 120, width: 150,borderRadius: 150/2,justifyContent: 'center', }}>
             <Image
              style={styles.bigLogo}
              source={require('../images/doctor.png')}
            />             
            </View>
            <View>
             <Text style= {styles.cardText30}>{doctorInfo.fullName}</Text>
             <Text style= {[styles.cardText, {alignSelf: 'flex-start',color:"black"}]}>{doctorInfo.speciality}</Text>
             </View>
             </View>
            
             <View style = {[styles.subCardView,{height:"60%",width:"65%"}]}>
               <Text style = {[styles.centeredText,{color:"#3FB39B",fontSize:25,justifyContent:'flex-start',textAlign:'left',marginRight:135}]}>{slotDetails.dayname}{", "}{slotDetails.date}</Text>
               <Text style = {[styles.centeredText,{color:"#3FB39B",marginBottom:40,justifyContent:'flex-start',textAlign:'left',marginRight:160}]}>{slotDetails.startTime}{" - "}{slotDetails.endTime}</Text>


               
            <View style = {{flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{ color: 'black',alignSelf: 'flex-end',fontFamily:"Montserrat-Regular",fontSize:20,marginLeft:150}}>PAYMENT </Text>
            <Text style={{color:"black",alignSelf: 'flex-end',fontFamily:"Montserrat-Regular",fontSize:20}}>{paymentStatus.paymentstatus}</Text>
       
            </View>
       
            <TouchableOpacity style={{     alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'flex-end',
        borderRadius: 25,
        backgroundColor:'#FFFFFF',
        borderColor:"#252726",
        borderWidth:1,
        height:40,
       //  margin:50,
       width:250,
       marginTop:10,
       marginRight:60,marginLeft:20,marginBottom:20}}
              onPress={() =>navigation.navigate("Payment", {
                doctorInfo: doctorInfo,
                slotDetails: slotDetails,
                patient: patient,
                appDetails:appDetails
              })}
              > 
              <Text style={{  fontSize:15,
   color:'black',
  //  fontWeight:'normal',
   fontFamily:"Montserrat-Regular"}}>
              PAY NOW</Text>
            </TouchableOpacity>
             </View>
             

             <View style={{backgroundColor:'#green',marginTop:10,padding:8,borderRadius:10,alignItems: 'center'}} >
            <View style= {{flexDirection: "row"}}>
       



          </View>
          </View>
             

    
    
                   
     

          


              </View>
               )}
        </View>
  
        </View>
      
    );
  }
export default AppointmentDetails;

