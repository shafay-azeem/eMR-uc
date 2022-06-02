import React, {useState} from 'react';
// Import required components
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
 
// Import HTML to PDF
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFetchBlob from 'rn-fetch-blob'
const App = () => {
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
            '<h1 style="text-align: center;"><strong>Shafay Azz</strong></h1><p style="text-align: center;">Here is an example of pdf Print in React Native</p><p style="text-align: center;"><strong>Team About React</strong></p>',
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
      }





    // if (await isPermitted()) {
    //   let options = {
    //     //Content to print
    //     html:
    //       '<h1 style="text-align: center;"><strong>Hello Guys</strong></h1><p style="text-align: center;">Here is an example of pdf Print in React Native</p><p style="text-align: center;"><strong>Team About React</strong></p>',
    //     //File Name
    //     fileName: 'test',
    //     directory: 'Download',
    //     base64: true
    //   };
    //   let file = await RNHTMLtoPDF.convert(options);
    //   console.log(file.filePath);
    //   setFilePath(file.filePath);


    //   let filePath1 = RNFetchBlob.fs.dirs.DownloadDir + '/testPDF.pdf';
    //   console.log(filePath1,'kill')
        
    //   RNFetchBlob.fs.writeFile(filePath1, file.base64, 'base64')
    //       .then(response => {
    //           console.log('Success Log: ', response);
    //       })
    //       .catch(errors => {
    //           console.log(" Error Log: ", errors);
    //       })
    // }
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        Example to Make PDF in React Native from HTML Text
      </Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={createPDF}>
          <View>
            <Image
              //We are showing the Image from online
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
              }}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>Create PDF</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{filePath}</Text>
      </View>
    </SafeAreaView>
  );
};
 
export default App;
 
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