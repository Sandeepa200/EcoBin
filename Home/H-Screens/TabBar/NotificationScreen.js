import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, 
SafeAreaView, ScrollView,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


// //Screens
// import MainHome from '../../MainHome';
// import SearchScreen from '../TabBar/SearchScreen';
// import NotificationScreen from '../TabBar/NotificationScreen';
// import SettingsScreen from '../TabBar/SettingsScreen';


// const Tab = createBottomTabNavigator();

export default function NotificationScreen() {
    const navigation = useNavigation();
    return (

        
                    <View style={{
            flex: 1, flexDirection: 'column', backgroundColor: 'white',
            justifyContent:'flex-start', marginTop: 20
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
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 20,marginLeft:10 }}>Notification</Text>
                    {/* <TextInput style={styles.textInput} placeholder='Your email address'/> */}
                </View>

            </View>

            
                <ScrollView>

                <Text style={{marginLeft:'5%', marginTop:'8%', fontSize:20, fontWeight:'500',}}>Today</Text>


              <View>
              <TouchableOpacity>
              <View style={styles.MonthContainer}>     
                    <FontAwesome name="trash" size={40} color="blue"
                        style={{padding:8,marginLeft:10,marginTop:10}}/>
                    <View >
                        <Text style={{ marginLeft:'4%',marginTop:'8%', fontSize:14, fontWeight:'bold',marginRight:'20%'}}>Ready your non perishable garbadge</Text>
                        <Text style={{ marginLeft:'4%',fontSize:14, fontWeight:'400',marginRight:'20%'}}>2023.02.12</Text>  
                    </View>                                           
              </View> 
                </TouchableOpacity> 

              <TouchableOpacity>
              <View style={styles.MonthContainer2}>     
                    <Foundation name="dollar-bill" size={40} color="green"
                        style={{padding:8,marginLeft:10,marginTop:10}}/>
                    <View >
                        <Text style={{ marginLeft:'4%',marginTop:'11%', fontSize:14, fontWeight:'bold',marginRight:'20%'}}>Upcoming Payment</Text>
                        <Text style={{ marginLeft:'4%',fontSize:14, fontWeight:'400',marginRight:'20%'}}>2023.02.12</Text>  
                    </View>                                           
              </View> 
                </TouchableOpacity> 

              <TouchableOpacity>
              <View style={styles.MonthContainer3}>     
                    <MaterialCommunityIcons name="dump-truck" size={40} color="orange"
                        style={{padding:8,marginLeft:10,marginTop:10}}/>
                    <View >
                        <Text style={{ marginLeft:'4%',marginTop:'8%', fontSize:14, fontWeight:'bold',marginRight:'20%'}}>500m away from you</Text>
                        <Text style={{ marginLeft:'4%',fontSize:14, fontWeight:'400',marginRight:'20%'}}>2023.02.12</Text>  
                    </View>                                           
              </View>  
              </TouchableOpacity>

              <Text style={{marginLeft:'5%', marginTop:'4%',marginBottom:'3%', fontSize:20, fontWeight:'500',}}>Yesterday</Text>


              <TouchableOpacity>
              <View style={styles.MonthContainer}>     
                    <FontAwesome name="trash" size={40} color="green"
                        style={{padding:8,marginLeft:10,marginTop:10}}/>
                    <View >
                        <Text style={{ marginLeft:'4%',marginTop:'8%', fontSize:14, fontWeight:'bold',marginRight:'20%'}}>Ready your perishable garbadge</Text>
                        <Text style={{ marginLeft:'4%',fontSize:14, fontWeight:'400',marginRight:'20%'}}>2023.02.12</Text>  
                    </View>                                           
              </View> 
                </TouchableOpacity> 

              <TouchableOpacity>
              <View style={styles.MonthContainer3}>     
                    <MaterialCommunityIcons name="calendar-clock" size={40} color="red"
                        style={{padding:8,marginLeft:10,marginTop:10}}/>
                    <View >
                        <Text style={{ marginLeft:'4%',marginTop:'8%', fontSize:14, fontWeight:'bold',marginRight:'20%'}}>Your payment is over due</Text>
                        <Text style={{ marginLeft:'4%',fontSize:14, fontWeight:'400',marginRight:'20%'}}>2023.02.12</Text>  
                    </View>                                           
              </View> 
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={styles.MonthContainer3}>     
                    <FontAwesome name="trash" size={40} color="#f68006"
                        style={{padding:8,marginLeft:10,marginTop:10}}/>
                    <View >
                        <Text style={{ marginLeft:'4%',marginTop:'8%', fontSize:14, fontWeight:'bold',marginRight:'20%'}}>Ready your paper garbadge</Text>
                        <Text style={{ marginLeft:'4%',fontSize:14, fontWeight:'400',marginRight:'20%'}}>2023.02.12</Text>  
                    </View>                                           
              </View> 
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={styles.MonthContainer3}>     
                    <FontAwesome5 name="calendar-alt" size={40} color="#189df7"
                        style={{padding:8,marginLeft:10,marginTop:10}}/>
                    <View >
                        <Text style={{ marginLeft:'4%',marginTop:'8%', fontSize:14, fontWeight:'bold',marginRight:'20%'}}>World Environment Day</Text>
                        <Text style={{ marginLeft:'4%',fontSize:14, fontWeight:'400',marginRight:'20%'}}>2023.02.12</Text>  
                    </View>                                           
              </View> 
              </TouchableOpacity>

            </View>
          </ScrollView>
                                     
        </View>
        
    
    );
}

