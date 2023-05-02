import * as React from 'react';
import { StyleSheet, Text, View, Image, Easing, TouchableOpacity, SafeAreaView, ScrollView, Alert, Button, Animated, State, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { useRef } from 'react';

export default function Guidelines() {

    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const rotateValueHolder = new Animated.Value(0);


    rotateValueHolder.setValue(0);
    const startImageRotateFunction = () => {
      Animated.sequence([
        Animated.timing(rotateValueHolder, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(rotateValueHolder, {
        toValue: 2,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
      ]).start(() => startImageRotateFunction());
      
    };

    const RotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['0deg', '5deg', '-5deg'],
    });
    
    const scrollRef = useRef();

    const onPress2nd = () => {
        scrollRef.current?.scrollTo({
            x: 400,
            animated: true,
        });
    }

    const onPress3rd = () => {
        scrollRef.current?.scrollTo({
            x: 800,
            animated: true,
        });
    }
    const onPress4th = () => {
        scrollRef.current?.scrollTo({
            x: 1230,
            animated: true,
        });
    }
    const onPress5th = () => {
        scrollRef.current?.scrollTo({
            x: 1640,
            animated: true,
        });
    }
    const onPress1st = () => {
        scrollRef.current?.scrollTo({
            x: 0,
            animated: true,
        });
    }

    return (
        <View style={{ flex: 1, }}>
            <ScrollView horizontal={true} pagingEnabled={true} style={{ }} ref={scrollRef}>
                <View style={[styles.slide, { width: screenWidth,}]}>
                    <Animated.Image source={require('./Images/perishable.png')} onLoad={() => startImageRotateFunction()} style={[styles.slideImage, {transform: [{ rotate: RotateData }],}]} />
                    <Text style={styles.slideTopic}>Perishable Waste</Text>
                    <Text style={styles.slideDescript}>
                        Be kind to provide only perishable waste for the collectors.{'\n'}
                        Such as All kind of Food Waste, perisheble Parts of Plants, Green Waste, Sewage Waste
                    </Text>
                    <View style={{paddingHorizontal: 15, paddingTop: 10}}>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="#10b531" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>Collect all the perishable waste.</Text>
                        </View>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="#10b531" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>You will be notified at the begging of the collection date</Text>
                        </View>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="#10b531" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>After receiving arrival notification, They {'\n'}will help you to collect your garbage.</Text>
                        </View>
                    </View>
                    <View style={styles.sbtn} >
                        <TouchableOpacity onPress={onPress2nd} >
                           <Text style={styles.sbtnText}>Next slide -{'>'}</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.slide, { width: screenWidth,}]}>
                    <Animated.Image source={require('./Images/non-perishable.png')}  style={[styles.slideImage, {transform: [{ rotate: RotateData }],}]} />
                    <Text style={[styles.slideTopic,{color: '#2b97fc'}]}>Non-Perishable Waste</Text>
                    <Text style={styles.slideDescript}>
                        Be kind to provide only Non-perishable waste for the collectors.{'\n'}
                        Such as plastic, glass, wood, Rubber, non-organic waste, Asbastose, semi-industrial waste.
                    </Text>
                    <View style={{paddingHorizontal: 15, paddingTop: 10}}>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="#2b97fc" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>Collect all the Non-Perishable waste.</Text>
                        </View>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="#2b97fc" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>You will be notified at the begging of the collection date</Text>
                        </View>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="#2b97fc" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>After receiving arrival notification, They {'\n'}will help you to collect your garbage.</Text>
                        </View>
                    </View>
                    <View style={styles.sbtn} >
                        <TouchableOpacity onPress={onPress3rd} >
                           <Text style={[styles.sbtnText, {color: '#2b97fc', borderColor: '#2b97fc',}]}>Next slide -{'>'}</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.slide, { width: screenWidth,}]}>
                    <Animated.Image source={require('./Images/paper.png')}  style={[styles.slideImage, {transform: [{ rotate: RotateData }],}]} />
                    <Text style={[styles.slideTopic,{color: '#b4cf2d'}]}>Paper Waste</Text>
                    <Text style={styles.slideDescript}>
                        Be kind to provide only perishable waste for the collectors.{'\n'}
                        Such as All kind of paperbased products, Books, Newspapers, Paperbags
                    </Text>
                    <View style={{paddingHorizontal: 15, paddingTop: 10}}>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="#b4cf2d" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>Collect all the paper waste.</Text>
                        </View>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="#b4cf2d" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>You will be notified at the begging of the collection date</Text>
                        </View>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="#b4cf2d" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>After receiving arrival notification, They {'\n'} will help you to collect your garbage.</Text>
                        </View>
                    </View>
                    <View style={styles.sbtn} >
                        <TouchableOpacity onPress={onPress4th} >
                           <Text style={[styles.sbtnText, {color: '#b4cf2d', borderColor: '#b4cf2d',}]}>Next slide -{'>'}</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.slide, { width: screenWidth,}]}>
                    <Animated.Image source={require('./Images/metal.png')}  style={[styles.slideImage, {transform: [{ rotate: RotateData }],}]} />
                    <Text style={[styles.slideTopic,{color: 'black'}]}>Coconut shells & Metal waste</Text>
                    <Text style={styles.slideDescript}>
                        Be kind to provide only Coconut shells and Metal waste for the collectors.{'\n'}
                        Such as All kind of Coconut shells, Barels, {'\n'}Metal cans, Tins, Aluminum, Iron, etc.
                    </Text>
                    <View style={{paddingHorizontal: 15, paddingTop: 10}}>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="black" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>Collect all the Coconut & Metal waste.</Text>
                        </View>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="black" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>You will be notified at the begging of the collection date</Text>
                        </View>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="black" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>After receiving arrival notification, They {'\n'} will help you to collect your garbage.</Text>
                        </View>
                    </View>
                    <View style={styles.sbtn} >
                        <TouchableOpacity onPress={onPress5th} >
                           <Text style={[styles.sbtnText, {color: 'black', borderColor: 'black',}]}>Next slide -{'>'} </Text> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.slide, { width: screenWidth,}]}>
                    <Animated.Image source={require('./Images/e-waste.png')}  style={[styles.slideImage, {transform: [{ rotate: RotateData }],}]} />
                    <Text style={[styles.slideTopic,{color: 'black'}]}>E-waste</Text>
                    <Text style={styles.slideDescript}>
                        Be kind to provide only Electronic Waste for the collectors.{'\n'}
                        Such as All kind of unusable Electronic products, {'\n'}Printers, Televisions, Mobile phones, Computers, etc.
                    </Text>
                    <View style={{paddingHorizontal: 15, paddingTop: 10}}>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="purple" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>Collect all the E-waste.</Text>
                        </View>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="purple" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>You will be notified at the begging of the collection date</Text>
                        </View>
                        <View style={styles.stepLine}>
                            <AntDesign name="checkcircle" size={30} color="purple" style={{ width: 30, }} />
                            <Text style={styles.stepLineText}>After receiving arrival notification, They {'\n'} will help you to collect your garbage.</Text>
                        </View>
                    </View>
                    <View style={styles.sbtn} >
                        <TouchableOpacity onPress={onPress1st} >
                           <Text style={[styles.sbtnText, {color: 'purple', borderColor: 'purple',}]}>{'<'}- Next slide</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
        paddingHorizontal: 15,
        height: 700,
        //backgroundColor: 'green',
    },
    slideImage: {
        height: '50%',
        resizeMode: 'center',
        width: '100%',
        marginVertical: 20,
        
    },
    slideTopic: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#10b531',
    },
    slideDescript: {
        fontSize: 15,
        marginTop: 15,
        textAlign: 'center',
        color: '#4a4a4a',
    },
    stepLine:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
        overflow: 'hidden',
        //backgroundColor: 'red'
    },
    stepLineText: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    sbtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 10,
    },
    sbtnText:{
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#10b531', 
        borderColor: '#10b531', 
        borderRadius: 10, 
        borderBottomWidth: 2, 
        padding: 5, 
        paddingHorizontal: 20,
    }
});