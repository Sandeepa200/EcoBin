import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser';

export default function Login() {

  const navigation = useNavigation();

  return (

    <ScrollView>
      <View style={{ marginTop: '0%' }}></View>

      <View style={StyleSheet.all}>
        <View style={styles.pic}>
          <Image style={styles.img1} source={require('../assets/Images/Login.png')}
            resizeMode='contain'
          />
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.formInput}>
            <TextInput multiline={true} style={styles.textInput} placeholder='Email' />
          </View>

          <View style={styles.formInput2}>
            <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} />
          </View>


          <TouchableOpacity>
            <Text onPress={() => navigation.navigate("ResetScreen")} style={{ color: '#0066ff', textAlign: 'right', fontSize: 15, marginRight: 40 }}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("MainHome")} style={styles.defaultButton}>
            <Text style={{ textAlign: 'center', fontSize: 18, color: 'white', fontWeight:'500' }}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.MText}>
            <TouchableOpacity>
              <View style={styles.MText}>
                <Text style={{ textAlign: 'center', fontSize: 15, color: '#233863', fontWeight: '400' }}>If you don't have an account
                  <Text onPress={() => navigation.navigate("SignUpScreen")} style={{ fontWeight: '500', fontSize: 15, color: '#0066ff' }}> Register</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{ fontWeight: 'bold', color: '#969696', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 20 }}>──────── Or ────────</Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://google.com')}>
              <Image source={require('../assets/Images/google-logo.png')} style={{ width: 45, height: 40, marginTop: 30, marginBottom: '10%', margin: 20, marginLeft: 5 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://facebook.com')}>
              <Image source={require('../assets/Images/Facebook-Logo.png')} style={{ width: 40, height: 40, marginTop: 30, marginBottom: '10%', margin: 20 }} resizeMode='contain' />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://twitter.com')}>
              <Image source={require('../assets/Images/Twitter-logo.png')} style={{ width: 40, height: 40, marginTop: 30, marginBottom: '10%', margin: 20 }} resizeMode='contain' />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ScrollView>


  )
}

const styles = StyleSheet.create({
  mainContainer: {

  },
  all: {
    backgroundColor: '#ffffff',
  },
  // pic:{
  //   flex:1
  // },
  img1: {
    // width: '70%',
    width: "100%",
    height: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
  },
  img2: {
    // width: '70%',
    width: 110,
    height: 105,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  formInput: {
    padding: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  formInput2: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 10,
  },
  defaultButton: {
    padding: 10,
    backgroundColor: '#4fbd4a',
    borderRadius: 10,
    marginTop: 30,
    width: 190,
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  MText: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 25,
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
