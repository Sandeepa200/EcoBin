import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Alert, Button, Animated, State } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';

export default function PrivacyPolicy() {

    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);

    return (

        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ marginBottom: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}> 
                    <Image source={require('../Images/privacy.jpg')}
                        style={{ height: 300, width: '80%', marginVertical: 20, }}
                    />
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 40, paddingHorizontal: 30, marginBottom: 10 }}>
                        Privacy Policy
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 25, }}>
                    <Text style={styles.descrip}>
                        Last updated: January 05, 2023{'\n'}{'\n'}

                        This Privacy Policy describes Our policies and procedures on the collection,
                        use and disclosure of Your information when You use the Service and tells You
                        about Your privacy rights and how the law protects You.{'\n'}{'\n'}

                        We use Your Personal data to provide and improve the Service. By using the
                        Service, You agree to the collection and use of information in accordance with
                        this Privacy Policy.{'\n'}
                    </Text>

                    <Text style={styles.head1}>
                        Collecting and Using Your Personal Data {'\n'}
                        ---------------------------------------
                    </Text>
                    <Text style={styles.head2}>
                        Personal Data
                    </Text>
                    <Text style={styles.descrip}>
                        While using Our Service, We may ask You to provide Us with certain personally
                        identifiable information that can be used to contact or identify You.
                        Personally identifiable information may include, but is not limited to:{'\n'}{'\n'}

                        * Email address{'\n'}{'\n'}

                        * First name and last name{'\n'}{'\n'}

                        * Phone number{'\n'}{'\n'}

                        * Address, State, Province, ZIP/Postal code, City{'\n'}{'\n'}

                        * Usage Data{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head2}>
                        Usage Data
                    </Text>
                    <Text style={styles.descrip}>
                        Usage Data is collected automatically when using the Service.{'\n'}{'\n'}

                        Usage Data may include information such as Your Device's Internet Protocol
                        address (e.g. IP address), browser type, browser version, the pages of our
                        Service that You visit, the time and date of Your visit, the time spent on
                        those pages, unique device identifiers and other diagnostic data.{'\n'}{'\n'}

                        When You access the Service by or through a mobile device, We may collect
                        certain information automatically, including, but not limited to, the type of
                        mobile device You use, Your mobile device unique ID, the IP address of Your
                        mobile device, Your mobile operating system, the type of mobile Internet
                        browser You use, unique device identifiers and other diagnostic data.{'\n'}{'\n'}

                        We may also collect information that Your browser sends whenever You visit our
                        Service or when You access the Service by or through a mobile device.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head2}>
                        Information Collected while Using the Application
                    </Text>
                    <Text style={styles.descrip}>
                        While using Our Application, in order to provide features of Our Application,
                        We may collect, with Your prior permission:{'\n'}{'\n'}

                        * Information regarding your location{'\n'}{'\n'}

                        * Pictures and other information from your Device's camera and photo library{'\n'}{'\n'}


                        We use this information to provide features of Our Service, to improve and
                        customize Our Service. The information may be uploaded to the Company's
                        servers and/or a Service Provider's server or it may be simply stored on Your
                        device.{'\n'}{'\n'}

                        You can enable or disable access to this information at any time, through Your
                        Device settings.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head2}>
                        Use of Your Personal Data
                    </Text>
                    <Text style={styles.descrip}>
                        The Company may use Personal Data for the following purposes:{'\n'}{'\n'}

                        * To provide and maintain our Service , including to monitor the usage of
                        our Service.{'\n'}{'\n'}

                        * To manage Your Account: to manage Your registration as a user of the
                        Service. The Personal Data You provide can give You access to different
                        functionalities of the Service that are available to You as a registered
                        user.{'\n'}{'\n'}

                        * For the performance of a contract: the development, compliance and
                        undertaking of the purchase contract for the products, items or services
                        You have purchased or of any other contract with Us through the Service.{'\n'}{'\n'}

                        * To contact You: To contact You by email, telephone calls, SMS, or other
                        equivalent forms of electronic communication, such as a mobile
                        application's push notifications regarding updates or informative
                        communications related to the functionalities, products or contracted
                        services, including the security updates, when necessary or reasonable for
                        their implementation.{'\n'}{'\n'}

                        * To provide You with news, special offers and general information about
                        other goods, services and events which we offer that are similar to those
                        that you have already purchased or enquired about unless You have opted
                        not to receive such information.{'\n'}{'\n'}

                        * To manage Your requests: To attend and manage Your requests to Us.{'\n'}{'\n'}

                        * For business transfers: We may use Your information to evaluate or conduct
                        a merger, divestiture, restructuring, reorganization, dissolution, or
                        other sale or transfer of some or all of Our assets, whether as a going
                        concern or as part of bankruptcy, liquidation, or similar proceeding, in
                        which Personal Data held by Us about our Service users is among the assets
                        transferred.{'\n'}{'\n'}

                        * For other purposes : We may use Your information for other purposes, such
                        as data analysis, identifying usage trends, determining the effectiveness
                        of our promotional campaigns and to evaluate and improve our Service,
                        products, services, marketing and your experience.{'\n'}{'\n'}


                        We may share Your personal information in the following situations:{'\n'}{'\n'}

                        * With Service Providers: We may share Your personal information with
                        Service Providers to monitor and analyze the use of our Service, to
                        contact You.{'\n'}{'\n'}
                        * For business transfers: We may share or transfer Your personal information
                        in connection with, or during negotiations of, any merger, sale of Company
                        assets, financing, or acquisition of all or a portion of Our business to
                        another company.{'\n'}{'\n'}
                        * With Affiliates: We may share Your information with Our affiliates, in
                        which case we will require those affiliates to honor this Privacy Policy.
                        Affiliates include Our parent company and any other subsidiaries, joint
                        venture partners or other companies that We control or that are under
                        common control with Us.{'\n'}{'\n'}
                        * With business partners: We may share Your information with Our business
                        partners to offer You certain products, services or promotions.{'\n'}{'\n'}
                        * With other users: when You share personal information or otherwise
                        interact in the public areas with other users, such information may be
                        viewed by all users and may be publicly distributed outside.{'\n'}{'\n'}
                        * With Your consent : We may disclose Your personal information for any
                        other purpose with Your consent.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head2}>
                        Retention of Your Personal Data
                    </Text>
                    <Text style={styles.descrip}>
                        The Company will retain Your Personal Data only for as long as is necessary
                        for the purposes set out in this Privacy Policy. We will retain and use Your
                        Personal Data to the extent necessary to comply with our legal obligations
                        (for example, if we are required to retain your data to comply with applicable
                        laws), resolve disputes, and enforce our legal agreements and policies.{'\n'}{'\n'}

                        The Company will also retain Usage Data for internal analysis purposes. Usage
                        Data is generally retained for a shorter period of time, except when this data
                        is used to strengthen the security or to improve the functionality of Our
                        Service, or We are legally obligated to retain this data for longer time
                        periods.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head2}>
                        Transfer of Your Personal Data
                    </Text>
                    <Text style={styles.descrip}>
                        Your information, including Personal Data, is processed at the Company's
                        operating offices and in any other places where the parties involved in the
                        processing are located. It means that this information may be transferred to —
                        and maintained on — computers located outside of Your state, province, country
                        or other governmental jurisdiction where the data protection laws may differ
                        than those from Your jurisdiction.{'\n'}{'\n'}

                        Your consent to this Privacy Policy followed by Your submission of such
                        information represents Your agreement to that transfer.{'\n'}{'\n'}

                        The Company will take all steps reasonably necessary to ensure that Your data
                        is treated securely and in accordance with this Privacy Policy and no transfer
                        of Your Personal Data will take place to an organization or a country unless
                        there are adequate controls in place including the security of Your data and
                        other personal information.{'\n'}{'\n'}

                    </Text>
                    <Text style={styles.head2}>
                        Delete Your Personal Data
                    </Text>
                    <Text style={styles.descrip}>
                        You have the right to delete or request that We assist in deleting the
                        Personal Data that We have collected about You.{'\n'}{'\n'}

                        Our Service may give You the ability to delete certain information about You
                        from within the Service.{'\n'}{'\n'}

                        You may update, amend, or delete Your information at any time by signing in to
                        Your Account, if you have one, and visiting the account settings section that
                        allows you to manage Your personal information. You may also contact Us to
                        request access to, correct, or delete any personal information that You have
                        provided to Us.{'\n'}{'\n'}

                        Please note, however, that We may need to retain certain information when we
                        have a legal obligation or lawful basis to do so.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head2}>
                        Disclosure of Your Personal Data
                    </Text>
                    <Text style={styles.descrip}>
                        Business Transactions{'\n'}{'\n'}


                        If the Company is involved in a merger, acquisition or asset sale, Your
                        Personal Data may be transferred. We will provide notice before Your Personal
                        Data is transferred and becomes subject to a different Privacy Policy.{'\n'}{'\n'}

                        Law enforcement{'\n'}{'\n'}


                        Under certain circumstances, the Company may be required to disclose Your
                        Personal Data if required to do so by law or in response to valid requests by
                        public authorities (e.g. a court or a government agency).{'\n'}{'\n'}

                        Other legal requirements{'\n'}{'\n'}


                        The Company may disclose Your Personal Data in the good faith belief that such
                        action is necessary to:{'\n'}{'\n'}

                        * Comply with a legal obligation{'\n'}
                        * Protect and defend the rights or property of the Company{'\n'}
                        * Prevent or investigate possible wrongdoing in connection with the Service{'\n'}
                        * Protect the personal safety of Users of the Service or the public{'\n'}
                        * Protect against legal liability{'\n'}
                    </Text>
                    <Text style={styles.head2}>
                        Security of Your Personal Data
                    </Text>
                    <Text style={styles.descrip}>
                        The security of Your Personal Data is important to Us, but remember that no
                        method of transmission over the Internet, or method of electronic storage is
                        100% secure. While We strive to use commercially acceptable means to protect
                        Your Personal Data, We cannot guarantee its absolute security.
                    </Text>
                    <Text style={styles.head2}>
                        Children's Privacy
                    </Text>
                    <Text style={styles.descrip}>
                        Our Service does not address anyone under the age of 13. We do not knowingly
                        collect personally identifiable information from anyone under the age of 13.
                        If You are a parent or guardian and You are aware that Your child has provided
                        Us with Personal Data, please contact Us. If We become aware that We have
                        collected Personal Data from anyone under the age of 13 without verification
                        of parental consent, We take steps to remove that information from Our
                        servers. {'\n'}{'\n'}

                        If We need to rely on consent as a legal basis for processing Your information
                        and Your country requires consent from a parent, We may require Your parent's
                        consent before We collect and use that information.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head2}>
                        Links to Other Websites
                    </Text>
                    <Text style={styles.descrip}>
                        Our Service may contain links to other websites that are not operated by Us.
                        If You click on a third party link, You will be directed to that third party's
                        site. We strongly advise You to review the Privacy Policy of every site You
                        visit.{'\n'}{'\n'}

                        We have no control over and assume no responsibility for the content, privacy
                        policies or practices of any third party sites or services.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head2}>
                        Changes to this Privacy Policy
                    </Text>
                    <Text style={styles.descrip}>
                        We may update Our Privacy Policy from time to time. We will notify You of any
                        changes by posting the new Privacy Policy on this page.{'\n'}{'\n'}

                        We will let You know via email and/or a prominent notice on Our Service, prior
                        to the change becoming effective and update the "Last updated" date at the top
                        of this Privacy Policy.{'\n'}{'\n'}

                        You are advised to review this Privacy Policy periodically for any changes.
                        Changes to this Privacy Policy are effective when they are posted on this
                        page.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head2}>
                        Contact Us
                    </Text>
                    <Text style={styles.descrip}>
                        If you have any questions about this Privacy Policy, You can contact us:{'\n'}{'\n'}

                        * By email: imeshau234@gmail.com{'\n'}{'\n'}
                    </Text>

                </View>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 30,}}>
                    <Checkbox uncheckedColor='#1b574f' color="#4fbd4a" status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }}/>
                    <Text style={{fontSize: 17, color: '#233863', fontWeight: 'bold' }}>Agree with Privacy & policies</Text>
                </View>
            </View>
            
        </ScrollView>


    );
}
const styles = StyleSheet.create({
    descrip: {
        fontSize: 15,
        marginBottom: 10
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