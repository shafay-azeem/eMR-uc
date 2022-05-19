import React, { useCallback, useState } from "react";
import { Button, View , Text, Touchable, TouchableOpacity, Image} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from './Styles/CompleteStyling';


import { COLORS } from '../styles/colors';
// import { CALLBACK_TYPE } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";


const TimeSelect = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState("HH:mm");


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmTime = (date) => {
    console.warn("A time has been picked: ", date);
    console.log(date)
    let AmOrPM = "PM"

    let tempDate = date.toString().split(' ');
    console.log(tempDate)

    const tempTime = tempDate[4];
        let arr = tempTime.split(':')
        let hour = parseInt(arr[0]);
        let min = (arr[1]);
        let sec = parseInt(arr[2]) + " sec";
        console.log("miin leng");
        console.log("hours min sec: ", hour,min,sec)
        console.log(tempTime);
        let hours = hour;
        if(hours < 12){
            AmOrPM = "AM"
        }
        if(hours == 12){
            AmOrPM = "PM"
        }
        if(hours > 12){
            hours = hours - 12;
            AmOrPM = "PM"
        }
        if(hours == 0){
            hours = 12;
            AmOrPM = "AM"
        }
    
    let finalTime = hours + ":" + min  + AmOrPM
    setTime(finalTime)


     if(props.timeType == "stSunday"){
        global.stSunday = finalTime
        console.log("Sunday Start Time block (child): " + global.stSunday);

    }
    if(props.timeType == "stMonday"){
        global.stMonday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.stMonday);

    }
    if(props.timeType == "stTuesday"){
        global.stTuesday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.stTuesday);

    }
    if(props.timeType == "stWednesday"){
        global.stWednesday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.stWednesday);
    }
    if(props.timeType == "stThursday"){
        global.stThursday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.stThursday);
    }
    if(props.timeType == "stFriday"){
        global.stFriday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.stFriday);
    }
    if(props.timeType == "stSaturday"){
        global.stSaturday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.stSaturday);
    }





    if(props.timeType == "endSunday"){
        global.endSunday = finalTime
        console.log("Sunday Start Time block (child): " + global.endSunday);

    }
    if(props.timeType == "endMonday"){
        global.endMonday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.endMonday);

    }
    if(props.timeType == "endTuesday"){
        global.endTuesday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.endTuesday);

    }
    if(props.timeType == "endWednesday"){
        global.endWednesday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.endWednesday);
    }
    if(props.timeType == "endThursday"){
        global.endThursday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.endThursday);
    }
    if(props.timeType == "endFriday"){
        global.endFriday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.endFriday);
    }
    if(props.timeType == "endSaturday"){
        global.endSaturday = finalTime
        console.log( props.timeType +"Start Time block (child): " + global.endSaturday);
    }
    
    
    
    
    console.log("reached to the ends")
    hideDatePicker();


    

  };

  return (
    <View>
    <TouchableOpacity
     style = {{borderWidth: 1.5, borderColor:'#3FB39B', borderRadius: 25, width: '90%', height: 45, justifyContent: 'center',padding:10, alignItems: 'flex-start', alignSelf: 'center' }}
     title="Show Date Picker" onPress={showDatePicker} >
    
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="time"
      format="HH:mm"
      onConfirm={handleConfirmTime}
      onCancel={hideDatePicker}
    />
     <View style = {[styles.roundIconSmall,{justifyContent: 'flex-end',  width: '100%', alignItems: 'center', marginRight: 10, flexDirection: 'row'}]}>
             <Text style = {[styles.smallText, {color: '#3FB39B'},{marginRight:10}]}>{time}</Text>
              <Image
            style={[styles.detailLogo, {alignSelf: 'flex-end'},{width: 30, height:30},{marginBottom:5}]}
            source={require('../images/time.png')}
          />
      </View>   

    </TouchableOpacity>
 </View>
  );
};

export default TimeSelect;