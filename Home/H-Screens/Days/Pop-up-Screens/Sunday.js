import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView,Switch } from "react-native";
import COLORS from "../../../../Resources/colors";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Sunday() {

    const navigation = useNavigation();
    const [location, setLocation] = useState(null);

    //location and map part
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        })();
    }, []);

    const [modalVisible, setModalVisible] = useState(false);

    // define a trash have state variable and set the default value to false
    const [isTrashHave, setisTrashHave] = useState(true);

    // Handle changing the trash have when button is clicked
    const trashToggleSwitch = () =>
        setisTrashHave((previousState) => !previousState);

    return (
        <View style={{flex: 1, backgroundColor:'#7d807d', flexDirection:'column', justifyContent:'flex-end',}}>
            <TouchableOpacity onPress={() => navigation.navigate("MainHome")} style={{height: 160, backgroundColor: '#42b357', flexDirection: 'row', alignItems: 'center', opacity: 0.5}}>
              <Image style={{width: 110, height: 85, margin: 3, marginBottom: 10,}}
                  source={require('../../../../assets/Images/ProfilePic.png')}
                  resizeMode='contain'
              />
              <View>
                <Text style={{color:'white', fontWeight:'500',fontSize:25}}>Ross Stefani</Text>
                <Text style={{color:'white', fontWeight:'500',fontSize:18}}>Kandy | Primeross</Text>
              </View>
            </TouchableOpacity>
            <View style={{backgroundColor:'white', height:'80%', paddingVertical:10, paddingHorizontal:15, borderTopLeftRadius: 15, borderTopRightRadius: 15,}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View style={{position: 'absolute', top: -50, width: 80, height: 80,justifyContent: 'center',alignItems: 'center',backgroundColor: 'white', borderRadius: 50, borderWidth: 4, borderColor: 'green'}}>
                       <FontAwesome name="trash" size={50} color="green"
                            style={{}}
                        /> 
                    </View>
                    <Text style={{marginLeft:90,marginRight:'auto', fontSize:20, fontWeight: 'bold', marginBottom: 30, paddingRight: 50,marginTop:0}} >Perishable</Text> 
                </View>
                
                <View style={{ borderRadius: 15, alignItems: 'center', justifyContent: 'center', paddingVertical: 5, marginBottom: 15}}>
                    <Text style={{fontSize: 15 , fontWeight: 'bold'}}>Be a part of the Solution</Text>
                    <Text style={{fontSize: 15 , fontWeight: 'bold'}}>Not a part of the Polution</Text>
                </View>
                
                <View style={{justifyContent: 'center', alignItems: 'center', margin: 10, }}>
                    <MapView
                        region={!location? {
                                latitude: 74,
                                longitude: 18,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                                }
                                : {
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005,
                                }
                            }
                        style={styles.map}>
                        <Marker
                            coordinate={!location? {
                                    latitude: 74,
                                    longitude: 18,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                    }
                                : {
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                    latitudeDelta: 0.932,
                                    longitudeDelta: 0.0421,
                                    }
                            }
                        />
                        <Marker
                            coordinate={{
                                latitude: 7.291418,
                                longitude: 80.636696,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
                    </MapView>
                </View>

                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <View style={{alignItems: 'center', padding:10, width: '50%',borderColor: 'red', borderRightWidth: 2 }}>
                        <Text style={{color: 'red', fontSize: 15 , fontWeight: 'bold'}}>Today</Text>
                        <Text style={{fontSize: 15 , fontWeight: 'bold'}}>2023.01.19</Text>
                    </View>
                    <View style={{alignItems: 'center', padding:10, width: '50%',borderColor: 'red', borderLeftWidth: 2 }}>
                        <Text style={{color: 'red', fontSize: 15 , fontWeight: 'bold'}}>Next date</Text>
                        <Text style={{fontSize: 15 , fontWeight: 'bold'}}>2023.01.25</Text>
                    </View>
                </View>
                {/* this is toggle trash on off button part and explore more label part */}
                <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 10, paddingHorizontal: 25}} >
                    <Text style={{fontSize:15, fontWeight: '500', textAlignVertical: 'center', }}>Today, I {isTrashHave ? "have" : "have not"} Garbage</Text>
                    <Switch
                        style={{marginLeft: 'auto',transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }]}}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isTrashHave ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={trashToggleSwitch} 
                        /** call the trashToggleSwitch when onValueChange callback*/
                        value={isTrashHave}
                    />
                </View>
                
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    all: {
        flex: 1
    },
    InputContainer: {
        height: 115,
        // backgroundColor: '#54b09c',
        backgroundColor: COLORS.grey,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginTop: 50,
        // margin: 20
    },
    textBox: {
        marginVertical: 10,
        textAlign: 'left',
        borderRadius: 15,
        backgroundColor: '#e6ebe7',
        fontSize:25,
        paddingVertical: 5,
        textAlignVertical: 'top',
    },
    map:{
        height: 280,
        width: 350
    },

   
})