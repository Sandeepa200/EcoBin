import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
export default function Login() {

    const navigation = useNavigation();

    // define a trash have state variable and set the default value to false
    const [ishidden, setishidden] = useState(true);
    const [ishidden1, setishidden1] = useState(true);

    // Handle changing the trash have when button is clicked
    const Toggleeye = () =>
        setishidden((previousState) => !previousState);

    const Toggleeye1 = () =>
        setishidden1((previousState) => !previousState);

    return (
        
            <View style={StyleSheet.all}>
                <View style={{marginTop:'1%'}}></View>

                <View style={styles.pic}>
                    <Image style={styles.img1} source={require('../assets/Images/Reset.png')} resizeMode='contain'/>
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder='New Password' secureTextEntry={ishidden} />
                    <TouchableOpacity onPress={Toggleeye} style={styles.eye}>
                        <Entypo name="eye" size={24} color="black" style={{marginHorizontal: 5, marginVertical: 10 }} /> 
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder='Confirm Password' secureTextEntry={ishidden1} />
                    <TouchableOpacity onPress={Toggleeye1} style={styles.eye}>
                        <Entypo name="eye" size={24} color="black" style={{marginHorizontal: 5, marginVertical: 10 }}/>
                    </TouchableOpacity>
                    
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("MainHome")} style={styles.Button}>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold'}}>Confirm</Text>
                </TouchableOpacity>


                {/* <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Image style={styles.img2} source={require('../assets/Images/TextLogo.png')} resizeMode='contain'/>
                </View> */}

            </View>
        
    )
}

const styles = StyleSheet.create({
    all: {
        backgroundColor: '#ffffff',

    },
    img1: {
        // width: '70%',
        width: "100%",
        height: 215,
        marginLeft: 'auto',
        marginRight:'auto',
        marginTop: 0,
      },
    formInput: {
        padding: 5,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
        
    },

    textInput: {
        padding: 7,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 10,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        width: '90%'
    },

    Button: {
        padding: 15,
        backgroundColor: '#4fbd4a',
        borderRadius: 10,
        width: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:60 

    },

    img2: {
        // width: '70%',
        width: 110,
        height: 105,
        marginLeft: 0,
        marginTop: 30,
        marginBottom: 0,
    },
    eye:{
        borderColor: '#a7a7a7',
        borderWidth:1, 
        borderRadius: 10, 
        borderBottomLeftRadius: 0, 
        borderTopLeftRadius:0 , 
        backgroundColor: '#42b357'
    }
})
