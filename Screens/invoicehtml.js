import React, {useState }from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    PermissionsAndroid,
    Platform,
  } from 'react-native';
import { Row } from 'react-native-table-component';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFetchBlob from 'rn-fetch-blob'
import FileViewer from "react-native-file-viewer";

let kill="ganji"


const invoicehtml =({route}) => {
  const { width } = useWindowDimensions();
  
  const {patient} = route.params;
//   const {schedule} = route.params;
  const navigation = useNavigation();   
  const { slotDetails } = route.params;
  const { doctorInfo } = route.params;
  const { appDetails } = route.params;

console.log(appDetails,'pp')
console.log(doctorInfo,'pp')
console.log(patient.firstName,'pp')
//   console.log(patient ,'a',schedule, 'b',slotDetails,'c',doctorInfo,'d',appDetails,'e')
  let [MaritalStatus, setMaritalStatus] = useState('Unmarried');
  const [filePath, setFilePath] = useState('');
 
  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };
  const createPDF = async () => {

    console.log('helloo');

    const today = new Date();
    const date = today.getDate() + "-" + Number(today.getMonth()) +1+ "-" + today.getFullYear()
    const getCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      if(month  == "1"){
        month = "Jan"
      }
      if(month  == "2"){
        month = "Feb"
      }
      if(month  == "3"){
        month = "Mar"
      }
      if(month  == "4"){
        month = "Apr"
      }
      if(month  == "5"){
        month = "May"
      }
      if(month  == "6"){
        month = "June"
      }
      if(month  == "7"){
        month = "July"
      }
      if(month  == "8"){
        month = "Aug"
      }
      if(month  == "9"){
        month = "Sep"
      }
      if(month  == "10"){
        month = "Oct"
      }
      if(month  == "11"){
        month = "Nov"
      }
      if(month  == "12"){
        month = "Dec"
      }
      return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
}

 




const getCurrentTime = () => {
  let today = new Date();
  let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
  let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
  return hours + + minutes ;
}  

