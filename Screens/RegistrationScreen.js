import {SafeAreaView,ScrollView, Text,StatusBar, View, TouchableOpacity,TextInput,Alert,Image} from 'react-native';
import React, {Component,Fragment,useEffect,useState} from 'react';
import { Picker } from "@react-native-picker/picker";
import { openDatabase } from 'react-native-sqlite-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CheckBox from 'react-native-check-box';
import Example from './Example';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles/CompleteStyling';

import axios from 'axios';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';

var db = openDatabase({ name: 'patient.db' });

const RegistrationScreen = ({ navigation }) => {
        
  
 let id
//  console.log(id,"id")
  let [MRNumber, setMRNumber] = useState("");
  let statusCode
    let [CNIC_Number, setCNIC_Number] = useState('');
    let [FirstName, setFirstName] = useState('');
    let [MiddleName, setMiddleName] = useState('');
    let [LastName, setLastName] = useState('');
    let [Phone_Number, setPhone_Number] = useState('');
    let [Alternate_phone_Number, setAlternate_phone_Number] = useState('');
    let [Email, setEmail] = useState('');
    let[HomeAddress,setHomeAddress] = useState('')
    let [Age, setAge] = useState('');
    let [CityTown, setCityTown] = useState('');
    let [Province, setProvince] = useState('');
    let [Visit, setVisit] = useState('ClinicalVisit');
    let [MaritalStatus, setMaritalStatus] = useState('Unmarried');
    let [checked, setChecked] = useState(false);
    let [gender, setgender] = useState('Male');
    let [Qrcode, setQrcode] = useState('');
    let [date, setDate] = useState('');
    let [sehatsafarnumber, setsehatsafarnumber] = useState('');

    
    let [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    console.log(date,'date');
    // console.log(getDate(),'kill')
  console.log(MRNumber, 'hello')
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setDate(date);
      hideDatePicker();
    };
  
    const getDate = () => {
      let tempDate = date.toString().split(' ');
      return date !== ''
        ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
        : '';
    };
    const getDate2 = () => {
      let tempDate = date.toString().split(' ');
      return date !== ''
        ? ` ${tempDate[1]} ${tempDate[2]} ${tempDate[4]}  `
        : '';
    };

  
    console.log(getDate2(),'king');
    const uuid = new Date();
    console.log(uuid,"hello")

    function epoch (date) {
      return Date.parse(date)
    }
    
    const dateToday = new Date() 
    const timestamp = epoch(getDate2())
    
    const epochlengthconverter = () => {
      let tempDate = timestamp.toString().split('');
      return date !== ''
        ? ` ${tempDate[0]}${tempDate[1]}${tempDate[8]}${tempDate[9]}${tempDate[10]}${tempDate[3]}${tempDate[6]}`
        : '';
    };
    let epochlength=epochlengthconverter()
    console.log(epochlengthconverter(),'shafaysss')
  console.log(epochlength[2],'lol')
    // console.log(array1[1],'khurram don')
    
    console.log(timestamp) // => 1591606075000
   
   
    let register_user = () => {
      // if (!MRNumber) {
      //   alert('Please fill MRNumber');
      //   return;
      // }
      // if (MRNumber.trim().length < 7 ||MRNumber.trim().length > 7 ) {
      //   alert('MRNumber must be of 7 characters');
      //    return;
      //   }

      // let regMR=/^[MR]{2}[0-9]{5}$/;
      // if (regMR.test(MRNumber.toString())){
      // }
      // else{
      //   alert('Enter Mr Number Acc to Our Hints');
      //   return;
      // }
    


      if (!CNIC_Number) {
        alert('Enter CNIC Number');
        return;
      }

      if (CNIC_Number.trim().length < 13 || CNIC_Number.trim().length > 13) {
        alert('CNIC must be of 13 digits ');
         return;
       }

       let regCnic=/^[0-9]{13}$/;
       if (regCnic.test(CNIC_Number.toString())){
       }
       else{
         alert('Enter CNIC acc to hint');
         return;
       }
  
      if (!FirstName) {
        alert('Enter First Name');
        return;
      }

      if (FirstName.trim().length < 3) {
        alert('First Name must be minimum of 3 characters');
         return;
        }

      let regname=/^[A-Za-z]+(([,.] |[ '-])[A-Za-z]+)*([.,'-]?)$/;
      if (regname.test(FirstName.toString())){
      }
      else{
        alert('Name Should not Include Special characters');
        return;
      }

      // if (!MiddleName) {
      //   alert('Please fill Middle Name');
      //   return;
      // }
      // if (MiddleName.trim().length < 3) {
      //   alert('Middle Name must be minimum 3 characters');
      //    return;
      //  }
      //  if (regname.test(MiddleName.toString())){
      // }
      // else{
      //   alert('Name Should not Include Special characters');
      //   return;
      // }
      if (!LastName) {
        alert('Enter Last Name');
        return;
      }
      if (LastName.trim().length < 3) {
        alert('Last Name must be minimum 3 of characters');
         return;
       }

       if (regname.test(LastName.toString())){
       }
      else{
        alert('Name Should not Include Special characters');
        return;
      }
      if (!Phone_Number) {
        alert('Enter Phone Number');
        return;
      }

      if (Phone_Number.trim().length < 11 ||Phone_Number.trim().length > 11 ) {
        alert('Enter Phone Number acc to hint');
         return;
       }
         
      let regNum=/^[0-9]{11}$/;
      if (regNum.test(Phone_Number.toString())){

      }
      else{
        alert('Enter Number Acc to our Hint')
        return;
      }

      if (!Alternate_phone_Number) {
        alert('Enter Alternate_phone_Number');
        return;
      }
      if (Alternate_phone_Number.trim().length < 11 ||Alternate_phone_Number.trim().length > 11) {
        alert('Enter Phone Number acc to hint');
         return;
       }
       if (regNum.test(Phone_Number.toString())){

      }
      else{
        alert('Enter Number Acc to our Hint')
        return;
      }
      if(Phone_Number==Alternate_phone_Number){
        alert('Both Numbers Cannot be Same');
        return;
      }
      if (!Email) {
        alert('Enter Email');
        return;
      }

      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(Email) === false) {
      alert('Enter Valid Email Address');
      return;
      }
  

    
      if (!Age) {
        alert('Enter Age');
        return;
      }

       let regAge=/^100|[1-9]?\d$/
       if (regAge.test(Age.toString())){

       }
       else{
         alert('Enter Valid Age')
         return;
       }

      if (!CityTown) {
        alert('Enter CityTown');
        return;
      }
      if (!Province) {
        alert('Enter Province');
        return;
      }
      if (!gender) {
        alert('Enter Gender');
        return;
      }

      const data = 
        {
          "addresses": [
              {
                  "address1": HomeAddress,
                  "cityVillage": CityTown,
                  "country":Province
              }
          ],
          "age": Age,
          "attributes": [
              {
                  "attributeType": "alternate-contact-patient",
                  "value":Alternate_phone_Number
              },
              {
                  "attributeType": "cnic-patient",
                  "value": CNIC_Number
              },
              {
                  "attributeType": "email-patient",
                  "value": Email
              },
              {
                  "attributeType": "family-number-patient",
                  "value": timestamp
              },
              {
                  "attributeType": "mrnum-patient",
                  "value": epochlengthconverter()
              },
              {
                  "attributeType": "primary-contact-patient",
                  "value": Phone_Number
              },
              {
                  "attributeType": "qrcode-patient",
                  "value": timestamp
              },
              {
                  "attributeType": "sehat-safar-number-patient",
                  "value": sehatsafarnumber
              },
              {
                  "attributeType": "types-of-visits-patient",
                  "value":Visit
              }
          ],
          "birthdate": date,
          "gender": gender,
          "names": [
              {
                  "familyName": LastName,
                  "givenName": FirstName,
                  "middleName": MiddleName
              }
          ],
          "uuid": timestamp
      }
      fetch('http://emr.daldaeagleseye.com/emrappointment/patient', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response =>{ 
         statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data],console.log(statusCode));
      })
      .then(data => {
        console.log('Success:', data);
        // console.log(data.status,'data status')
        // console.log(response.status,'response status')
        if (statusCode==200) {
          Alert.alert(
            'Success',
            'Added Successfully',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('HomeScreen'),
              },
            ],
            { cancelable: false }
          );
        } else alert('This Cnic is already registered before');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
      
    };
  
  
  
  



    return (
      <View style={{backgroundColor:'#3FB39B'}}  >
      <SafeAreaView >
 
      <View > 
      <Header name="Patient Registration" class= "" />
      <UnitClerkHeader/>
</View>

      <View style={[styles.containerForRegistration]}>
  
      <View style={[styles.containerWithinScrollViewforForm]}>


          <ScrollView> 
    <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>MR Number</Text>
          <TextInput style={styles.Edittext}
       
          value={epochlengthconverter()}
          color="black"
          editable={false}
          selectTextOnFocus={false}
          // maxLength={7}
          placeholder="Auto Generate" 
          placeholderTextColor="#30A28C"
          //  onChangeText={timestamp}
              />
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Family Number</Text>
          <TextInput style={styles.Edittext}
            value={epochlengthconverter()}
            color="black"
            editable={false}
            selectTextOnFocus={false}
            placeholder="Auto Generate" 
            placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({FamilyNumber:text})} />
        </View>
      </View>
    

   

      <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Sehat Safar Number</Text>
          <TextInput  
              style={styles.Edittext}
         
              placeholder="Enter Sehat Safar Number" 
              placeholderTextColor="#30A28C"
              onChangeText={(sehatsafarnumber) => setsehatsafarnumber(sehatsafarnumber)}
              />
               </View>
         

               <View style={styles.inputWrap}>
           <Text style={styles.EdittextHeading}>CNIC Number </Text>
            <TextInput  
              style={styles.Edittext}
              keyboardType = "number-pad"
              placeholderTextColor="#30A28C"
              placeholder="XXXXXXXXXXXXX"
              maxLength={13}
              onChangeText={(CNIC_Number) => setCNIC_Number(CNIC_Number)}
              />
                  </View>
                  </View>


   <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
             <Text style={styles.EdittextHeading}>First Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder=" First Name" 
              placeholderTextColor="#30A28C"
              onChangeText={(FirstName) => setFirstName(FirstName)}
            />
                 </View>

 



                 <View style={styles.inputWrap}>
             <Text style={styles.EdittextHeading}>Middle Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Middle Name"
              placeholderTextColor="#30A28C" 
              onChangeText={ (MiddleName) => setMiddleName(MiddleName)}/>
         </View>

         <View style={styles.inputWrap}>
            <Text style={styles.EdittextHeading}>Last Name </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Last Name" 
              placeholderTextColor="#30A28C"
              onChangeText={ (LastName) => setLastName(LastName)}/>
                     </View>
                     </View>

                     
   <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
      <TouchableOpacity  onPress={showDatePicker}>
             <Text style={styles.EdittextHeading}>DOB</Text>
             <View>
             <TextInput
            style={styles.Edittext}
            value={getDate()}
            editable={false} 
            selectTextOnFocus={false}
            color="#000000"
            placeholderTextColor="#30A28C"
            placeholder="Date"/>

