import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';

import Screen2Master from './Screen2Master';
import FeedBack from '../TabBar/SettingsComponents/FeedBack';

export default function EditProfile() {
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={{
            flex: 1, flexDirection: 'column', backgroundColor: '#EEEEEE',
            justifyContent: 'flex-start', marginTop: 40
        }}>

            

            <View style={{
                backgroundColor: 'white', height: '50%', borderTopLeftRadius: 20,
                borderTopRightRadius: 20, padding: 20, marginBottom: 30, marginTop: '45%',
                borderBottomLeftRadius: 20, borderBottomRightRadius: 20, margin: 25,alignItems: "center",
            }}>
                    <Image style={styles.img}
                        source={require('./Images/tik.jpg')}
                        resizeMode='contain'
                    />
                    <Text style={{fontSize:30,fontWeight:'bold',marginTop:20,marginBottom:10}}>Payment Successful</Text>
                    <Text style={{fontSize:16,fontWeight:'600',marginTop:10,marginBottom:20}}>You have added two points</Text>
                    <Text> {'We sent you an email including the \n       payment details. Thank you!'}</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("MainHome")} style={styles.ConfirmButton}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', fontWeight: 'bold' }}>Ok</Text>
                    </TouchableOpacity>
                    
          </View>

        </View>
    );
}

const styles = StyleSheet.create({
  ConfirmButton: {
    padding: 10,
    backgroundColor: '#42b357',
    borderRadius: 10,
    width: 150,
    marginLeft: 'auto',
    marginRight:'auto',
    marginTop:40,

},
  check:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
},
    header: {
        height: 50,
        backgroundColor: '#3fc44e'
    },
    imgVisa: {
      // width: '70%',
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
        width: 350,
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
        width: 160,
        height: 50
    },
    textInput2: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 8,
        width: 170,
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
