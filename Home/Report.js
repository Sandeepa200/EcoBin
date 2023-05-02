import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, } from "react-native";

export default function Report() {

  const navigation = useNavigation();

  return (
    <ScrollView>
      <ImageBackground source={require('../assets/Images/white.jpg')} >

        <View style={StyleSheet.all}>
          <View style={styles.pic}>
            <Image style={styles.img1} source={require('../assets/Images/LoginLogo.png')}
              resizeMode='contain'
            />
          </View>


          <View>
            <View style={styles.formInput}>
              <TextInput style={styles.textInput} placeholder='Full Name' />
            </View>
            <View style={styles.formInput2}>
              <TextInput style={styles.textInput} placeholder='Phone Number' />
            </View>
            <View style={styles.formInput2}>
              <TextInput style={styles.textInput} placeholder='Your Issue' />
            </View>
          </View>
          <TouchableOpacity style={styles.defaultButton}>
            <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>Send</Text>
          </TouchableOpacity>

          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image style={styles.img2} source={require('../assets/Images/TextLogo.png')} resizeMode='contain'/>
          </View>

        </View>
      </ImageBackground>
    </ScrollView>


  );
}

const styles = StyleSheet.create({

  img1: {
    // width: '70%',
    width: 415,
    height: 235,
    marginLeft: 0,
    marginTop: 40,
  },
  container2: {
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: 'white',

  },
  square2: {
    width: 380,
    height: 40,
    justifyContent: 'center',
    borderRadius: 15,

  },
  txt2: {
    textAlign: 'center',
    color: '#489494',
    // fontFamily: '',
    fontSize: 20,
    fontWeight: '500',
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
    marginTop: 30,
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
    borderRadius: 20,
  },
  defaultButton: {
    padding: 15,
    backgroundColor: '#1b574f',
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 50,
    width: 180,
    marginLeft: 'auto',
    marginRight: 'auto',

  }
});