<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
     
              </View>
              </TouchableOpacity>
           
</View>

<View style={styles.inputWrap}>
                    <Text style={styles.EdittextHeading}>Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              keyboardType = 'numeric'
              placeholder="03XXXXXXXXX" 
              placeholderTextColor="#30A28C"
              maxLength={11}
              onChangeText={ (Phone_Number) => setPhone_Number(Phone_Number)}/>
              </View>


<View style={styles.inputWrap}>
                    <Text style={styles.EdittextHeading}>Alternate Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              keyboardType = 'numeric'
              placeholder="03XXXXXXXXX" 
              placeholderTextColor="#30A28C"
              maxLength={11}
              onChangeText={ (Alternate_phone_Number) => setAlternate_phone_Number(Alternate_phone_Number)}/>
                  </View>
                  </View>


                                     
   <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>

                    <Text style={styles.EdittextHeading}>Email</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Email" 
              placeholderTextColor="#30A28C"
              value={Email}
             autoCorrect={false}
             autoCapitalize="none"
             onChangeText={ (Email) => setEmail(Email)}/>

            
          </View>
           

          <View style={styles.inputWrap}>
           <Text style={styles.EdittextHeading}>Age</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Age" 
              keyboardType = 'numeric'
              maxLength={3}
              placeholderTextColor="#30A28C"
              onChangeText={ (Age) => setAge(Age)}/>
            </View>
            </View>
            

            <View style={styles.Side_by_side_EditText}>
            <View style={styles.inputWrap}>
      <Text style={styles.EdittextHeading}>Gender</Text>
