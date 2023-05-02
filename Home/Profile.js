import { useNavigation } from "@react-navigation/native";
import React from "react";
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,ImageBackground,SafeAreaView,ScrollView,} from "react-native";
 
export default function Profile() {
 
const navigation = useNavigation();

  return (
   <ScrollView>
    <ImageBackground source={require('../assets/Images/white.jpg')} >

    <View style={StyleSheet.all}>
        <View style={styles.pic}>
        <Image style={styles.img1}source={require('../assets/Images/LoginLogo.png')}
          resizeMode='contain'
        />
    </View>    

    <View>
        <TouchableOpacity style={{margin:20,}} onPress={()=>navigation.navigate("LoginScreen")}>
            <Text style={{color:'#8bbcc9',fontSize:20,fontWeight: '500',}}>LogOut</Text>
        </TouchableOpacity>
    </View>

        <View style={styles.container2}>

            <TouchableOpacity onPress={()=>navigation.navigate("MyProfile")}
             style={[styles.square2, {backgroundColor: '#d8f0ec',marginBottom:30}]}>
                <Text style={styles.txt2}>My Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")}
            style={[styles.square2, {backgroundColor: '#d8f0ec',marginBottom:30,}]}>
                <Text style={styles.txt2}>Guidelines</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("MainHome")}
             style={[styles.square2, {backgroundColor: '#d8f0ec',marginBottom:30,}]}>
                <Text style={styles.txt2}>Shedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.square2, {backgroundColor: '#d8f0ec',marginBottom:30,}]}>
                <Text style={styles.txt2}>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.square2, {backgroundColor: '#d8f0ec',marginBottom:30,}]}>
                <Text style={styles.txt2}>Information</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Report")} style={[styles.square2, {backgroundColor: '#d8f0ec',}]}>
                <Text style={styles.txt2}>Reports</Text>
            </TouchableOpacity>

        </View>

             <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>

                <Image style={styles.img2}source={require('../assets/Images/TextLogo.png')}
                resizeMode='contain'
                />

            </View>   

        </View>
    </ImageBackground>
    </ScrollView>
  
     
  );
}
 
const styles = StyleSheet.create({
    img1: {
        // width: '70%',
        width:415,
        height:235,
        marginLeft: 0,
        marginTop:40, 
      },
      container2: {
        alignItems: 'center',
        marginTop:5,
        backgroundColor:'white',
       
      },
      square2: {
        width: 380,
        height: 40,
        justifyContent: 'center',
        borderRadius:15,
     
      }, 
      txt2: {
        textAlign: 'center',
        color:'#489494',
        // fontFamily: '',
        fontSize:20,
        fontWeight: '500',
      },
      img2: {
        // width: '70%',
        width:110,
        height:105,
        marginLeft: 0,
        marginTop:0, 
        marginBottom:0,
      },
 
});