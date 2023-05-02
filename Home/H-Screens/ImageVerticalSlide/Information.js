import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Alert, Button, Animated, State, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { useRef } from 'react';

export default function Information() {

    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;


    const scrollRef = useRef();

    const onPressTop = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }
    const onPress2nd = () => {
        scrollRef.current?.scrollTo({
            y: 700,
            animated: true,
        });
    }
    const onPress3rd = () => {
        scrollRef.current?.scrollTo({
            y: 1480,
            animated: true,
        });
    }
    const onPress5th = () => {
        scrollRef.current?.scrollTo({
            y: 2950,
            animated: true,
        });
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0 }}>
            <ScrollView horizontal={false} pagingEnabled={true} ref={scrollRef}>
                <View style={styles.infoGroup}>
                    <Image source={require('./Images/lesson1.png')} style={styles.infoImage} />
                    <Text style={styles.topic}>Our Nature is Our Life</Text>
                    <Text style={styles.descript}>
                        Our forests, rivers, oceans and soils provide us with the food we eat, the air we breathe,
                        the water we irrigate our crops with. We also rely on them for numerous other goods and services
                        we depend on for our health, happiness and prosperity. These natural assets are often called the
                        world's 'natural capital'.
                    </Text>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={onPress2nd}>
                            <Text style={{ fontSize: 35, fontWeight: '900', color: '#4287f5' }}>---
                                <AntDesign name="downcircleo" size={30} color="#4287f5" />
                                ---</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.infoGroup}>
                    <Image source={require('./Images/lesson2.png')} style={styles.infoImage} />
                    <Text style={styles.topic}>More Waste Means Less Life</Text>
                    <Text style={styles.descript}>
                        Poor waste management contributes to climate change and air pollution, and directly affects many ecosystems
                        and species. Landfills, considered the last resort in the waste hierarchy, release methane, a very powerful
                        greenhouse gas linked to climate change.
                    </Text>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={onPress3rd}>
                            <Text style={{ fontSize: 35, fontWeight: '900', color: '#4287f5' }}>---
                                <AntDesign name="downcircleo" size={30} color="#4287f5" />
                                ---</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView horizontal={true} pagingEnabled={true}>
                    <View style={[styles.infoGroup, { width: screenWidth, height: 800, }]}>
                        <Image source={require('./Images/lesson5.png')} style={styles.infoImage} />
                        <Text style={[styles.topic, { textAlign: 'center', color: '#f7af11' }]}>The 3 'R's Concept</Text>
                        <Text style={styles.descript}>
                            Reduce, Reuse, Recycle – these three 'R' words are an important part of sustainable living, as
                            they help to cut down on the amount of waste we have to throw away.
                        </Text>
                        <View style={styles.icons}>
                            <Text style={{ fontSize: 35, fontWeight: '900', color: '#4287f5' }}>---
                                <AntDesign name="rightcircleo" size={30} color="#4287f5" />
                                ---</Text>
                        </View>
                    </View>
                    <View style={[styles.infoGroup, { width: screenWidth }]}>
                        <Image source={require('./Images/lesson3.png')} style={styles.infoImage} />
                        <Text style={[styles.topic, { textAlign: 'center', color: '#f7af11' }]}>Reduse</Text>
                        <Text style={styles.descript}>
                            Reduce the amount of waste you produce.
                        </Text>
                        <View style={styles.icons}>
                            <Text style={{ fontSize: 35, fontWeight: '900', color: '#4287f5' }}>---
                                <AntDesign name="rightcircleo" size={30} color="#4287f5" />
                                ---</Text>
                        </View>
                    </View>
                    <View style={[styles.infoGroup, { width: screenWidth }]}>
                        <Image source={require('./Images/lesson4.png')} style={styles.infoImage} />
                        <Text style={[styles.topic, { textAlign: 'center', color: '#f7af11' }]}>Reuse</Text>
                        <Text style={styles.descript}>
                            Reuse items as much as you can before replacing them.
                        </Text>
                        <View style={styles.icons}>
                            <Text style={{ fontSize: 35, fontWeight: '900', color: '#4287f5' }}>---
                                <AntDesign name="rightcircleo" size={30} color="#4287f5" />
                                ---</Text>
                        </View>
                    </View>
                    <View style={[styles.infoGroup, { width: screenWidth }]}>
                        <Image source={require('./Images/special.png')} style={styles.infoImage} />
                        <Text style={[styles.topic, { textAlign: 'center', color: '#f7af11' }]}>Recycle</Text>
                        <Text style={styles.descript}>
                            Recycle items wherever possible.
                        </Text>
                        <View style={styles.icons}>
                            <Text style={{ fontSize: 35, fontWeight: '900', color: '#4287f5' }}>---
                                <AntDesign name="rightcircleo" size={30} color="#4287f5" />
                                ---</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.listGroup}>
                    <ImageBackground source={require('./Images/list.png')} style={styles.listImage}>
                        <Text style={styles.listTopic}>Special Days of Nature lovers</Text>
                        <Text style={[styles.listTopic, { paddingTop: 0, paddingBottom: 30 }]}>-------------------</Text>
                        <View style={{ paddingHorizontal: 40, paddingRight: 20 }}>
                            <Text style={styles.listItems}># March 21 - International Day Of Forest.</Text>
                            <Text style={styles.listItems}># March 22 - International Water Day.</Text>
                            <Text style={[styles.listItems, {}]}># April 22 - International Mother Earth Day.</Text>
                            <Text style={styles.listItems}># April 28 - World Day For Safety & Health Work.</Text>
                            <Text style={styles.listItems}># May 10 - World Migratory Bird Day.</Text>
                            <Text style={styles.listItems}># May 22 - International Day For Biology Diversity.</Text>
                            <Text style={styles.listItems}># April 22 - International Mother Earth Day.</Text>
                            <Text style={styles.listItems}># June 5 - World Environment Day.</Text>
                            <Text style={styles.listItems}># June 8 - World Oceans Day.</Text>
                            <Text style={styles.listItems}># July 3 - International Plastic Bag Free Day.</Text>
                            <Text style={styles.listItems}># September 16 - World Cleanup Day.</Text>
                            <Text style={styles.listItems}># September 21 - Zero Emissions Day.</Text>
                            <Text style={styles.listItems}># December 11 - International Mountain Day.</Text>
                        </View>
                        <View style={styles.icons}>
                        <TouchableOpacity onPress={onPress5th}>
                            <Text style={{ fontSize: 35, fontWeight: '900', color: '#4287f5' }}>---
                                <AntDesign name="downcircleo" size={30} color="#4287f5" />
                                ---</Text>
                        </TouchableOpacity>
                        </View>
                    </ImageBackground>


                </View>
                <View style={styles.infoGroup}>
                    <Image source={require('./Images/lesson6.png')} style={styles.infoImage} />
                    <Text style={styles.topic}>Let's assemble to protect our home</Text>
                    <Text style={styles.descript}>
                        Our forests, rivers, oceans and soils provide us with the food we eat, the air we breathe,
                        the water we irrigate our crops with. We also rely on them for numerous other goods and services
                        we depend on for our health, happiness and prosperity. These natural assets are often called the
                        world's 'natural capital'.
                    </Text>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={onPressTop}>
                            <Text style={{ fontSize: 35, fontWeight: '900', color: '#4287f5' }}>---
                                <AntDesign name="upcircleo" size={30} color="#4287f5" />
                                ---</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    infoGroup: {
        paddingHorizontal: 15,
        paddingBottom: 5,
        paddingVertical: 40,
        height: 700,
        flexDirection: 'column',
        justifyContent: 'flex-end',

    },

    infoImage: {
        resizeMode: 'center',
        height: '70%',
        width: '100%',
    },

    topic: {
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#4287f5',
    },
    descript: {
        fontWeight: '500',
        color: '#8c8c8c',
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 10,
    },
    icons: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        //backgroundColor: 'blue'
    },
    listGroup: {
        paddingBottom: 5,
        paddingVertical: 30,
        height: 750,
        //backgroundColor: 'red',

    },
    listImage: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    listTopic: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 40,
    },
    listItems: {
        fontSize: 17,
        marginBottom: 8,
        color: '#525454',
    },

})