<View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
                 
          <Picker  
           selectedValue={gender}
           placeholderTextColor="#30A28C"
           onValueChange={(itemValue, itemIndex) => setgender(itemValue)}>
  
           <Picker.Item color='#30A28C' label="Male" value="Male" />
           <Picker.Item color='#30A28C' label="Female " value="Female" />
           <Picker.Item color='#30A28C' label="Others" value="Others" />
      
        

           </Picker>  

       
     
     </View>
     </View>
      <View style={styles.inputWrap}>
                  <Text style={styles.EdittextHeading}>City Town</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="City Town" 
              placeholderTextColor="#30A28C"
              onChangeText={ (CityTown) => setCityTown(CityTown)}/>
</View>
<View style={styles.inputWrap}>
<Text style={styles.EdittextHeading}>Province</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Province"    
              placeholderTextColor="#30A28C"
              onChangeText={ (Province) => setProvince(Province)}/>


</View>

            </View>



            <Text style={styles.EdittextHeading}>HomeAddress</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Address" 
              placeholderTextColor="#30A28C"
              onChangeText={ (HomeAddress) => setHomeAddress(HomeAddress)}/>


              
            <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
      <Text style={styles.EdittextHeading}>Marital Status</Text>
<View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
                 

           
           <Picker  
           selectedValue={MaritalStatus}
           placeholderTextColor="#30A28C"
            onValueChange={(itemValue, itemIndex) => setMaritalStatus(itemValue)} 
            
            >
  
           <Picker.Item color='#30A28C' label="Married" value="Married" />
           <Picker.Item color='#30A28C' label="Unmarried" value="Unmarried" />
           <Picker.Item color='#30A28C' label="Divorced" value="Divorced" />
           <Picker.Item  color='#30A28C' label="Widow" value="Widow" />
        

           </Picker>  

       
     
     </View>
     </View>