let day=getCurrentDate()
let time=getCurrentTime()
console.log(day,'day')
console.log(time,'time')


    if (await isPermitted()) {
        let options = {
          //Content to print
          html:
            `<html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Invoice Slip</title>
            </head>
            
            <body>
                <div class="Invoice-Slip" style="width:40rem; margin: auto;width: 50%;">
                <h2 style="text-align: center;">Academic Family Medicine Center</h2>
                <h2 style="text-align: center;">Patient Invoice Slip</h2>
                   
                
            
                    <div style="text-align:center;border: 1px solid black;border-radius: 10px;">
                        <h3 >Patient Information</h3>
                    </div>
            
                    <table>
                        <tr>
                            <th style="text-align: start;">Patient Record Number</th>
                            <td>${patient.mrnum}</td>
                        </tr>
                        <tr>
                            <th style="text-align: start;">Patient Name</th>
                            <td>${patient.firstName}${" "}${patient.lastName}</td>
                        </tr>
                        <tr>
                            <th style="text-align: start;">Gender</th>
                            <td>${patient.gender}</td>
                            <th>Age</th>
                            <td>${patient.age} Years</td>
                        </tr>
                   
                        <tr>
                            <th style="text-align: start;">Patient Contact Number</th>
                            <td>${patient.primaryContact}</td>
                        </tr>
                    </table>
            
            
                    <div style="text-align:center;border: 1px solid black;border-radius: 10px;">
                        <h3>Physician Information</h3>
                    </div>
            
                    <table>
                        <tr>
                            <th style="text-align: start;">Physical Name</th>
                            <td>${doctorInfo.fullName}</td>
                        </tr>
                        <tr>
                            <th style="text-align: start;">Speciality</th>
                            <td>Family Medicine</td>
                        </tr>
                        <tr>
                            <th style="text-align: start;">Fee</th>
                            <td>${doctorInfo.initialFees}</td>
                        </tr>
                        <tr>
                            <th style="text-align: start;">Phone No</th>
                            <td>${doctorInfo.phoneNum}</td>
                        </tr>
                        <tr>
                            <th style="text-align: start;">Location</th>
                            <td>${doctorInfo.location}</td>
                        </tr>
                    </table>
            
            
                    <div style="text-align:center;border: 1px solid black;border-radius: 10px;">
                        <h3>Patient Appointment Information</h3>
                    </div>
            
                    <table>
                        <tr>
                            <th style="text-align: start;">Patient Name</th>
                            <td>${patient.firstName}${" "}${patient.lastName}</td>
                        </tr>
                        <tr>
                            <th style="text-align: start;">Patient Id</th>
                            <td>${patient.patientId}</td>
                        </tr>
            
                        <tr>
                            <th style="text-align: start;">Invoice ID</th>
                            <td>${appDetails.invoiceID}</td>
                        </tr>
                        <tr>
                            <th style="text-align: start;">Appointment Date/Time</th>
                            <td>${slotDetails.dayname}${"-"} ${appDetails.date}${"-"}${slotDetails.startTime}</td>
                        </tr>
                        <tr>
                            <th style="text-align: start;">Consultation Payment</th>
                            <td>${doctorInfo.initialFees}</td>
                        </tr>
                        <tr>
                            <th style="text-align: start;">Issued By</th>
                            <td>AFMC</td>
                        </tr>
                    </table>
            
                </div>
            </body>
            
            </html>
        
           `,
          //File Name
          fileName: 'test',
          //File directory
          directory: 'Download',
          base64: true
        };
        

        console.log('hello == 1')
        let file = await RNHTMLtoPDF.convert(options);
        console.log(file.filePath);
        setFilePath(file.filePah);
     
    

        let filePath1 = RNFetchBlob.fs.dirs.DownloadDir + '/'+day+' ' +time+ '.pdf';
        console.log('hello == 2 '+filePath1);

        try {

           RNFetchBlob.fs.writeFile(filePath1, file.base64, 'base64')
            .then(response => {
                console.log('Success Log:: ', response,filePath1);
            })
            .catch(errors => {
                console.log(" Error Log:: ", errors);
            })

            }
            catch(err) {
                console.log('hello =---= 3 '+err)
            }  
           console.log(filePath1,'filepath122')
            FileViewer.open(filePath1)
            .then(() => {
            console.log('success')
            // success
            })
            .catch(error => {
            // error
            console.log('Error viewing document', error)
            })
  
     
          }
        };

 

  const source = {

    html: `
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice Slip</title>
    </head>
    
    <body>
        <div class="Invoice-Slip" style="width:40rem; margin: auto;width: 50%;">
        <h2 style="text-align: center;">Academic Family Medicine Center</h2>
        <h2 style="text-align: center;">Patient Invoice Slip</h2>
           
        
    
            <div style="text-align:center;border: 1px solid black;border-radius: 10px;">
                <h3 >Patient Information</h3>
            </div>
    
            <table>
                <tr>
                    <th style="text-align: start;">Patient Record Number</th>
                    <td>${patient.mrnum}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Patient Name</th>
                    <td>${patient.firstName}${" "}${patient.lastName}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Gender</th>
                    <td>${patient.gender}</td>
                    <th>Age</th>
                    <td>${patient.age} Years</td>
                </tr>
         
                <tr>
                    <th style="text-align: start;">Patient Contact Number</th>
                    <td>${patient.primaryContact}</td>
                </tr>
            </table>
    
    
            <div style="text-align:center;border: 1px solid black;border-radius: 10px;">
                <h3>Physician Information</h3>
            </div>
    
            <table>
                <tr>
                    <th style="text-align: start;">Physical Name</th>
                    <td>${doctorInfo.fullName}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Speciality</th>
                    <td>Family Medicine</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Fee</th>
                    <td>${doctorInfo.initialFees}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Phone No</th>
                    <td>${doctorInfo.phoneNum}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Location</th>
                    <td>${doctorInfo.location}</td>
                </tr>
            </table>
    
    
            <div style="text-align:center;border: 1px solid black;border-radius: 10px;">
                <h3>Patient Appointment Information</h3>
            </div>
    
            <table>
                <tr>
                    <th style="text-align: start;">Patient Name</th>
                    <td>${patient.firstName}${" "}${patient.lastName}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Patient Id</th>
                    <td>${patient.patientId}</td>
                </tr>
    
                <tr>
                    <th style="text-align: start;">Invoice ID</th>
                    <td>${appDetails.invoiceID}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Appointment Date/Time</th>
                    <td>${slotDetails.dayname}${"-"} ${appDetails.date}${"-"}${slotDetails.startTime}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Consultation Payment</th>
                    <td>${doctorInfo.initialFees}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Issued By</th>
                    <td>AFMC</td>
                </tr>
            </table>
    
        </div>
    </body>
    
    </html>

   `

   
  };
  return (
      <View style={{flexDirection:'row'}}>
 <View style={{flex:1}}>
    <RenderHtml
      contentWidth={width}
      source={source}
      
    />
    </View>
    <View style={{}}>
     <TouchableOpacity onPress={createPDF} >
          <View>
            <Image
              //We are showing the Image from online
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
              }}
              style={[styles.imageStyle,{marginTop:500}]}
            />
            <Text style={styles.textStyle}>Print PDF</Text>
          </View>
        </TouchableOpacity>
        </View>
    
    
    </View>

  );
}
export default invoicehtml;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 20,
    },
    textStyle: {
      fontSize: 18,
      padding: 10,
      color: 'black',
      textAlign: 'center',
    },
    imageStyle: {
      width: 150,
      height: 150,
      margin: 5,
      resizeMode: 'stretch',
    },
  });