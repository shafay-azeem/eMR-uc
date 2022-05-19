import React, { useCallback, useState } from "react";
import { Button, View , Text, Touchable, TouchableOpacity, Image} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from './Styles/CompleteStyling';


import { COLORS } from '../styles/colors';
// import { CALLBACK_TYPE } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";


const DateSelect = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const date = ""
  const [startDate, setStartDate] = useState(props.name);
  const [endDate, setEndDate] = useState(props.name);
  const [date, setDate] = useState(props.name);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmStartDate = (date) => {
    console.warn("A date has been picked: ", date);
    console.log(date)
    let tempDate = date.toString().split(' ');
    console.log(tempDate)
    let month = "";
    if(tempDate[1] == "Apr"){
      month = "01"
    }
    if(tempDate[1] == "Feb"){
      month = "02"
    }
    if(tempDate[1] == "Mar"){
      month = "03"
    }
    if(tempDate[1] == "Apr"){
      month = "04"
    }
    if(tempDate[1] == "May"){
      month = "05"
    }
    if(tempDate[1] == "Jun"){
      month = "06"
    }
    if(tempDate[1] == "Jul"){
      month = "07"
    }
    if(tempDate[1] == "Aug"){
      month = "08"
    }
    if(tempDate[1] == "Sep"){
      month = "09"
    }
    if(tempDate[1] == "Oct"){
      month = "10"
    }
    if(tempDate[1] == "Nov"){
      month = "11"
    }
    if(tempDate[1] == "Dec"){
      month = "12"
    }
    console.log(month)
    const tempDate2 = tempDate[2]+ "-"+month+"-"+tempDate[3];
    console.log(tempDate2)
      setDate(tempDate2)
      console.log("Selected: ", date)
      if(props.dateType == "startDate"){
        console.log("reached in start date if-block: ")
        global.startDate = tempDate2;
        console.log("Start Date from Child: ",global.startDate)
      
      }
      if(props.dateType == "endDate"){
        console.log("reached in End date if-block: ")
        global.endDate = tempDate2;
        console.log("End Date from Child: ",global.endDate)
      
      }
      hideDatePicker();


    

  };

  return (
    <View>
      <TouchableOpacity
       style = {{borderWidth: 1.5, borderColor: '#3FB39B', borderRadius: 25, marginRight: 30, width: 190, height: 40, justifyContent: 'center',padding:10, alignItems: 'flex-start', }}
       title="Show Date Picker" onPress={showDatePicker} >
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        format = "DD-MM-YYYY"
        onConfirm={handleConfirmStartDate}
        onCancel={hideDatePicker}
      />
       <View style = {[styles.roundIconSmall,{justifyContent: 'center',  width: '100%', alignItems: 'center', marginRight: 10, flexDirection: 'row'}]}>
               <Text style = {[styles.smallText, {color: '#3FB39B'},{marginRight:10}]}>{date}</Text>
                <Image
              style={[styles.detailLogo, {alignSelf: 'flex-end'},{width: 30, height:30},{marginBottom:5, justifyContent: 'center'}]}
              source={require('../images/calendar.png')}
            />
        </View>   

      </TouchableOpacity>
   </View>
  );
};

export default DateSelect;