import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, 
SafeAreaView, ScrollView,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';


// //Screens
// import MainHome from '../../MainHome';
// import SearchScreen from '../TabBar/SearchScreen';
// import NotificationScreen from '../TabBar/NotificationScreen';
// import SettingsScreen from '../TabBar/SettingsScreen';


// const Tab = createBottomTabNavigator();

export default function Screen1() {

    const navigation = useNavigation();
    return (

        <ScrollView>
                    <View style={{
            flex: 1, flexDirection: 'column', backgroundColor: 'white',
            justifyContent: 'flex-end', marginTop: 20
        }}>
            
            <View style={styles.InputContainer}>

                {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image style={styles.img2}
                        source={require('../../../assets/Images/LeftArrow.png')}
                        resizeMode='contain'
                    />
                </TouchableOpacity> */}

                <View >
                    {/* <Text style={{color:'white', fontWeight:'500',fontSize:25}}>Ross Stefani</Text> */}
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 20,marginLeft:10 }}>Monthly Payment</Text>
                    {/* <TextInput style={styles.textInput} placeholder='Your email address'/> */}
                </View>

            </View>

            <Text style={{marginLeft:'5%', marginTop:'4%', fontSize:18, fontWeight:'500',}}>Select the month/s</Text>

            <View>
            <View style={styles.MonthContainer}>
                    
                    <TouchableOpacity style={styles.defaultButton1}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>January</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.defaultButton1}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>February</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.defaultButtonred}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>March</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.MonthContainer}>
                    
                    <TouchableOpacity  style={styles.defaultButton2}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>April</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.defaultButton2}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>May</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.defaultButton2}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>June</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.MonthContainer}>
                    
                    <TouchableOpacity  style={styles.defaultButton2}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>July</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.defaultButton2}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>August</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.defaultButton2}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>September</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.MonthContainer}>
                    
                    <TouchableOpacity  style={styles.defaultButton2}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>October</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.defaultButton2}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>November</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.defaultButton2}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>December</Text>
                    </TouchableOpacity>

                </View>

                <View style={{alignItems: 'center',flexDirection: 'row',marginLeft:'65%',marginTop:'8%',height:30,width:120,}}>
                    <Text style={{height:15,width:15, borderRadius:25, backgroundColor:'#73c734',}}></Text>
                <Text style={{marginLeft:10, fontSize:15,fontWeight:'500'}}>Paid</Text>
                </View>

                <View style={{alignItems: 'center',flexDirection: 'row',marginLeft:'65%',marginTop:'0%',height:30,width:120,}}>
                    <Text style={{height:15,width:15, borderRadius:15, backgroundColor:'#db1d3f',}}></Text>
                    <Text style={{marginLeft:10, fontSize:15,fontWeight:'500'}}>Not Paid</Text>
                </View>  

                <View style={{alignItems: 'center',flexDirection: 'row',marginLeft:'65%',marginTop:'0%',height:30,width:120,}}>
                    <Text style={{height:15,width:15, borderRadius:25, backgroundColor:'#bfbfbf',}}></Text>
                    <Text style={{marginLeft:10, fontSize:15,fontWeight:'500'}}>Up Coming</Text>
                </View>              
                
            </View>
            
            <View style={styles.PaymentContainer}>

                <View style={styles.TMContainer}>

                    <Text style={{marginLeft:'1%', marginTop:'0%', fontSize:16, fontWeight:'500',}}>
                        Your selected months</Text>
                    <Text style={{marginRight:'10%', marginTop:'0%', fontSize:16, fontWeight:'500',}}>
                        March</Text>
                </View>

                <View style={styles.TMContainer}>

                    <Text style={{marginLeft:'1%', marginTop:'3%', fontSize:16, fontWeight:'500',}}>
                        Tax Amount</Text>
                    <Text style={{marginRight:'10%', marginTop:'3%', fontSize:16, fontWeight:'500',}}>
                        RS.200.00</Text>
                </View>

                <View style={styles.TMContainer}>

                    <Text style={{marginLeft:'1%', marginTop:'0%', fontSize:16, fontWeight:'500',}}>
                        Service Charge</Text>
                    <Text style={{marginRight:'10%', marginTop:'0%', fontSize:16, fontWeight:'500',}}>
                        RS.20.00</Text>
                </View>

                <View style={styles.TMContainer}>

                    <Text style={{marginLeft:'1%', marginTop:'3%', fontSize:20, fontWeight:'500',}}>
                        Total Amount</Text>
                    <Text style={{marginRight:'10%', marginTop:'3%', fontSize:20, fontWeight:'500',}}>
                        Rs 220.00</Text>
                </View>
                {/* <Text style={{marginLeft:5,}}>_____________________________________________________</Text> */}
                <View style={styles.ConfirmButton}></View>
                <Text style={{marginTop:20,marginLeft:5,fontSize:16,fontWeight:'500'}}>Pay Using</Text>
              
            </View>
            <View style={{flexDirection:'row'}}>
                
                    <TouchableOpacity onPress={() => navigation.navigate("Screen2VisaMaster")}>
                        <Image style={styles.imgVisa} source={require('./Images/NM.png')} resizeMode='contain'/>
                    </TouchableOpacity>

                    
                        <Image style={styles.imgEZ} source={require('./Images/ez-logo.png')} resizeMode='contain'/>
                    

            </View>
                         
        </View>
        </ScrollView>
    
    );
}

