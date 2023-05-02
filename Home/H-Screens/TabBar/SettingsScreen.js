import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { BackgroundImage } from '@rneui/base';
//font Awesome Icons
import { FontAwesome } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';




export default function Settings() {

  const navigation = useNavigation();

  return (

    <BackgroundImage style={styles.IMG1} source={require('./Images/GBashnew.png')}>

      <Text style={{ marginTop: '20%', marginLeft: 'auto', marginRight: 'auto', fontWeight: 'bold', color: 'white', fontSize: 30 }}>Settings</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >


        <View style={styles.container}>
          <TouchableOpacity style={styles.ConfirmButton} onPress={() => navigation.navigate("AboutUs")}>
            <Image style={styles.logo1} source={require('./Images/AboutUs.png')} resizeMode='contain' />
            <Text style={{ textAlign: 'left', fontSize: 17, color: '#3E424B', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>AboutUs</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ConfirmButton} onPress={() => navigation.navigate("Terms & Conditions")}>
            <Image style={styles.logo1} source={require('./Images/TAC.png')} resizeMode='contain' />
            <Text style={{ textAlign: 'left', fontSize: 17, color: '#3E424B', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>Teams & Condition</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ConfirmButton} onPress={() => navigation.navigate("Privacy & Policy")}>
            <Image style={styles.logo1} source={require('./Images/privacy-policy.png')} resizeMode='contain' />
            <Text style={{ textAlign: 'left', fontSize: 17, color: '#3E424B', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ConfirmButton}>
            <Image style={styles.logo1} source={require('./Images/HowtoUse.png')} resizeMode='contain' />
            <Text style={{ textAlign: 'left', fontSize: 17, color: '#3E424B', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>How to Use App</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("FeedBackScreen")} style={styles.ConfirmButton}>
            <Image style={styles.logo1} source={require('./Images/feedback.png')} resizeMode='contain' />
            <Text style={{ textAlign: 'left', fontSize: 17, color: '#3E424B', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>FeedBack</Text>
          </TouchableOpacity>


        </View>

        <View style={styles.container2}>

          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}
            style={styles.ConfirmButton}>
            <Image style={styles.logo2} source={require('./Images/logout.png')} resizeMode='contain' />
            <Text style={{ textAlign: 'left', fontSize: 17, color: '#3E424B', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>LogOut</Text>
          </TouchableOpacity>

        </View>

      </View>
    </BackgroundImage>

  )
}



const styles = StyleSheet.create({
  logo1: {
    width: 30,
    height: 50,
    
  },
  logo2: {
    width: 30,
    height: 45
  },
  ConfirmButton: {
    padding: 4,
    // backgroundColor: '#ECECEC',
    borderRadius: 10,
    width: 295,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#b8b8b8',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,

  },
  txt1: {
    alignContent: 'flex-start',

  },
  IMG1: {
    flex: 1,
  },
  container: {
    height: 420,
    width: '90%',
    // backgroundColor:'#FAFAFA',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: '0%',

    //shadow
    // borderWidth: 6,
    // borderColor: '#b8b8b8', 
    // borderLeftWidth: 0.5, 
    // borderTopWidth: 0.5,
    // shadowColor: 'gray',
    // shadowOffset: { width: 10, height: 40 },
    // shadowOpacity: 200,
    // shadowRadius: 20,
    // elevation: 20,

  },

  container2: {
    height: 90,
    width: '90%',
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    marginTop: '5%',

    //shadow
    // borderWidth: 6,
    // borderColor: '#b8b8b8', 
    // borderLeftWidth: 0.5, 
    // borderTopWidth: 0.5,
    // shadowColor: 'gray',
    // shadowOffset: { width: 10, height: 40 },
    // shadowOpacity: 200,
    // shadowRadius: 20,
    // elevation: 20,

  }
})
