import React, {Component, useState,useEffect } from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,ActivityIndicator}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctors from './DATA/selectdoc.json';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';



function Item({ item  , patient}) {
    const navigation = useNavigation();   
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
      return (
        

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('SelectSchedule',{
          doctorInfo : item,
          patient: patient
        })}
        >
          <View style={{flex:1}}>
            
      {/* <View style = {{flexDirection: 'row', width: 80, height: 25,borderColor: 'orange' ,borderWidth:2, borderRadius: 25, alignSelf: 'flex-end', alignItems: 'center'}}>
             <View style = {styles.dollarIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/dollar.png')}
            />
            </View> 
             <Text style= {{textAlign: 'right',color: 'black'}}>500 PKR</Text> 
            
            
            
            </View> */}
          <View style = {styles.roundIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/doctor.png')}
            />

         

          </View>

            <Text numberOfLines={1} style={{ textAlign: 'left', fontSize: 25, color:"#075430", textAlign: 'center',fontFamily:"Montserrat-Regular"}}>Dr. {item.fullName}</Text>

            
            <View style = {{padding: 5, width: '100%', height: '100%'}}>
            <Text numberOfLines={1} style={{ textAlign: 'center', fontSize: 17,  color: 'grey',fontFamily:"Montserrat-Regular"}}>{item.speciality}</Text>
            
        
        <View style= {{flex: 1,justifyContent: 'flex-end', marginBottom: 80 }}> 
        <View style= {{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', }}>
            <View style={styles.circleView}>
                <Text style = {styles.enabled}>M</Text>
              </View>
              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>T</Text>

              </View>
              <View style={styles.circleView}>
              <Text style = {styles.enabled}>W</Text>

              </View>
              <View style={styles.circleView}>
              <Text style = {styles.enabled}>T</Text>
              </View>

              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>F</Text>

              </View>

              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>S</Text>

              </View>

              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>S</Text>

              </View>

              </View>
              </View>


              </View>
          </View>
          <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}
        >
          
        </TouchableOpacity>
        </TouchableOpacity>
       
            );
    }


    const SelectDoc = ({route}) => {

      const numColumns = 3;

      const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
      
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
          data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
          numberOfElementsLastRow++;
        }
      
        return data;
      };


      const [isLoading, setLoading] = useState(true);
      const [Doctor, setDoctor] = useState([]);
    
      const { specifyDoctor } = route.params;
      const { specality } = route.params;
      const { patient } = route.params;
      const { phone } = route.params;
      console.log(phone,"phone")


      useEffect(() => {

  let one = "http://emr.daldaeagleseye.com/emrappointment/appointment/provider/search?phoneNum="+phone+"&name="+specifyDoctor
  const requestOne = axios.get(one);

   
  axios.all([requestOne]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    console.warn(responseOne.data)
   


          
          const data1 = formatData(responseOne.data.result, 3);

          console.log("data1", data1)
          setDoctor(data1);
          // console.log(doctor.result[0].providerId);
       
        })).catch(errors => {
          console.log(errors)
          alert('No Result found , Please Input Valid Information')
    
      }).then(() => setLoading(false))
    
    
    }, []);
    
 

  
    
    return (
    
        <View style={styles.container}>
          <Header name="Select Doctor" class= ""/>
          
          
            <UnitClerkHeader/>
       <PatientHeader firstName={patient.firstName} lastName = {patient.lastName} age={patient.age} phone={patient.primaryContact} mrnum={patient.mrnum}/>
            {isLoading ? (

<ActivityIndicator size="large" color="#000000" style={{marginTop:280}}/>
    
) : (
         <View style= {{flex:1 ,width: '100%', alignSelf: 'center'}}>
         <SafeAreaView style={{flex:1}} >
        <FlatList
  
          style={{flex:1, marginTop: 30, marginRight:30,marginLeft:30}}
          data={ Doctor}
          renderItem={({ item }) => <Item item={item}  patient= {patient} />}
          keyExtractor={item => item.providerId}
          numColumns = {numColumns}
         
        />
        </SafeAreaView>
  

        </View>
)}
        </View>
       
      
    
    );
  }
export default SelectDoc;