const styles = StyleSheet.create({
    MonthContainer3: {
        marginTop: 10,
        width: 350,
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',

        backgroundColor:'#f2f2f2',
        height:70,
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15,
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,

        //Shadow
    // borderWidth: 5,
    // borderColor: '#b8b8b8', 
    // borderLeftWidth: 0.5, 
    // borderTopWidth: 0.5,

        
    },
    MonthContainer2: {
        marginTop: 10,
        width: 350,
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',

        backgroundColor:'#f2f2f2',
        height:70,
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15,
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,

        //Shadow
    // borderWidth: 4,
    // borderColor: '#b8b8b8', 
    // borderLeftWidth: 0.5, 
    // borderTopWidth: 0.5,
    // shadowColor: 'gray',
    // shadowOffset: { width: 10, height: 40 },
    // shadowOpacity: 200,
    // shadowRadius: 20,
    // elevation: 20,
        
    },
    button1:{
      marginLeft:'4%',
      marginTop:'5%',
      fontSize:14, 
      fontWeight:'400',
      height:30,
      width:80,
      backgroundColor:'pink',
    
    },
    Button2: {
      padding: 5,
      backgroundColor: '#a0a7ae',
      borderRadius: 20,
      width: 100,
      marginLeft: '3%',
      marginRight: 25,
      marginTop:5 ,
      marginTop:20,

      //Shadow
      borderWidth: 4,
      borderColor: '#747e88', 
      borderLeftWidth: 0.5, 
      borderTopWidth: 0.5,
      shadowColor: 'gray',
      shadowOffset: { width: 10, height: 40 },
      shadowOpacity: 200,
      shadowRadius: 20,
      elevation: 20,
  },
  Button3: {
    padding: 5,
    backgroundColor: '#a0a7ae',
    borderRadius: 20,
    width: 110,
    marginLeft: '3%',
    marginRight: 25,
    marginTop:5 ,
    marginTop:20,

    //Shadow
    borderWidth: 4,
    borderColor: '#747e88', 
    borderLeftWidth: 0.5, 
    borderTopWidth: 0.5,
    shadowColor: 'gray',
    shadowOffset: { width: 10, height: 40 },
    shadowOpacity: 200,
    shadowRadius: 20,
    elevation: 20,

},
    InputContainer: {
      marginTop:0,
      height: 50,
      backgroundColor: '#4fbd4a',
      flexDirection: 'row',
      paddingHorizontal: 0,
      alignItems: 'center',
      marginLeft: 0,
      
    },

    img2: {
        // width: '70%',
        width: 60,
        height: 95,
        marginLeft: 20,
        
    },

    MonthContainer: {
        marginTop: 10,
        width: 350,
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent:'space-between',
        backgroundColor:'#f2f2f2',
        height:70,
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15,
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,

        //Shadow
    // borderWidth: 4,
    // borderColor: '#b8b8b8', 
    // borderLeftWidth: 0.5, 
    // borderTopWidth: 0.5,
    // shadowColor: 'gray',
    // shadowOffset: { width: 10, height: 40 },
    // shadowOpacity: 200,
    // shadowRadius: 20,
    // elevation: 20,
        
    },

    defaultButton1: {
        padding: 10,
        backgroundColor: '#73c734',
        borderRadius: 10,
        width: 110,
        // borderWidth: 6,
        // borderColor: '#b8b8b8', 
        // borderLeftWidth: 0.5, 
        // borderTopWidth: 0.5,
        // shadowColor: 'gray',
        // shadowOffset: { width: 10, height: 40 },
        // shadowOpacity: 200,
        // shadowRadius: 20,
        // elevation: 20,
    },


    
})