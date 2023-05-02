// import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity, ImageBackground, Alert,Switch } from 'react-native';

import SettingsScreen from '../TabBar/SettingsScreen';
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FontAwesome } from '@expo/vector-icons';



export default function Days() {
    const navigation = useNavigation();
    const simpleAlert = () => {
        alert ("Trash collecting unavailable today! " )
    }
    const twoOptionAlert = () => {
        Alert.alert(
            '',
           'Test Days'
        )
    }
    // const [modalVisible, setModalVisible] = useState(false);

    // // define a trash have state variable and set the default value to false
    // const [isTrashHave, setisTrashHave] = useState(true);

    // // Handle changing the trash have when button is clicked
    // const trashToggleSwitch = () =>
    //     setisTrashHave((previousState) => !previousState);
    
    return (
        <View style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor: 'white'}}>
            <View style={styles.container}>   
                <TouchableOpacity  onPress={() => navigation.navigate("Sunday")}>
                    <FontAwesome name="trash" size={40} color="green"
                        style={{padding:8, backgroundColor: '#f7f5f5', borderRadius: 15, borderWidth: 1, borderColor: '#918e8e'}}
                    />
                    <Text style={styles.txt1}>SUN</Text>
                </TouchableOpacity> 

                <TouchableOpacity onPress={simpleAlert}>
                    <View style={{padding:8, backgroundColor: '#f7f5f5', borderRadius: 15, borderWidth: 1, borderColor: '#918e8e'}} >
                        <FontAwesome name="trash" size={30} color="white" 
                            style={{padding:6, backgroundColor: '#bdb9b9', borderRadius: 50,}}
                        />
                    </View>
                    <Text style={styles.txt1}>MON</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate("Tuesday")}>
                    <FontAwesome name="trash" size={37} color="orange"
                        style={styles.activeDay}
                    />
                    
                    <Text style={styles.txt1}>TUE</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate("Wednesday")}>
                    <FontAwesome name="trash" size={40} color="red"
                        style={{padding:8, backgroundColor: '#f7f5f5', borderRadius: 15, borderWidth: 1, borderColor: '#918e8e'}}
                    />
                    <Text style={styles.txt1}>WED</Text>
                </TouchableOpacity> 

                {/* <TouchableOpacity onPress={simpleAlert}>
                    <View style={{padding:8, backgroundColor: '#f7f5f5', borderRadius: 15, borderWidth: 1, borderColor: '#918e8e'}} >
                        <FontAwesome name="trash" size={30} color="white" 
                            style={{padding:6, backgroundColor: '#bdb9b9', borderRadius: 50,}}
                        />
                    </View>
                    <Text style={styles.txt1}>WED</Text>
                </TouchableOpacity>  */}
                            

            </View>

            <View style={styles.container2}>      

                <TouchableOpacity  onPress={() => navigation.navigate("Thursday")}>
                    <FontAwesome name="trash" size={40} color="blue"
                        style={{padding:8, backgroundColor: '#f7f5f5', borderRadius: 15, borderWidth: 1, borderColor: '#918e8e'}}
                    />
                    <Text style={styles.txt1}>THU</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={simpleAlert}>
                    <View style={{padding:8, backgroundColor: '#f7f5f5', borderRadius: 15, borderWidth: 1, borderColor: '#918e8e'}} >
                        <FontAwesome name="trash" size={30} color="white" 
                            style={{padding:6, backgroundColor: '#bdb9b9', borderRadius: 50,}}
                        />
                    </View>
                    <Text style={styles.txt1}>FRI</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate("Saturday")}>
                    <FontAwesome name="trash" size={40} color="black"
                        style={{padding:8, backgroundColor: '#f7f5f5', borderRadius: 15, borderWidth: 1, borderColor: '#918e8e'}}
                    />
                    <Text style={styles.txt1}>SAT</Text>
                </TouchableOpacity>

            </View>
            {/* this is toggle trash on off button part and explore more label part */}
            {/* <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0, paddingHorizontal: 25}} >
                <Text style={{fontSize:15, fontWeight: '500', textAlignVertical: 'center', }}>Today, I {isTrashHave ? "have" : "have not"} Garbage</Text>
                <Switch
                    style={{marginLeft: 'auto',transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }]}}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isTrashHave ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={trashToggleSwitch} 
                    /** call the trashToggleSwitch when onValueChange callback
                    value={isTrashHave}
                />
            </View> */}
            <Text style={{fontSize:17, fontWeight: '500', padding: 10, borderColor: '#ddd', borderWidth: 1, borderTopWidth: 3, 
            borderBottomWidth: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingHorizontal: 25}}>Explore More</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
      margin:10,
      marginTop:20,
      backgroundColor:'white',
      flexDirection: 'row',
      justifyContent:'space-around',

     
    },
    container2: {
      margin:10,
      paddingHorizontal: 50, //squiz 2nd day line
      marginTop:0,
      backgroundColor:'white',
      flexDirection: 'row',
      justifyContent:'space-around',
     
    },
    square: {
      width: 85,
      height: 55,
      justifyContent: 'center',
      borderRadius:10
   
    },
    txt1: {
      textAlign: 'center',
      color:'gray',
      // fontFamily: '',
      fontSize:14,
      fontWeight: '600',
      marginBottom:10,
      
    },
    //TUE orange colored hilighted day
    activeDay:{
        padding:10, 
        backgroundColor: '#f7f5f5', 
        borderRadius: 15, 
        borderWidth: 4.5,
        borderColor: 'orange', 
        borderLeftWidth: 0.5, 
        borderTopWidth: 0.5,
        shadowColor: 'red',
        shadowOffset: { width: 10, height: 40 },
        shadowOpacity: 100,
        shadowRadius: 10,
        elevation: 10,
    }

})