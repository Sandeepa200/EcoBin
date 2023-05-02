import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

export default function Vertical() {
    const navigation = useNavigation();
    return (
        <ScrollView style={{paddingHorizontal:30, backgroundColor: 'white',}}>
                <TouchableOpacity style={styles.bannerBtn} onPress={() => navigation.navigate("Complain")} >
                    <View style={{width: '50%', justifyContent: 'center', alignItems: 'center',  }} >
                        <Text style={{fontSize:19, fontWeight: 'bold' , }}>Complain</Text>
                    </View>
                    <View style={{width: '50%'}}>
                        <Image 
                            source={require('../ImageVerticalSlide/Images/complain.png')}  
                            style={{ height: '90%',width: '90%', marginRight:'auto', }} 
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bannerBtn} onPress={() => navigation.navigate("Information")} >
                    <View style={{width: '50%', justifyContent: 'center', alignItems: 'center',  }} >
                        <Text style={{fontSize:19, fontWeight: 'bold' , }}>Information</Text>
                    </View>
                    <View style={{width: '50%',  }}>
                        <Image 
                            source={require('../ImageVerticalSlide/Images/information.jpg')}  
                            style={{ height: '90%',width: '90%', marginRight:'auto', }} 
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bannerBtn} onPress={() => navigation.navigate("Guidelines")} >
                    <View style={{width: '50%', justifyContent: 'center', alignItems: 'center',  }} >
                        <Text style={{fontSize:19, fontWeight: 'bold' , }}>Guide-lines</Text>
                    </View>
                    <View style={{width: '50%',  }}>
                        <Image 
                            source={require('../ImageVerticalSlide/Images/guidelines.png')}  
                            style={{ height: '90%',width: '90%', marginRight:'auto', }} 
                        />
                    </View>
                </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    // TextArea: {
    //     height: 60,
    //     backgroundColor: '#e6e6e6',
    //     flexDirection: 'row',
    //     paddingHorizontal: 0,
    //     alignItems: 'center',
    //     marginTop: 50,
    //     margin: 0
    // }

    bannerBtn:{
        marginVertical: 10,
        backgroundColor: 'white', 
        height: 120, 
        borderRadius: 15, 
        borderWidth: 5,
        borderRadius: 20,
        borderColor: '#ddd',
        borderTopWidth: 0,
        borderLeftWidth: 1,
        shadowColor: '#ecf0f1',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
        display: 'flex', 
        flexDirection: 'row',
    }
})

