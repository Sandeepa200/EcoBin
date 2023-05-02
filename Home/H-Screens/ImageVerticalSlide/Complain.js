import * as React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,ImageBackground,SafeAreaView,ScrollView,Alert, Button, Animated,State} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

export default function SearchScreen() {

    const navigation = useNavigation();
    /*show hide buttons for new complaing and view Complain*/ 
    const [shouldShow, setShouldShow] = useState(false);
    const [viewGreenComplain, setviewGreenComplain] = useState(false);
    const [viewRedComplain, setviewRedComplain] = useState(false);

    const twoOptionAlertHandler = () => {
        //function to make two option alert
        Alert.alert(
          //title
          'Hello',
          //body
          'Do you want to delete this complain ?',
          [
            { text: 'Yes', onPress: () => console.log('Yes Pressed') },
            {
              text: 'No',
              onPress: () => console.log('No Pressed'),
              style: 'cancel',
            },
          ],
          { cancelable: false }
          //clicking out side of alert will not cancel
        );
      };
      const threeOptionAlertHandler = () => {
            //function to make three option alert
            Alert.alert(
              //title
              'Select an option',
              //body
              '',
              [
                { text: 'Cancel', onPress: () => console.log('May be Pressed')  },
                { text: 'Select image from gallery', onPress: () => console.log('Yes Pressed') },
                { text: 'Take a photo', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: true }
            );
          };
    
//#42b357 #f5f7f5
    return (
        <View style={{ flex: 1, flexDirection:'column', justifyContent:'flex-end' }} >
        
            <View style={{backgroundColor:'#f5f7f5', height:'100%', paddingVertical:40,paddingTop: 10, paddingHorizontal:15}}>
                <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal:10, paddingVertical:15}}>
                    <Text style={{fontSize:20, fontWeight:'bold',marginBottom:20}}>Your Complains</Text>
                    <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={{ marginLeft: 'auto', padding: 10, borderRadius: 12, marginBottom: 'auto', backgroundColor: '#42b357', display: 'flex', flexDirection: 'row'}}>
                        <AntDesign name="pluscircleo" size={21} color="white"  />
                        <Text style={{fontSize:16,  fontWeight:'bold', color: 'white', marginLeft: 10}} >ADD</Text> 
                    </TouchableOpacity>
                </View>
                        
                <ScrollView style={{paddingRight:8}} >
                    <TouchableOpacity onPress={() => setviewGreenComplain(!viewGreenComplain)} style={[ {backgroundColor: 'white', borderRadius:10, borderLeftWidth: 8, borderLeftColor: '#42b357', marginBottom: 15}]}>
                        <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal:10, paddingVertical:15}}>
                            <Text style={{fontSize:18,fontWeight:'600'}}>Complain Title</Text>
                            <TouchableOpacity onPress={twoOptionAlertHandler} style={{ marginLeft: 'auto', }} >
                                <Ionicons name="trash-bin" size={25} color="gray" />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0, paddingBottom: 5}}>
                            <FontAwesome name="calendar" size={15} color="black" style={{ marginRight: 8, paddingTop: 2}}/>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'grey'}}>Date : Dec 23, 2022</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0}}>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'black'}}>State : </Text> 
                            <Text style={{fontSize:15,  fontWeight:'bold', color: '#42b357'}}>Done </Text>
                        </View>
                    </TouchableOpacity>
                    {/* pending one */}
                    <TouchableOpacity onPress={() => setviewRedComplain(!viewRedComplain)} style={[ {backgroundColor: 'white', borderRadius:10, borderLeftWidth: 8, borderLeftColor: 'red', marginBottom: 15}]}>
                        <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal:10, paddingVertical:15}}>
                            <Text style={{fontSize:18,fontWeight:'600'}}>Complain Title</Text>
                            <TouchableOpacity onPress={twoOptionAlertHandler} style={{ marginLeft: 'auto', }} >
                                <Ionicons name="trash-bin" size={25} color="gray" />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0}}>
                            <FontAwesome name="calendar" size={15} color="black" style={{ marginRight: 8, paddingTop: 2}}/>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'grey'}}>Date : Dec 23, 2022</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0}}>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'black'}}>State : </Text> 
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'red'}}>Pending </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setviewGreenComplain(!viewGreenComplain)} style={[ {backgroundColor: 'white', borderRadius:10, borderLeftWidth: 8, borderLeftColor: '#42b357', marginBottom: 15}]}>
                        <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal:10, paddingVertical:15}}>
                            <Text style={{fontSize:18,fontWeight:'600'}}>Complain Title</Text>
                            <TouchableOpacity onPress={twoOptionAlertHandler} style={{ marginLeft: 'auto', }} >
                                <Ionicons name="trash-bin" size={25} color="gray" />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0}}>
                            <FontAwesome name="calendar" size={15} color="black" style={{ marginRight: 8, paddingTop: 2}}/>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'grey'}}>Date : Dec 23, 2022</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0}}>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'black'}}>State : </Text> 
                            <Text style={{fontSize:15,  fontWeight:'bold', color: '#42b357'}}>Done </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setviewGreenComplain(!viewGreenComplain)} style={[ {backgroundColor: 'white', borderRadius:10, borderLeftWidth: 8, borderLeftColor: '#42b357', marginBottom: 15}]}>
                        <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal:10, paddingVertical:15}}>
                            <Text style={{fontSize:18,fontWeight:'600'}}>Complain Title</Text>
                            <TouchableOpacity onPress={twoOptionAlertHandler} style={{ marginLeft: 'auto', }} >
                                <Ionicons name="trash-bin" size={25} color="gray" />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0}}>
                            <FontAwesome name="calendar" size={15} color="black" style={{ marginRight: 8, paddingTop: 2}}/>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'grey'}}>Date : Dec 23, 2022</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0}}>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'black'}}>State : </Text> 
                            <Text style={{fontSize:15,  fontWeight:'bold', color: '#42b357'}}>Done </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setviewRedComplain(!viewRedComplain)} style={[ {backgroundColor: 'white', borderRadius:10, borderLeftWidth: 8, borderLeftColor: 'red', marginBottom: 15}]}>
                        <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal:10, paddingVertical:15}}>
                            <Text style={{fontSize:18,fontWeight:'600'}}>Complain Title</Text>
                            <TouchableOpacity onPress={twoOptionAlertHandler} style={{ marginLeft: 'auto', }} >
                                <Ionicons name="trash-bin" size={25} color="gray" />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0}}>
                            <FontAwesome name="calendar" size={15} color="black" style={{ marginRight: 8, paddingTop: 2}}/>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'grey'}}>Date : Dec 23, 2022</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0}}>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'black'}}>State : </Text> 
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'red'}}>Pending </Text>
                        </View>
                    </TouchableOpacity> 
                </ScrollView>

                {shouldShow ?(
                    <View style={{backgroundColor:'white', height:'90%', paddingVertical:25, paddingHorizontal:15, borderTopLeftRadius: 15, borderTopRightRadius: 15,}}>
                        <Text style={{fontSize:20, fontWeight: 'bold', marginBottom: 25}} >New Complain</Text>
                        <Text style={{fontSize:18, }}>Complain Title</Text>
                        <TextInput style={styles.textBox}></TextInput>
                        <Text style={{fontSize:18, }}>Complain</Text>
                        <TextInput multiline={true} numberOfLines={5} style={styles.textBox}> </TextInput>
                        <Text style={{fontSize:18, }}>Upload photo</Text>
                        <TouchableOpacity onPress={threeOptionAlertHandler} style={{height: '25%',justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6ebe7', marginTop: 10, borderRadius: 15,}}>
                            <AntDesign name="plus" size={40} color="gray" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#42b357', marginTop: 20, borderRadius: 15, paddingVertical: 10,}}>
                            <Text style={{fontSize:18, fontWeight: 'bold',color:'white'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    
                    ):null}

                {viewGreenComplain ?(

                    <View style={{backgroundColor:'white', height:'90%', paddingVertical:25, paddingHorizontal:15, borderTopLeftRadius: 15, borderTopRightRadius: 15, borderTopWidth: 10, borderTopColor: '#42b357',}}>
                        <Text style={{fontSize:20, fontWeight: '600', marginBottom: 25}} >This is sample complain</Text>
                        
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0, paddingLeft: 0}}>
                            <FontAwesome name="calendar" size={15} color="black" style={{ marginRight: 8, paddingTop: 2}}/>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'grey'}}>Date : Dec 23, 2022</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0, paddingLeft: 0}}>
                            <Text style={{fontSize:18,  fontWeight:'bold', color: 'black'}}>State : </Text> 
                            <Text style={{fontSize:18,  fontWeight:'bold', color: '#42b357'}}>Done </Text>
                        </View>
                        
                        <Text style={{fontSize:16, }}>This is a sample complain which can be open by clicking the complain name in the main complain list. there are images below which can be upload when creating the complain</Text>
                        
                        <Text style={{fontSize:18,marginVertical:5,marginTop:10,fontWeight:'600'}}>Uploaded photos</Text>

                        <ScrollView>
                            
                            <View style={{height: 200, width: '100%', marginVertical:5 }}>
                                <Image source={require('./Images/pic2.jpg')} style={{height: 200, width: '100%'}}/>
                            </View>
                            <View style={{height: 200, width: '100%', marginVertical:5 }}>
                                <Image source={require('./Images/pic3.jpg')} style={{height: 200, width: '100%'}}/>
                            </View>
                            <View style={{height: 200, width: '100%', marginVertical:5 }}>
                                <Image source={require('./Images/pic4.jpg')} style={{height: 200, width: '100%'}}/>
                            </View>
                        </ScrollView>
                        
                        <TouchableOpacity onPress={() => setviewGreenComplain(!viewGreenComplain)}  style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#42b357', marginTop: 20, borderRadius: 15, paddingVertical: 10, width: '30%'}}>
                            <Text style={{fontSize:18, fontWeight: '600',color:'white'}}>Ok</Text>
                        </TouchableOpacity>
                    </View>

                    ):null} 
                
                {/*Red complain*/}

                {viewRedComplain ?(

                    <View style={{backgroundColor:'white', height:'90%', paddingVertical:25, paddingHorizontal:15, borderTopLeftRadius: 15, borderTopRightRadius: 15, borderTopWidth: 10, borderTopColor: 'red',}}>
                        <Text style={{fontSize:25, fontWeight: 'bold', marginBottom: 25}} >This is sample complain</Text>
                        
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0, paddingLeft: 0}}>
                            <FontAwesome name="calendar" size={15} color="black" style={{ marginRight: 8, paddingTop: 2}}/>
                            <Text style={{fontSize:15,  fontWeight:'bold', color: 'grey'}}>Date : Dec 23, 2022</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', padding: 10, paddingTop: 0, paddingLeft: 0}}>
                            <Text style={{fontSize:18,  fontWeight:'bold', color: 'black'}}>State : </Text> 
                            <Text style={{fontSize:18,  fontWeight:'bold', color: 'red'}}>Pending </Text>
                        </View>
                        
                        <Text style={{fontSize:20, }}>This is a sample complain which can be open by clicking the complain name in the main complain list. there are images below which can be upload when creating the complain</Text>
                        
                        <Text style={{fontSize:20,marginVertical:5 }}>Uploaded photos</Text>

                        <ScrollView>
                            
                            <View style={{height: 200, width: '100%', marginVertical:5 }}>
                                <Image source={require('./Images/pic2.jpg')} style={{height: 200, width: '100%'}}/>
                            </View>
                            <View style={{height: 200, width: '100%', marginVertical:5 }}>
                                <Image source={require('./Images/pic3.jpg')} style={{height: 200, width: '100%'}}/>
                            </View>
                            <View style={{height: 200, width: '100%', marginVertical:5 }}>
                                <Image source={require('./Images/pic4.jpg')} style={{height: 200, width: '100%'}}/>
                            </View>
                        </ScrollView>
                        
                        <TouchableOpacity onPress={() => setviewRedComplain(!viewRedComplain)}  style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#42b357', marginTop: 20, borderRadius: 15, paddingVertical: 10, width: '40%'}}>
                            <Text style={{fontSize:20, fontWeight: 'bold'}}>Ok</Text>
                        </TouchableOpacity>
                    </View>

                    ):null} 
                
            </View> 
        </View>
        
      );
}

                

const styles = StyleSheet.create({
    overLay:{
        backgroundColor: 'red',
        flex: 0.5,
        width: '95%',
        borderRadius: 20,
        
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
    

})
