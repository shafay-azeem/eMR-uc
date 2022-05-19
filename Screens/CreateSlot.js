import React, {Component, useState, useEffect,} from 'react';
import { Text, View, TouchableOpacity,TextInput, Alert} from 'react-native';
import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import CheckBox from '@react-native-community/checkbox';
import DateSelect from './DateSelect';
import TimeSelect from './TimeSelect';
import { useNavigation } from '@react-navigation/native';



const CreateSlot = ({route}) => {

  const navigation = useNavigation();

  const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [endDate, setEndDate] = useState("Select End Date");
  const [startDate, setStartDate] = useState("Select Start Date");
  const { doctorInfo } = route.params;
  const idDoc = doctorInfo.providerId;
  useEffect(() => {
    console.log(doctorInfo.providerId)

  },[]);

  let sunStartTime = "";
  let monStartTime = "";
  let tuesStartTime = "";
  let wedStartTime = "";
  let thursStartTime = "";
  let friStartTime = "";
  let satStartTime = "";

  let sunEndTime = "";
  let monEndTime = "";
  let tuesEndTime = "";
  let wedEndTime = "";
  let thursEndTime = "";
  let friEndTime = "";
  let satEndTime = "";
  

  //Day Select
  const [sunday, setSunday] = useState(false)
  const [monday, setMonday] = useState(false)
  const [tuesday, setTuesday] = useState(false)
  const [wednesday, setWednesday] = useState(false)
  const [thursday, setThursday] = useState(false)
  const [friday, setFriday] = useState(false)
  const [saturday, setSaturday] = useState(false)

  //Day Addbreak
  const [sundayBreak, setSundayBreak] = useState(false)
  const [mondayBreak, setMondayBreak] = useState(false)
  const [tuesdayBreak, setTuesdayBreak] = useState(false)
  const [wednesdayBreak, setWednesdayBreak] = useState(false)
  const [thursdayBreak, setThursdayBreak] = useState(false)
  const [fridayBreak, setFridayBreak] = useState(false)
  const [saturdayBreak, setSaturdayBreak] = useState(false)

  //Min Time
  const [sunMin, setSunMin] = useState(0)
  const [monMin, setMonMin] = useState(0)
  const [tuesMin, setTuesMin] = useState(0)
  const [wedMin, setWedMin] = useState(0)
  const [thursMin, setThurMin] = useState(0)
  const [friMin, setFriMin] = useState(0)
  const [satMin, setSatMin] = useState(0)


  //Gap
  const [sunGap, setSunGap] = useState(0)
  const [monGap, setMonGap] = useState(0)
  const [tuesGap, setTuesGap] = useState(0)
  const [wedGap, setWedGap] = useState(0)
  const [thursGap, setThursGap] = useState(0)
  const [friGap, setFriGap] = useState(0)
  const [satGap, setSatGap] = useState(0)

    //Slot
    const [sunSlot, setSunSlot] = useState(0)
    const [monSlot, setMonSlot] = useState(0)
    const [tuesSlot, setTuesSlot] = useState(0)
    const [wedSlot, setWedSlot] = useState(0)
    const [thursSlot, setThursSlot] = useState(0)
    const [friSlot, setFriSlot] = useState(0)
    const [satSlot, setSatSlot] = useState(0)



  const handleCreateSlot = async () =>{
    console.log("Start Date from Parent: ", global.startDate);
    console.log("End Date from Parent: ", global.endDate);
    console.log("Sunday Start Time block (parent): " + global.stSunday);

    // setSunStartTime(global.stSunday)
    // setMonStartTime(global.stMonday)
    // setTuesStartTime(global.stTuesday)
    // setWedStartTime(global.stWednesday)
    // setThursStartTime(global.stThursday)
    // setFriStartTime(global.stFriday)
    // setSatStartTime(global.stSaturday)
    sunStartTime = global.stSunday
    monStartTime = global.stMonday
    tuesStartTime = global.stTuesday
    wedStartTime = global.stWednesday
    thursStartTime = global. stThursday
    friStartTime = global.stFriday
    satStartTime = global. stSaturday


    sunEndTime = global.endSunday
    monEndTime = global.endMonday
    tuesEndTime = global.endTuesday
    wedEndTime = global.endWednesday
    thursEndTime = global.endThursday
    friEndTime = global.endFriday
    satEndTime = global.endSaturday
    

    console.log(sundayBreak);
    console.log(fridayBreak)

    console.log(sunMin);
    console.log(monMin);
    console.log(tuesMin);
    console.log(wedMin);

    console.log(satGap);
    console.log(sunGap);

    console.log(satSlot)
    console.log(sunSlot)
    console.log(monSlot)


    console.log(sunStartTime)
    console.log(monStartTime)
    console.log(tuesStartTime)
    console.log(wedStartTime)
    console.log(thursStartTime)
    console.log(friStartTime)

    console.log(sunEndTime)
    console.log(monEndTime)
    console.log(tuesEndTime)
    console.log(wedEndTime)
    console.log(thursEndTime)
    console.log(friEndTime)



    const data = [];

    if(sunday === true){

      if (!sunStartTime) {
        alert('Please fill Sunday Start time');
        return;
      }
      if (!sunEndTime) {
        alert('Please fill Sunday End time');
        return;
      }
      if (!sunMin) {
        alert('Please fill Sunday Min time');
        return;
      }
      if (!sunGap) {
        alert('Please fill Sunday gap');
        return;
      }
      if (!sunSlot) {
        alert('Please fill Sunday slot');
        return;
      }
      const objSun = {
        "addBreak": sundayBreak,
        "dayOfWeek": "SUNDAY",
        "endTime": sunEndTime,
        "gap": sunGap,
        "minTime": sunMin,
        "numSlots": sunSlot,
        "provider": idDoc,
        "startTime": sunStartTime
    }
    data.push(objSun);
    }
    if(monday == true){
      if (!monStartTime) {
        alert('Please fill Monday Start time');
        return;
      }
      if (!monEndTime) {
        alert('Please fill Monday End time');
        return;
      }
      if (!monMin) {
        alert('Please fill Monday Min time');
        return;
      }
      if (!monGap) {
        alert('Please fill Monday gap');
        return;
      }
      if (!monSlot) {
        alert('Please fill Monday slot');
        return;
      }
      const objMon = {
        "addBreak": mondayBreak,
        "dayOfWeek": "MONDAY",
        "endTime": monEndTime,
        "gap": monGap,
        "minTime": monMin,
        "numSlots": monSlot,
        "provider": idDoc,
        "startTime": monStartTime
    }
    data.push(objMon);    
    }


    if(tuesday == true){
      if (!monStartTime) {
        alert('Please fill Monday Start time');
        return;
      }
      if (!monEndTime) {
        alert('Please fill Monday End time');
        return;
      }
      if (!monMin) {
        alert('Please fill Monday Min time');
        return;
      }
      if (!monGap) {
        alert('Please fill Monday gap');
        return;
      }
      if (!monSlot) {
        alert('Please fill Monday slot');
        return;
      }
      const objTue = {
        "addBreak": tuesdayBreak,
        "dayOfWeek": "TUESDAY",
        "endTime": tuesEndTime,
        "gap": tuesGap,
        "minTime": tuesMin,
        "numSlots": tuesSlot,
        "provider": idDoc,
        "startTime": tuesStartTime
    }
    data.push(objTue);      }
    if(wednesday == true){
      if (!wedStartTime) {
        alert('Please fill Wednesday Start time');
        return;
      }
      if (!wedEndTime) {
        alert('Please fill Wednesday End time');
        return;
      }
      if (!wedMin) {
        alert('Please fill Wednesday Min time');
        return;
      }
      if (!wedGap) {
        alert('Please fill Wednesday gap');
        return;
      }
      if (!wedSlot) {
        alert('Please fill Wednesday slot');
        return;
      }
      const objWed = {
        "addBreak": wednesdayBreak,
        "dayOfWeek": "WEDNESDAY",
        "endTime": wedEndTime,
        "gap": wedGap,
        "minTime": wedMin,
        "numSlots": wedSlot,
        "provider": idDoc,
        "startTime": wedStartTime
    }
    data.push(objWed);  
    }
    if(thursday == true){
      if (!thursStartTime) {
        alert('Please fill Thursday Start time');
        return;
      }
      if (!thursEndTime) {
        alert('Please fill Thursday End time');
        return;
      }
      if (!thursMin) {
        alert('Please fill Thursday Min time');
        return;
      }
      if (!thursGap) {
        alert('Please fill Thursday gap');
        return;
      }
      if (!thursSlot) {
        alert('Please fill Thursday slot');
        return;
      }
      const objThurs = {
        "addBreak": thursdayBreak,
        "dayOfWeek": "THURSDAY",
        "endTime": thursEndTime,
        "gap": thursGap,
        "minTime": thursMin,
        "numSlots": thursSlot,
        "provider": idDoc,
        "startTime": thursStartTime
    }
    data.push(objThurs);      }
    if(friday == true){
      if (!friStartTime) {
        alert('Please fill Friday Start time');
        return;
      }
      if (!friEndTime) {
        alert('Please fill Friday End time');
        return;
      }
      if (!friMin) {
        alert('Please fill Friday Min time');
        return;
      }
      if (!friGap) {
        alert('Please fill Friday gap');
        return;
      }
      if (!friSlot) {
        alert('Please fill Friday slot');
        return;
      }
      const objFri = {
        "addBreak": fridayBreak,
        "dayOfWeek": "FRIDAY",
        "endTime": friEndTime,
        "gap": friGap,
        "minTime": friMin,
        "numSlots": friSlot,
        "provider": idDoc,
        "startTime": friStartTime
    }
    data.push(objFri);      
  }
    if(saturday == true){
      if (!satStartTime) {
        alert('Please fill Saturday Start time');
        return;
      }
      if (!satEndTime) {
        alert('Please fill Saturday End time');
        return;
      }
      if (!satMin) {
        alert('Please fill Saturday Min time');
        return;
      }
      if (!satGap) {
        alert('Please fill Saturday gap');
        return;
      }
      if (!satSlot) {
        alert('Please fill Saturday slot');
        return;
      }
      const objSat = {
        "addBreak": saturdayBreak,
        "dayOfWeek": "SATURDAY",
        "endTime": satEndTime,
        "gap": satGap,
        "minTime": satMin,
        "numSlots": satSlot,
        "provider": idDoc,
        "startTime": satStartTime
    }
    data.push(objSat);      
  }

    console.log(data)

    fetch('http://emr.daldaeagleseye.com/emrappointment/appointment/provider/weekly-schedule', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(
      fetch('http://emr.daldaeagleseye.com/emrappointment/appointment/provider/slot/'+idDoc, {
      method: 'POST', // or 'PUT'
      headers: {
      },
    })
    .then(response => response.json())
    )
    .then(data => {
      console.log('Success:', data);
      Alert.alert(
        'Success!',
        'Slot created successfully!',
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
    });



  }


    return (
      <View style={styles.container}>
          <Header name="Time Slot Management" class= ""/>
          <UnitClerkHeader/>

          <View style = {[styles.cardView91, {marginTop:10}]}>
          <View style = {{marginBottom:0}}>
              <View style = {{alignItems: 'center'}}>

              <Text style = {styles.mediumText}>Create new shedule request</Text>
              <View style = {{flexDirection:'row', marginTop:10}}>

               <DateSelect name = "Select Start Date" dateType = "startDate"/>
               <DateSelect name = "Select End Date" dateType = "endDate"/>




           <View style= {{marginRight: 30, width: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft:10}}>
                          <CheckBox
          disabled={false}
          value={toggleCheckBox1}
          onValueChange={(newValue) => setToggleCheckBox1(newValue)}
          tintColor="#FFF"
          onTintColor="black"
        /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Recurring</Text> 
            </View>
              </View>

            <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
              <View style={{width: '14%',alignItems: 'flex-start'}}>
                    <Text style = {[styles.smallText,{}]}>     Day</Text>
              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <Text style = {[styles.smallText,{}]}>Start Time</Text>

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <Text style = {[styles.smallText,{}]}>Min Time</Text>

            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <Text style = {[styles.smallText,{}]}>Gap</Text>

            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <Text style = {[styles.smallText,{}]}>End Time</Text>

            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <Text style = {[styles.smallText,{}]}>Slot</Text>

            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <Text style = {[styles.smallText,{}]}>Add Break</Text>

            </View>

        </View>



        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
              <CheckBox
          disabled={false}
          value={sunday}
          onValueChange={(sun) => setSunday(sun)}
          tintColor="#FFF"
          onTintColor="black"
        /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Sunday</Text> 
              </View>


                <View style={{width: '14%',alignItems: 'center'}}>
                  <TimeSelect  timeType = "stSunday"/>

                </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    keyboardType='numeric'
                    onChangeText={ (sunMin) => setSunMin(sunMin)}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (sunGap) => setSunGap(sunGap)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <TimeSelect  timeType = "endSunday"/>

            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (sunSlot) => setSunSlot(sunSlot)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <CheckBox
          disabled={false}
          value={sundayBreak}
          onValueChange={(sundayBreak) => setSundayBreak(sundayBreak)}
          tintColor="#FFF"
          onTintColor="black"
        />
            </View>

        </View>



        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
              <CheckBox
                disabled={false}
                value={monday}
                onValueChange={(newValue) => setMonday(newValue)}
                tintColor="#FFF"
                onTintColor="black"
        /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Monday</Text> 
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <TimeSelect  timeType = "stMonday"/>


              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (monMin) => setMonMin(monMin)}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (monGap) => setMonGap(monGap)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <TimeSelect  timeType = "endMonday"/>

            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={[styles.inputViewHeight40,]}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (monSlot) => setMonSlot(monSlot)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <CheckBox
              disabled={false}
              value={mondayBreak}
              onValueChange={(mondayBreak) => setMondayBreak(mondayBreak)}
              tintColor="#FFF"
              onTintColor="black"
        />
            </View>

        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
              <CheckBox
                disabled={false}
                value={tuesday}
                onValueChange={(tue) => setTuesday(tue)}
                tintColor="#FFF"
                onTintColor="black"
        /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Tuesday</Text> 
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <TimeSelect  timeType = "stTuesday"/>


              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (tuesMin) => setTuesMin(tuesMin)}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (tuesGap) => setTuesGap(tuesGap)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <TimeSelect  timeType = "endTuesday"/>

            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (tuesSlot) => setTuesSlot(tuesSlot)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <CheckBox
          disabled={false}
          value={tuesdayBreak}
          onValueChange={(tuesdayBreak) => setTuesdayBreak(tuesdayBreak)}
          tintColor="#FFF"
          onTintColor="black"
        />
            </View>

        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
              <CheckBox
          disabled={false}
          value={wednesday}
          onValueChange={(wed) => setWednesday(wed)}
          tintColor="#FFF"
          onTintColor="black"
        /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Wednesday</Text> 
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>



              <TimeSelect  timeType = "stWednesday"/>


              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (wedMin) => setWedMin(wedMin)}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (wedGap) => setWedGap(wedGap)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <TimeSelect  timeType = "endWednesday"/>

            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (wedSlot) => setWedSlot(wedSlot)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <CheckBox
          disabled={false}
          value={wednesdayBreak}
          onValueChange={(wednesdayBreak) => setWednesdayBreak(wednesdayBreak)}
          tintColor="#FFF"
          onTintColor="black"
        />
            </View>
        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
              <CheckBox
                disabled={false}
                value={thursday}
                onValueChange={(thurs) => setThursday(thurs)}
                tintColor="#FFF"
                onTintColor="black"
        /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Thursday</Text> 
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <TimeSelect  timeType = "stThursday"/>
  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (thursMin) => setThurMin(thursMin)}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (thursGap) => setThursGap(thursGap)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <TimeSelect  timeType = "endThursday"/>

            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (thursSlot) => setThursSlot(thursSlot)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <CheckBox
          disabled={false}
          value={thursdayBreak}
          onValueChange={(thursdayBreak) => setThursdayBreak(thursdayBreak)}
          tintColor="#FFF"
          onTintColor="black"
        />
            </View>
        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
              <CheckBox
                disabled={false}
                value={friday}
                onValueChange={(fri) => setFriday(fri)}
                tintColor="#FFF"
                onTintColor="black"
        /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Friday</Text> 
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <TimeSelect  timeType = "stFriday"/>


              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (friMin) => setFriMin(friMin)}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (friGap) => setFriGap(friGap)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <TimeSelect  timeType = "endFriday"/>

            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (friSlot) => setFriSlot(friSlot)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <CheckBox
          disabled={false}
          value={fridayBreak}
          onValueChange={(fridayBreak) => setFridayBreak(fridayBreak)}
          tintColor="#FFF"
          onTintColor="black"
        />
            </View>
           
        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
              <CheckBox
                disabled={false}
                value={saturday}
                onValueChange={(sat) => setSaturday(sat)}
                tintColor="#FFF"
                onTintColor="black"
        /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Saturday</Text> 
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <TimeSelect  timeType = "stSaturday"/>
 

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (satMin) => setSatMin(satMin)}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                                keyboardType='numeric'
                    onChangeText={ (satGap) => setSatGap(satGap)} ///all gaps 
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <TimeSelect  timeType = "endSaturday"/>

            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    keyboardType='numeric'
                    onChangeText={ (satSlot) => setSatSlot(satSlot)} ///all gaps 

                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <CheckBox
                  disabled={false}
                  value={saturdayBreak}
                  onValueChange={(saturdayBreak) => setSaturdayBreak(saturdayBreak)}
                  tintColor="#FFF"
                  onTintColor="black"
                />
            </View>

        </View>
        <View style={{width:"30%",alignSelf:'flex-end',alignItems:'flex-end',justifyContent:'flex-end',flexDirection:'row'}} >


<TouchableOpacity style={[styles.buttonForm,{marginRight:30,marginTop:15}]}
  onPress={handleCreateSlot}    > 
   <Text style={styles.Button_text_styling}>
   SAVE </Text>
 </TouchableOpacity>
 <TouchableOpacity style={[styles.buttonForm,{marginRight:30,marginTop:15}]}
   onPress={() =>navigation.navigate("HomeScreen")}
   > 
   <Text style={styles.Button_text_styling}>
   CLOSE </Text>
 </TouchableOpacity>
 </View>
        </View>

        </View>
          </View>

      </View>
    )
  
}

export default CreateSlot;