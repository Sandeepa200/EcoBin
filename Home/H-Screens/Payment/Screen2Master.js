import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';



export default function Master() {
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={{
            flex: 1, flexDirection: 'column', backgroundColor: '#e6e6e6',
            justifyContent: 'flex-start', marginTop: 20
        }}>

            <View style={styles.InputContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
                    <Image style={styles.img2}
                        source={require('../../../assets/Images/LeftArrow.png')}
                        resizeMode='contain'
                    />
                </TouchableOpacity>

                <View >
                    {/* <Text style={{color:'white', fontWeight:'500',fontSize:25}}>Ross Stefani</Text> */}
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 18 }}>Card Information</Text>
                    {/* <TextInput style={styles.textInput} placeholder='Your email address'/> */}
                </View>

            </View>

            <View style={{alignItems:'center'}}>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 0, marginTop: 30, margin: 20 }}>
                Amount (LKR) </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 0, marginTop: 0, margin: 20 }}>
                220.00
              </Text>
            </View>

            <View style={{
                backgroundColor: 'white', height: '46%', borderTopLeftRadius: 20,
                borderTopRightRadius: 20, padding: 20, marginBottom: 30, marginTop: 30,
                borderBottomLeftRadius: 20, borderBottomRightRadius: 20, margin: 15
            }}>

                
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput3} placeholder='Name on card' />
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput3} placeholder='Card Number' />
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput1} placeholder='Expiry' />
                    <TextInput style={styles.textInput2} placeholder='CVC' />
                </View>

                
                <View style={styles.Line}></View>
                <Image style={styles.imgMaster} source={require('./Images/MasterLogo.png')}/>
                <Text style={{fontSize:14,fontWeight:'400',marginLeft:'10%',color:'gray'}}>Approved by the Central Bank of Sri Lanka</Text>
          </View>

          <View style={styles.check}>
              <Checkbox uncheckedColor='#1b574f' color="#1b574f" status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }}/>
                  <Text style={{fontSize: 15, color: 'black', fontWeight: '400' }}>{'Save my card details for faster payments \n I agree to'}
                        <Text style={{fontSize: 16, color: '#4682B4', textDecorationLine: 'underline', fontWeight: 'bold' }}> Terms & conditions</Text>
                  </Text>
          </View>
          
          <TouchableOpacity onPress={() => navigation.navigate("LastScreen")} style={styles.ConfirmButton}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold', }}>CONTINUE</Text>
          </TouchableOpacity>
          

        </View>
    );
}

const styles = StyleSheet.create({
    Line: {
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
  ConfirmButton: {
    padding: 10,
    backgroundColor: '#db2159',
    borderRadius: 10,
    width: 370,
    marginLeft: 'auto',
    marginRight:'auto',
    marginTop: '10%',
},
  check:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: '5%',
},
    header: {
        height: 50,
        backgroundColor: '#3fc44e'
    },
    imgMaster: {
        // width: '70%',
        marginTop:'5%',
        marginBottom:'5%',
        width: 80,
        height: 45,
        marginLeft: '75%',
        marginRight: 10,
  
    },
    img: {
        // width: '70%',
        width: 100,
        height: 85,
        marginLeft: 0,
        marginRight: 10,
        marginTop: 10
    },
    img2: {
        // width: '70%',
        width: 40,
        height: 65,
        marginLeft: 10,
        marginRight: 10,
    },
    InputContainer: {
        height: 50,
        backgroundColor: '#42b357',
        flexDirection: 'row',
        paddingHorizontal: 0,
        alignItems: 'center',
        marginLeft: 0
    },

    formInput: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white'
    },


    textInput1: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 8,
        width: 150,
        height: 50
    },
    textInput2: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 8,
        width: 160,
        height: 50,
        marginLeft: 'auto'

    },
    textInput3: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 8,
        width: '100%',
        height: 50,
        
    },
    defaultButton1: {
        padding: 10,
        backgroundColor: '#caccca',
        borderRadius: 20,
        marginTop: 30,
        width: 120,
        marginLeft: 80,
        marginRight: 10,
    },
    defaultButton2: {
        padding: 10,
        backgroundColor: '#3fc44e',
        borderRadius: 20,
        marginTop: 30,
        width: 120,
        marginLeft: 'auto',
        marginRight: 10,
    },
})