<View style={styles.inputWrap}>
      <Text style={styles.EdittextHeading}>Types Of Visit</Text>
<View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
                 
          <Picker  
           selectedValue={Visit}
           placeholderTextColor="#30A28C"
           onValueChange={(itemValue, itemIndex) => setVisit(itemValue)}>
  
           <Picker.Item color='#30A28C' label="Clinical Visit" value="ClinicalVisit" />
           <Picker.Item color='#30A28C' label="Educational Visit" value="EducationalVisit" />
           <Picker.Item color='#30A28C' label="Others" value="Others" />
      
        

           </Picker>  

       
     
     </View>
     </View>
    
     </View>

     <View style={{flexDirection:'row',marginTop:30}}>

<View style={{width:"50%",flexDirection:'row',alignSelf:'center',alignItems:'center',marginLeft:27}}>


           {/* <CheckBox

    
       
style={{marginTop:3}}
onChangeText={ (checked) => setChecked(checked)}
isChecked={checked}
RightText={"Remember Me"}

/> */}

           {/* <Text style= {[{fontFamily:"Montserrat-Bold",justifyContent:'center',color:"#30A28C",fontSize:15}]}>Please Verify above Information is Correct</Text> */}
           </View>
           <View style={{width:"50%",alignSelf:'flex-end',alignItems:'flex-end',justifyContent:'flex-end'}} >


<TouchableOpacity style={[styles.buttonForm,{marginBottom:10}]}
 onPress={register_user}
 > 
 <Text style={styles.Button_text_styling}>
 SUBMIT </Text>
</TouchableOpacity>
</View>



</View>
</ScrollView>         

            </View> 
            


</View>





      </SafeAreaView>
     
      </View>
      
    );
   };





   export default RegistrationScreen;
