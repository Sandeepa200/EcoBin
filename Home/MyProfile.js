import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, } from "react-native";
import COLORS from "../Resources/colors";

export default function MyProfile() {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.all}>
                <View style={styles.InputContainer}>
                    <Image style={styles.img2}
                        source={require('../assets/Images/TextLogo.png')}
                        resizeMode='contain'
                    />
                    {/* <TextInput style={styles.textInput} placeholder='Your email address'/> */}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    all: {
        flex: 1
    },
    InputContainer: {
        height: 55,
        backgroundColor: COLORS.grey,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginTop: 50,
        margin: 20
    },
    img2: {
        // width: '70%',
        width: 110,
        height: 105,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
    },
})