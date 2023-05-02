import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

export default function EditProfile() {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1, flexDirection: 'column', backgroundColor: '#e6e6e6',
            justifyContent: 'flex-end', marginTop: 20
        }}>

            <View style={styles.InputContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("MainHome")}>
                    <Image style={styles.img2}
                        source={require('../assets/Images/LeftArrow.png')}
                        resizeMode='contain'
                    />
                </TouchableOpacity>

                <View >
                    {/* <Text style={{color:'white', fontWeight:'500',fontSize:25}}>Ross Stefani</Text> */}
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 18 }}>Edit Profile</Text>
                    {/* <TextInput style={styles.textInput} placeholder='Your email address'/> */}
                </View>

            </View>

            <Text style={{ fontSize: 21, fontWeight: '600', marginBottom: 0, marginTop: 50, margin: 20,marginLeft:20,color:'#4d4d4d' }}>
                Edit Your Profile</Text>

            <View style={{
                backgroundColor: 'white', height: '70%', borderTopLeftRadius: 20,
                borderTopRightRadius: 20, padding: 20, marginBottom: 'auto', marginTop: 30,
                borderBottomLeftRadius: 20, borderBottomRightRadius: 20, margin: 15
            }}>


                <Text style={{ fontSize: 20, fontWeight: '500' }}>Profile Picture</Text>

                <TouchableOpacity>
                    <Image style={styles.img}
                        source={require('../assets/Images/EditProfileLogo.png')}
                        resizeMode='contain'
                    />
                </TouchableOpacity>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput1} placeholder='First Name' />
                    <TextInput style={styles.textInput2} placeholder='Last Name' />
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput3} placeholder='Email Address' />
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput3} placeholder='Phone Number' />
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput3} placeholder='Location' />
                </View>

                <View style={styles.formInput}>
                    <TouchableOpacity onPress={() => navigation.navigate("MainHome")} style={styles.defaultButton1}>
                        <Text style={{ textAlign: 'center', fontSize: 18, color: 'white', fontWeight: 'bold' }}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("MainHome")} style={styles.defaultButton2}>
                        <Text style={{ textAlign: 'center', fontSize: 18, color: 'white', fontWeight: 'bold' }}>Save</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#3fc44e'
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
        width: 330,
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        alignItems:'center'
    },


    textInput1: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 8,
        width: 150,
        height: 40
    },
    textInput2: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 8,
        width: 170,
        height: 40,
        marginLeft: 'auto'

    },
    textInput3: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 8,
        width: '100%',
        height: 40,
        marginTop: 10
    },
    defaultButton1: {
        padding: 10,
        backgroundColor: '#caccca',
        borderRadius: 20,
        marginTop: 30,
        width: 120,
        marginLeft: 60,
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
