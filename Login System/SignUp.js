import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from 'react-native-paper';


export default function SignUp() {

    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);


    return (
        
        <ScrollView>
            <View style={StyleSheet.all}>

                <View style={styles.pic}>
                    <Image style={styles.img1} source={require('../assets/Images/SignUp.png')} resizeMode='contain' />
                </View>

                <View style={styles.formInput}>
                    <TextInput style={[styles.textInput, { marginTop: 30 }]} placeholder='First Name' />
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder='Last Name' />
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder='E-mail' />
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder='Choose Your Location' />
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} />
                </View>

                <View style={styles.check}>
                    <Checkbox uncheckedColor='#1b574f' color="#4fbd4a" status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }}/>
                    <Text style={{fontSize: 17, color: '#233863', fontWeight: 'bold' }}>Agree with</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Terms & Conditions")}>
                        <Text style={{fontSize: 17, color: 'blue',  fontWeight: 'bold' }}> Terms & conditions</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("MainHome")}
                 style={styles.regButton}>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'normal' }}>Register</Text>
                </TouchableOpacity>

</View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    all: {
        backgroundColor: '#ffffff',
    },
    img1: {
        // width: '70%',
        width: '100%',
        height: 215,
        marginLeft: 'auto',
        marginRight:'auto',
        marginTop:'1%'
      },
    formInput: {
        padding: 5,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },

    textInput: {
        padding: 7,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 10,
    },
    regButton: {
        padding: 15,
        backgroundColor: '#4fbd4a',
        borderRadius: 10,
        width: 180,
        marginLeft: 114,
        marginTop:40,

    },
    check:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
})
