import React from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet, Text } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [

    'https://img.freepik.com/free-photo/cityscape-with-seagulls-black-white-photo-with-film-grain-effect_1401-369.jpg?w=740&t=st=1671691093~exp=1671691693~hmac=10051a90da9b063eb7c45f98fbb66d84c393df21ecbda67d87ddf94901088fd9',
    'https://img.freepik.com/free-photo/miniature-businessman-map-europe_1401-341.jpg?w=740&t=st=1671700476~exp=1671701076~hmac=e95577aea909d8b5e0948251fcaa9c6dac9b945ba7eb641b5ecdd9f235fd986b',
    'https://img.freepik.com/free-photo/old-wooden-door-with-bougainvillea_1401-306.jpg?w=740&t=st=1671700514~exp=1671701114~hmac=ea896216775b44a4f17a178558a76ddc69b6abd42f8940d1ce98272a8fa3a63e',
    'https://img.freepik.com/free-photo/long-exposure-pier_1401-392.jpg?w=740&t=st=1671700546~exp=1671701146~hmac=4e77c912bc1aa653f3dd9073adf27b94272b7a339ede3f5d9f979ccfbdfcb90e',
]

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                // contentContainerStyle={{margin:20}}
                pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scroll}>
                    {
                        images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={styles.image}
                            />
                        ))
                    }
                </ScrollView>
                <View style={styles.pagination}>
                    {
                        images.map((i, k) => (
                            <Text key={k} style={{ color: 'white' }}></Text>
                        ))
                    }

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        // margin: 50,
        width,
        height,
        marginTop:45,
        

    },
    scroll: { width, height,  },
    image: { width, height, resizeMode: 'cover' },
    pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }
})