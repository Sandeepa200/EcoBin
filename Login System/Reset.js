import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Reset() {

    const navigation = useNavigation();

    return (
        
            <View style={StyleSheet.all}>
                <View style={{marginTop:'1%'}}></View>

                <View style={styles.pic}>
                    <Image style={styles.img1} source={require('../assets/Images/Verify.png')} resizeMode='contain'/>
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder='Email'/>
                </View>

                <TouchableOpacity style={styles.Button1}>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold'}}>Submit</Text>
                </TouchableOpacity>

                <View style={styles.Text1}>
                    <Text style={{ textAlign: 'left', fontSize: 16, color: '#233863'}}>OTP code will be sent to your email account.Enter it below</Text>
                </View>

                <View style={styles.codeInput}>
                    <View  style={styles.Input}><TextInput style={styles.otp} maxLength={1}/></View>
                    <View  style={styles.Input}><TextInput style={styles.otp}/></View>
                    <View  style={styles.Input}><TextInput style={styles.otp}/></View>
                    <View  style={styles.Input}><TextInput style={styles.otp}/></View>
                </View> 

                <View style={styles.Text2}>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#233863'}}>Code will expire on - <Text style={{color: 'red'}}>5min</Text></Text>
                </View>

                <TouchableOpacity style={styles.Button2}>
                    <Text onPress={()=>navigation.navigate("VerifyScreen")} style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold'}}>Verify</Text>
                </TouchableOpacity>

                <View style={styles.MText}>
                    <Text style={{ textAlign: 'center', fontSize: 17, color: '#233863'}}>OTP code was not recieved ?
                    <Text onPress={() => navigation.navigate("###")} style={{fontSize: 17, color: '#4682B4'}}> Send Again</Text></Text>
                </View>

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
    img2: {
        // width: '70%',
        width: 110,
        height: 105,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
    },
    formInput: {
        padding: 5,
        marginTop: 25,
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
    Button1: {
        padding: 8,
        backgroundColor: '#4fbd4a',
        borderRadius: 6,
        width: 110,
        marginLeft: 'auto',
        marginRight: 25,
        marginTop:8 
    },
    Text1: {
        alignItems: 'center',
        marginTop: 60,
        margin: 20,
        fontSize: 10,
        fontWeight: '400',
    },
    codeInput: {
        flex:1,
        flexDirection:'row',
        marginTop:0,
        margin:20,
    },
    Input: {
        flex:1,
        height:50,
        width:50,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 10,
        marginLeft:10,
        marginRight:10,
    },
    Text2: {
        alignItems: 'center',
        marginTop: 40,
        margin: 20,
        fontSize: 10,
        fontWeight: '400',
    },
    Button2: {
        padding: 10,
        backgroundColor: '#4fbd4a',
        borderRadius: 10,
        marginTop: 30,
        width:190,
        marginLeft: 'auto',
        marginRight: 'auto',
    
    },
    MText: {
        alignItems: 'center',
        marginTop: 30,
        margin: 25,
        fontSize: 10,
        fontWeight: '400',
    },
    otp : {
        width:20
    }
})
