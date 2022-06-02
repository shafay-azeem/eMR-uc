import React, {useState }from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';

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
                    <th style="text-align: start;">Pateint Record Number</th>
                    <td>${patient.mrnum}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Pateint Name</th>
                    <td>${patient.firstName}${" "}${patient.lastName}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Gender</th>
                    <td>${patient.gender}</td>
                    <th>Age</th>
                    <td>${patient.age} Years</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Pateint Full Address</th>
                    <td>${patient.address1} </td>
                </tr>
                <tr>
                    <th style="text-align: start;">Pateint Contact Number</th>
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
                    <th style="text-align: start;">Pateint Name</th>
                    <td>${patient.firstName}${" "}${patient.lastName}</td>
                </tr>
                <tr>
                    <th style="text-align: start;">Pateint Id</th>
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
    <RenderHtml
      contentWidth={width}
      source={source}
    />
  );
}
export default invoicehtml;