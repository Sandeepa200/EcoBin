import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Animated, Text, View, Image, TextInput, Button, TouchableOpacity, SafeAreaView, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Slider from 'react-native-slide-to-unlock';
import React, { useCallback, useState, useEffect } from 'react';



export default function ScreenOne() {

  const navigation = useNavigation();

  const dot1Value = React.useRef(new Animated.Value(0)).current;
  const dot2Value = React.useRef(new Animated.Value(0)).current;
  const dot3Value = React.useRef(new Animated.Value(0)).current;
  const dot4Value = React.useRef(new Animated.Value(0)).current;
  
  Animated.sequence([
    Animated.timing(dot1Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot1Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot2Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot2Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot3Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot3Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot4Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot4Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot1Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot1Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot2Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot2Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot3Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot3Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot4Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot4Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot1Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot1Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot2Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot2Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot3Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot3Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(dot4Value, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(dot4Value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
  ]).start(({finished}) => {
    if(finished){
      navigation.navigate("LoginScreen");
    }
  });
  

  
  return (
    <ScrollView>
      <View style={styles.all}>
        <View style={styles.pic}>
          <Image style={styles.img1} source={require('../assets/Images/logo.png')}
            resizeMode='contain'
          />
          <Text style={{fontSize: 35, textAlign: 'center', fontWeight: 'bold', color: 'green'}}>SL ECOBIN</Text>
        </View>

        <View style={styles.MText}>
          
          <Text style={{ textAlign: 'center', fontSize: 25, color: '#233863', fontWeight:'400' }}>
            Fresh air for your breath is our responsibility</Text>
        </View>
        
        <View style={styles.dot}>
        <Animated.View style={{
          width:20, 
          height: 20, 
          backgroundColor: 'green', 
          borderRadius: 50,
          transform: [
            {
              translateY: dot1Value.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -20],
              }),
            }
          ],
        }} />
        <Animated.View style={{
          width:20, 
          height: 20, 
          backgroundColor: 'green', 
          borderRadius: 50,
          transform: [
            {
              translateY: dot2Value.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -20],
              }),
            }
          ],
        }} />
        <Animated.View style={{
          width:20, 
          height: 20, 
          backgroundColor: 'green', 
          borderRadius: 50,
          transform: [
            {
              translateY: dot3Value.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -20],
              }),
            }
          ],
        }} />
        <Animated.View style={{
          width:20, 
          height: 20, 
          backgroundColor: 'green', 
          borderRadius: 50,
          transform: [
            {
              translateY: dot4Value.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -20],
              }),
            }
          ],
        }} />
        </View>

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    alignItems: "center",
  },
  img1: {
    width: 380,
    height: 470,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    
  },
  defaultButton: {
    padding: 15,
    backgroundColor: '#1b574f',
    borderRadius: 20,
    marginTop: 30,
    width: 180,
    marginLeft: 114,

  },
  MText: {
    alignItems: 'center',
    marginTop: 40,
    margin: 25,
    fontSize: 10,
    fontWeight: '400',
  },
  dot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '30%', 
    
  }

});

