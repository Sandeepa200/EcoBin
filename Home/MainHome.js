import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity, ImageBackground, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";

//Screens
import SearchScreen from './H-Screens/TabBar/SearchScreen';
import NotificationScreen from './H-Screens/TabBar/NotificationScreen';
import SettingsScreen from './H-Screens/TabBar/SettingsScreen';



//font Awesome Icons
import {FontAwesome} from '@expo/vector-icons'

//External Screens
import Days from './H-Screens/Days/Days';
import Main from './H-Screens/ImageSlide/Main';
import Vertical from './H-Screens/ImageVerticalSlide/Vertical';
import Screen1 from './H-Screens/Payment/Screen1';

const Tab = createBottomTabNavigator();

export default function MainHome() {

  const navigation = useNavigation();

  function HomeScreen() {
    return (
      
      <View style={styles.all}>
          <View style={styles.InputContainer}>
              <TouchableOpacity  onPress={() => navigation.navigate("EditProfile")}>
              <Image style={styles.img2}
                  source={require('../assets/Images/ProfilePic.png')}
                  resizeMode='contain'
              />
              </TouchableOpacity>
              <View >
                <Text style={{color:'white', fontWeight:'500',fontSize:20}}>Ross Stefani</Text>
                <Text style={{color:'white', fontWeight:'500',fontSize:16, marginBottom:16}}>Kandy | Primeross</Text>
                
              </View>
              
              {/* <TouchableOpacity>
                  <Image style={styles.img1}
                  source={require('../assets/Images/downfirst.png')}
                  resizeMode='contain'/>
              </TouchableOpacity> */}
              
          </View>
          <Days></Days>
          <Vertical></Vertical>
                  
                  

      </View>
      
    );
  }
  return (

      <Tab.Navigator>
        
        <Tab.Screen name="Home" component={HomeScreen}  options={{
        tabBarIcon: ({focused}) => (
          <View >
            <FontAwesome name='home' size={25} color={focused ? '#2aad91' : 'gray'}></FontAwesome>
          </View>
        ),headerShown:false
      }} />

      {/* <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: ({focused}) => (
          <View >
            <FontAwesome name='search' size={25} color={focused ? '#2aad91' : 'gray'}></FontAwesome>
          </View>
        ),headerShown:false
      }}  /> */}

        

    <Tab.Screen
         name="Taxes" component={Screen1} options={{
        tabBarIcon: ({focused}) => (
          <View >
            <FontAwesome name='dollar' size={25} color={focused ? '#2aad91' : 'gray'}></FontAwesome>
          </View>
        ),headerShown:false
      }}/>

         <Tab.Screen name="Notification" component={NotificationScreen} options={{
        tabBarIcon: ({focused}) => (
          <View >
            <FontAwesome name='bell' size={25} color={focused ? '#2aad91' : 'gray'}></FontAwesome>
          </View>
        ),headerShown:false
      }}  />

    <Tab.Screen
         name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({focused}) => (
          <View >
            <FontAwesome name='gear' size={25} color={focused ? '#2aad91' : 'gray'}></FontAwesome>
          </View>
        ),headerShown:false
      }}/>

      </Tab.Navigator>
      
    
  );
}

const styles = StyleSheet.create({
  all: {
      flex: 1,
      backgroundColor:'#42b357',
  },
  img1: {
    // width: '70%',
    width: 110,
    height: 55,
    margin: 5,
    marginLeft:55,
    marginTop: 0,
    marginBottom: 10,
},
  img2: {
    // width: '70%',
    width: 110,
    height: 72,
    margin: 3,
    marginTop: 0,
    marginBottom: 10,
},
  InputContainer: {
      height: 105,
      backgroundColor: '#42b357',
      // backgroundColor: 'pink',
      flexDirection: 'row',
      paddingHorizontal: 0,
      alignItems: 'center',
      marginTop: 50,
      margin: 0
  },

})