const styles = StyleSheet.create({

    TMContainer: {
        marginTop: 0,
        width: 385,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        // backgroundColor:'pink'
    },

    PaymentContainer: {
        backgroundColor: '#F5F5F5', 
        padding: 20, 
        marginBottom: 'auto', 
        marginTop: 20,
        height:'40%',
        
    },
    InputContainer: {
        marginTop:0,
        height: 50,
        backgroundColor: '#42b357',
        flexDirection: 'row',
        paddingHorizontal: 0,
        alignItems: 'center',
        marginLeft: 0
    },
    imgVisa: {
        // width: '70%',
        width: 200,
        height: 90,          
    },
    imgEZ: {
        // width: '70%',
        width: 180,
        height: 90,    
      
    },
    img2: {
        // width: '70%',
        width: 40,
        height: 65,
        marginLeft: 10,
        marginRight: 10,
    },

    MonthContainer: {
        marginTop: 20,
        width: 355,
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent:'space-between',
        backgroundColor:'white',
        marginLeft:'auto',
        marginRight:'auto'
    },

    defaultButton1: {
        padding: 10,
        backgroundColor: '#42b357',
        borderRadius: 10,
        width: 110,
        borderWidth: 2,
        borderColor: '#42b357', 
        // borderLeftWidth: 0.5, 
        // borderTopWidth: 0.5,
        // shadowColor: 'gray',
        // shadowOffset: { width: 10, height: 40 },
        // shadowOpacity: 200,
        // shadowRadius: 20,
        // elevation: 20,
    },

    defaultButton2: {
        padding: 10,
        backgroundColor: '#bfbfbf',
        borderRadius: 10,
        width: 110,  
        borderWidth: 2,
        borderColor: '#b8b8b8', 
        // borderLeftWidth: 0.5, 
        // borderTopWidth: 0.5,
        // shadowColor: 'gray',
        // shadowOffset: { width: 10, height: 40 },
        // shadowOpacity: 200,
        // shadowRadius: 20,
        // elevation: 20,
    },
    defaultButtonred: {
        padding: 10,
        backgroundColor: '#ff0000',
        borderRadius: 10,
        width: 110,  
        borderWidth: 2,
        borderColor: '#0033cc', 
        // borderLeftWidth: 0.5, 
        // borderTopWidth: 0.5,
        // shadowColor: 'gray',
        // shadowOffset: { width: 10, height: 40 },
        // shadowOpacity: 200,
        // shadowRadius: 20,
        // elevation: 20,
    },
    ConfirmButton: {
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
    
})
