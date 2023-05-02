import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Alert, Button, Animated, State } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

export default function AboutUs() {

    const navigation = useNavigation();

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 70, fontWeight: 'bold', }}>
                        {'\t'}SL
                        <Image style={{ width: 80, height: 80, }} source={require('../../../../assets/Images/logo.png')}
                            resizeMode='contain' />
                        {'\n'}<Text style={{ color: 'green' }}>ECO</Text>{'\n'}BIN
                    </Text>
                </View>
                <View style={{ width: '50%', marginLeft: 'auto' }}>
                    <Image resizeMode='contain' source={require('./Images/mockTBf1.png')} style={{ height: 400, width: '100%', }} />
                </View>
            </View>
            <View style={{ backgroundColor: '#d0d9ce', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Smart Waste Managment System</Text>
            </View>

            <View style={{ backgroundColor: '#d0d9ce', width: '100%' }}>
                <Text style={{ fontSize: 15, textAlign: 'center', paddingHorizontal: 15 }}>
                    Today the world is a very busy place, So people always trying to work fast and save time to get rest and enjoy their life.
                    Then why are you still wasting your valuable time waiting for a trash truck? or why are you still missing your organic waste collecting day and suffering from the bad smell?{'\n'}{'\n'}
                    Waite! Waite!, Don't even think to throw it out to our nature. Use our App to schedule your waste Management. And you can earn Extra money by handing over your
                    recyclable waste to a collection vehicle. Because we are notifying you with the correct days according to each waste collecting category...{'\n'}

                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.gbox}>
                    <FontAwesome5 name="clock" size={100} color="black" style={styles.boxicon} />
                    <Text style={styles.boxname}>Save Time</Text>
                </View>
                <View style={styles.gbox}>
                    <FontAwesome5 name="leaf" size={100} color="black" style={styles.boxicon} />
                    <Text style={styles.boxname}>Protect Nature</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.gbox}>
                    <FontAwesome5 name="money-bill-wave" size={100} color="black" style={styles.boxicon} />
                    <Text style={styles.boxname}>Earn Extra Money</Text>
                </View>
                <View style={styles.gbox}>
                    <Ionicons name="trash-bin" size={100} color="black" style={styles.boxicon} />
                    <Text style={styles.boxname}>No More Waste</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%', marginLeft: 'auto' }}>
                    <Image resizeMode='contain' source={require('./Images/mockTB1f2.png')} style={{ height: 400, width: '100%', }} />
                </View>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', }}>
                        Clean house {'\n'}{'\n'}Clean mind...
                    </Text>
                </View>
            </View>
            <View style={{ paddingTop: 20, paddingHorizontal: 20, backgroundColor: '#d5fccc' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }} >What is SL ECO BIN...</Text>
                <Text style={{ fontSize: 15 }}>
                    We are "App Monsters", People in many urban areas usually forget or miss the dates on
                    which waste-collecting trucks come. So as a solution to this problem, we created this
                    app called "SL ECO BIN".{'\n'}{'\n'}
                    The project is based on a waste management system and the importance of using mobile
                    application to improve the way waste collection management work. We design a model
                    accompanied by a mobile prototype application that can connect the different waste
                    generators with waste collectors. Through our system, users are able to track garbage truck arrival
                    times and dates and It is possible to notify the route where the garbage truck is coming.
                    If the waste truck doesn't come, a notification will appear in the app.
                    {'\n'}{'\n'}
                    A handy app for those who are used to a busy lifestyle. It is also easy to use, updated
                    daily and provides accurate data. Our app provides services such as days, times, garbage
                    collection lanes, the type of garbage collected on that day (ex=perishable garbage,
                    non-perishable garbage), and if Garbage collectors are unable to come to collect garbage
                    on the scheduled date, They will be informed through a notification in our app.
                </Text>
            </View>
            <View style={{ paddingTop: 20, paddingHorizontal: 20, paddingBottom: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Follow Us on...</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://google.com')}>
                        <Image source={require('../../../../assets/Images/google-logo.png')} style={{ width: 45, height: 40, marginTop: 30, marginBottom: '10%', margin: 20, marginLeft: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://facebook.com')}>
                        <Image source={require('../../../../assets/Images/Facebook-Logo.png')} style={{ width: 40, height: 40, marginTop: 30, marginBottom: '10%', margin: 20 }} resizeMode='contain' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://twitter.com')}>
                        <Image source={require('../../../../assets/Images/Twitter-logo.png')} style={{ width: 40, height: 40, marginTop: 30, marginBottom: '10%', margin: 20 }} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    gbox: {
        width: '50%',
        height: 200,
        backgroundColor: '#33d40f',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    boxicon: {
        opacity: 0.7,
    },
    boxname: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.7,
    }
});