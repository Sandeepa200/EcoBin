import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Alert, Button, Animated, State } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';

export default function TermsConditions() {

    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);

    return (

        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginBottom: 50 }}>
                <View>
                    <Image source={require('../Images/terms.jpg')}
                        style={{ height: 300, width: '100%', marginVertical: 20 }}
                    />
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, paddingHorizontal: 30, marginBottom: 10 }}>
                        Terms & Conditions
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 25, }}>
                    <Text style={styles.descrip}>
                        Last updated: January 05, 2023{'\n'}{'\n'}

                        Please read these terms and conditions carefully before using Our Service.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head1}>
                        Interpretation and Definitions {'\n'}
                        -------------------------------
                    </Text>
                    <Text style={styles.head2}>
                        Interpretations
                    </Text>
                    <Text style={styles.descrip}>
                        The words of which the initial letter is capitalized have meanings defined
                        under the following conditions. The following definitions shall have the same
                        meaning regardless of whether they appear in singular or in plural.
                    </Text>
                    <Text style={styles.head2}>
                        Definitions
                    </Text>
                    <Text style={styles.descrip}>
                        For the purposes of this Privacy Policy:{'\n'}{'\n'}

                        * <Text style={{ fontWeight: 'bold' }}>Account</Text> means a unique account created for You to access our Service or
                        parts of our Service.{'\n'}{'\n'}

                        * <Text style={{ fontWeight: 'bold' }}>Affiliate</Text> means an entity that controls, is controlled by or is under
                        common control with a party, where "control" means ownership of 50% or
                        more of the shares, equity interest or other securities entitled to vote
                        for election of directors or other managing authority.{'\n'}{'\n'}

                        * <Text style={{ fontWeight: 'bold' }}>Application</Text> refers to SL ECOBIN, the software program provided by the
                        Company.{'\n'}{'\n'}

                        * <Text style={{ fontWeight: 'bold' }}>Company</Text> (referred to as either "the Company", "We", "Us" or "Our" in this
                        Agreement) refers to SL ECOBIN, SL ECOBIN, Kandy, Sri Lanka.{'\n'}{'\n'}

                        * <Text style={{ fontWeight: 'bold' }}>Country</Text> refers to: Sri Lanka{'\n'}{'\n'}

                        * <Text style={{ fontWeight: 'bold' }}>Device</Text> means any device that can access the Service such as a computer, a
                        cellphone or a digital tablet.{'\n'}{'\n'}

                        * <Text style={{ fontWeight: 'bold' }}>Personal</Text> Data is any information that relates to an identified or
                        identifiable individual.{'\n'}{'\n'}

                        * <Text style={{ fontWeight: 'bold' }}>Service</Text> refers to the Application.{'\n'}{'\n'}

                        * <Text style={{ fontWeight: 'bold' }}>Service Provider</Text> means any natural or legal person who processes the data
                        on behalf of the Company. It refers to third-party companies or
                        individuals employed by the Company to facilitate the Service, to provide
                        the Service on behalf of the Company, to perform services related to the
                        Service or to assist the Company in analyzing how the Service is used.{'\n'}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Terms & Conditions ")}>
                        <Text style={{color:'blue', textAlign: 'right', fontSize: 17}}>See more...</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 30,}}>
                        <Checkbox uncheckedColor='#1b574f' color="#4fbd4a" status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }}/>
                        <Text style={{fontSize: 17, color: '#233863', fontWeight: 'bold' }}>Agree with Terms & Conditions</Text>
                    </View>
                </View>
            </View>
        </ScrollView>


    );
}
const styles = StyleSheet.create({
    descrip: {
        fontSize: 15,
        marginBottom: 0
    },
    head1: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    head2: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
    },
});