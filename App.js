

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from "./Screens/SignInScreen";
import HomeScreen from "./Screens/HomeScreen";
import Balance from "./Screens/Balance";
import SearchPatient from "./Screens/SearchPatient";
import SelectPatient from "./Screens/SelectPatient";
import PatientHeader from "./Screens/AllHeaders/PatientHeader";

import RegistrationScreen from "./Screens/RegistrationScreen";
import PatientDemographics from "./Screens/PatientDemographics";
import UpcomingAppointmentSchedule from "./Screens/UpcomingAppointmentSchedule";
import SearchDoctor from "./Screens/SearchDoctor";
import ImagesRecords from "./Screens/ImagesRecords";
import MoreImagesAndRecord from "./Screens/MoreImagesAndRecord";
import UpdatePatientProfile from "./Screens/UpdatePatientProfile";
import OpeningBalance from "./Screens/OpeningBalance";
import SelectDoc from "./Screens/SelectDoc";
import SelectSlot from "./Screens/SelectSlot";
import Cash from "./Screens/Cash";
import AppointmentConfirmation from "./Screens/AppointmentConfirmation";
import SelectSchedule from "./Screens/SelectSchedule";
import Payment from "./Screens/Payment";
import SelectDocbooking from "./Screens/SelectDocbooking";

import modal from "./Screens/modal";
import Closingbalance from "./Screens/Closingbalance";
import ConsultationPayment from "./Screens/ConsultationPayment";

import PaymentSuccessfull from "./Screens/PaymentSuccessful";
import Example from "./Screens/Example";

import AppointmentDetails from "./Screens/AppointmentDetails";
import RecordsSee from "./Screens/RecordsSee";
// import CreateSlot from "./Screens/CreateSlots";
import OpeningBal from "./Screens/Openingbal";
import Receipt from "./Screens/Receipt";
import ScheduleManagement from "./Screens/ScheduleManagement";
import Api from "./Screens/Api";
import CreateSlot from "./Screens/CreateSlot";
import ConsultationPaymentcheque from "./Screens/ConsultationPaymentcheque";

import TimeSelect from "./Screens/TimeSelect";
import DateSelect from "./Screens/DateSelect";

import getandcreate from "./Screens/getandcreate";
// import king from "./Screens/king";

import invoicehtml from "./Screens/invoicehtml";

import pdfsave from "./Screens/App";


const Stack = createStackNavigator();

const App = () => {


  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="pdfsave"
      screenOptions={{headerShown:false}}>




<Stack.Screen
        name="pdfsave"
        component={pdfsave}
      />




<Stack.Screen
        name="invoicehtml"
        component={invoicehtml}
      />

<Stack.Screen
        name="Closingbalance"
        component={Closingbalance}
      />

<Stack.Screen
        name="getandcreate"
        component={getandcreate}
      />

<Stack.Screen
        name="OpeningBalance"
        component={OpeningBalance}
      />

<Stack.Screen
        name="TimeSelect"
        component={TimeSelect}
      />
<Stack.Screen
        name="DateSelect"
        component={DateSelect}
      />
      <Stack.Screen
        name="Api"
        component={Api}
      />

<Stack.Screen
        name="ScheduleManagement"
        component={ScheduleManagement}
      />



<Stack.Screen
        name="SelectDocbooking"
        component={SelectDocbooking}
      />
      
<Stack.Screen
        name="Receipt"
        component={Receipt}
      />






<Stack.Screen
        name="Example"
        component={Example}
      />
<Stack.Screen
        name="OpeningBal"
        component={OpeningBal}
      />
      <Stack.Screen
        name="Cash"
        component={Cash}
      />

<Stack.Screen
        name="CreateSlot"
        component={CreateSlot}
      />
      <Stack.Screen
        name="ConsultationPaymentcheque"
        component={ConsultationPaymentcheque}
      />

<Stack.Screen
        name="ConsultationPayment"
        component={ConsultationPayment}
      />
            <Stack.Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
                <Stack.Screen
        name="RecordsSee"
        component={RecordsSee}
      />


      
{/* <Stack.Screen
        name="ExampleTwo"
        component={ExampleTwo}
      /> */}

<Stack.Screen
        name="PaymentSuccessfull"
        component={PaymentSuccessfull}
      />

<Stack.Screen
        name="SearchPatient"
        component={SearchPatient}
      />

<Stack.Screen
        name="modal"
        component={modal}
      />

      

      
<Stack.Screen
        name="Payment"
        component={Payment}
      />
    <Stack.Screen
        name="AppointmentConfirmation"
        component={AppointmentConfirmation}
      />
      
<Stack.Screen
        name="SelectSchedule"
        component={SelectSchedule}
      />

<Stack.Screen
        name="SelectDoc"
        component={SelectDoc}
      />

<Stack.Screen
        name="SelectSlot"
        component={SelectSlot}
      />

<Stack.Screen
        name="UpdatePatientProfile"
        component={UpdatePatientProfile}
      />


      
<Stack.Screen
        name="ImagesRecords"
        component={ImagesRecords}
      />

<Stack.Screen
        name="UpcomingAppointmentSchedule"
        component={UpcomingAppointmentSchedule}
      />
{/* <Stack.Screen
        name="CreateSlot"
        component={CreateSlot}
      /> */}
      
<Stack.Screen
        name="SearchDoctor"
        component={SearchDoctor}
      />


<Stack.Screen
        name="PatientDemographics"
        component={PatientDemographics}

      />
         <Stack.Screen
        name="SelectPatient"
        component={SelectPatient}

      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}

      />

<Stack.Screen
        name="PatientHeader"
        component={PatientHeader}

      />
      <Stack.Screen
        name="Balance"
        component={Balance}

      />

<Stack.Screen
        name="HomeScreen"
        component={HomeScreen}

      />


      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}

      />

<Stack.Screen
        name="MoreImagesAndRecord"
        component={MoreImagesAndRecord}

      />

</Stack.Navigator>
    </NavigationContainer>
  );
};





export default App;
