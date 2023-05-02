import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Alert, Button, Animated, State } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';

export default function TermsConditions2() {

    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(false);

    return (

        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginBottom: 50 }}>
                
                <View style={{ paddingHorizontal: 25,paddingTop: 20 }}>
                    
                    
                    <Text style={styles.head1}>
                        Collecting and Using Your Personal Data {'\n'}
                        ---------------------------------------
                    </Text>
                    <Text style={styles.descrip}>
                        These are the Terms and Conditions governing the use of this Service and the
                        agreement that operates between You and the Company. These Terms and
                        Conditions set out the rights and obligations of all users regarding the use
                        of the Service.{'\n'}{'\n'}

                        Your access to and use of the Service is conditioned on Your acceptance of and
                        compliance with these Terms and Conditions. These Terms and Conditions apply
                        to all visitors, users and others who access or use the Service.{'\n'}{'\n'}

                        By accessing or using the Service You agree to be bound by these Terms and
                        Conditions. If You disagree with any part of these Terms and Conditions then
                        You may not access the Service.{'\n'}{'\n'}

                        You represent that you are over the age of 18. The Company does not permit
                        those under 18 to use the Service.{'\n'}{'\n'}

                        Your access to and use of the Service is also conditioned on Your acceptance
                        of and compliance with the Privacy Policy of the Company. Our Privacy Policy
                        describes Our policies and procedures on the collection, use and disclosure of
                        Your personal information when You use the Application or the Website and
                        tells You about Your privacy rights and how the law protects You. Please read
                        Our Privacy Policy carefully before using Our Service.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head1}>
                        Links to Other Websites {'\n'}
                        ------------------------
                    </Text>
                    <Text style={styles.descrip}>
                        Our Service may contain links to third-party web sites or services that are
                        not owned or controlled by the Company.{'\n'}{'\n'}

                        The Company has no control over, and assumes no responsibility for, the
                        content, privacy policies, or practices of any third party web sites or
                        services. You further acknowledge and agree that the Company shall not be
                        responsible or liable, directly or indirectly, for any damage or loss caused
                        or alleged to be caused by or in connection with the use of or reliance on any
                        such content, goods or services available on or through any such web sites or
                        services.{'\n'}{'\n'}

                        We strongly advise You to read the terms and conditions and privacy policies
                        of any third-party web sites or services that You visit.{'\n'}{'\n'}

                    </Text>
                    <Text style={styles.head1}>
                        Termination {'\n'}
                        -------------
                    </Text>
                    <Text style={styles.descrip} >
                        We may terminate or suspend Your access immediately, without prior notice or
                        liability, for any reason whatsoever, including without limitation if You
                        breach these Terms and Conditions.{'\n'}{'\n'}

                        Upon termination, Your right to use the Service will cease immediately.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head1}>
                        Limitation of Liability {'\n'}
                        -----------------------
                    </Text>
                    <Text style={styles.descrip}>
                        Notwithstanding any damages that You might incur, the entire liability of the
                        Company and any of its suppliers under any provision of this Terms and Your
                        exclusive remedy for all of the foregoing shall be limited to the amount
                        actually paid by You through the Service or 100 USD if You haven't purchased
                        anything through the Service.{'\n'}{'\n'}

                        To the maximum extent permitted by applicable law, in no event shall the
                        Company or its suppliers be liable for any special, incidental, indirect, or
                        consequential damages whatsoever (including, but not limited to, damages for
                        loss of profits, loss of data or other information, for business interruption,
                        for personal injury, loss of privacy arising out of or in any way related to
                        the use of or inability to use the Service, third-party software and/or third-
                        party hardware used with the Service, or otherwise in connection with any
                        provision of this Terms), even if the Company or any supplier has been advised
                        of the possibility of such damages and even if the remedy fails of its
                        essential purpose.{'\n'}{'\n'}

                        Some states do not allow the exclusion of implied warranties or limitation of
                        liability for incidental or consequential damages, which means that some of
                        the above limitations may not apply. In these states, each party's liability
                        will be limited to the greatest extent permitted by law.{'\n'}{'\n'}

                    </Text>
                    <Text style={styles.head1}>
                        "AS IS" and "AS AVAILABLE" Disclaimer {'\n'}
                        ---------------------------------------
                    </Text>
                    <Text style={styles.descrip}>
                        The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults
                        and defects without warranty of any kind. To the maximum extent permitted
                        under applicable law, the Company, on its own behalf and on behalf of its
                        Affiliates and its and their respective licensors and service providers,
                        expressly disclaims all warranties, whether express, implied, statutory or
                        otherwise, with respect to the Service, including all implied warranties of
                        merchantability, fitness for a particular purpose, title and non-infringement,
                        and warranties that may arise out of course of dealing, course of performance,
                        usage or trade practice. Without limitation to the foregoing, the Company
                        provides no warranty or undertaking, and makes no representation of any kind
                        that the Service will meet Your requirements, achieve any intended results, be
                        compatible or work with any other software, applications, systems or services,
                        operate without interruption, meet any performance or reliability standards or
                        be error free or that any errors or defects can or will be corrected.{'\n'}{'\n'}

                        Without limiting the foregoing, neither the Company nor any of the company's
                        provider makes any representation or warranty of any kind, express or implied:
                        (i) as to the operation or availability of the Service, or the information,
                        content, and materials or products included thereon; (ii) that the Service
                        will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or
                        currency of any information or content provided through the Service; or (iv)
                        that the Service, its servers, the content, or e-mails sent from or on behalf
                        of the Company are free of viruses, scripts, trojan horses, worms, malware,
                        timebombs or other harmful components.{'\n'}{'\n'}

                        Some jurisdictions do not allow the exclusion of certain types of warranties
                        or limitations on applicable statutory rights of a consumer, so some or all of
                        the above exclusions and limitations may not apply to You. But in such a case
                        the exclusions and limitations set forth in this section shall be applied to
                        the greatest extent enforceable under applicable law.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head1}>
                        Governing Law {'\n'}
                        --------------
                    </Text>
                    <Text style={styles.descrip}>
                        The laws of the Country, excluding its conflicts of law rules, shall govern
                        this Terms and Your use of the Service. Your use of the Application may also
                        be subject to other local, state, national, or international laws.{'\n'}{'\n'}

                    </Text>
                    <Text style={styles.head1}>
                        Disputes Resolution {'\n'}
                        --------------------
                    </Text>
                    <Text style={styles.descrip}>
                        If You have any concern or dispute about the Service, You agree to first try
                        to resolve the dispute informally by contacting the Company.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head1}>
                        Severability {'\n'}
                        ------------
                    </Text>
                    <Text style={styles.descrip}>
                        If any provision of these Terms is held to be unenforceable or invalid, such
                        provision will be changed and interpreted to accomplish the objectives of such
                        provision to the greatest extent possible under applicable law and the
                        remaining provisions will continue in full force and effect.{'\n'}{'\n'}

                    </Text>
                    <Text style={styles.head1}>
                        Waiver {'\n'}
                        --------
                    </Text>
                    <Text style={styles.descrip}>
                        Except as provided herein, the failure to exercise a right or to require
                        performance of an obligation under these Terms shall not effect a party's
                        ability to exercise such right or require such performance at any time
                        thereafter nor shall the waiver of a breach constitute a waiver of any
                        subsequent breach.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head1}>
                        Translation Interpretation  {'\n'}
                        ---------------------------------------
                    </Text>
                    <Text style={styles.descrip}>
                        These Terms and Conditions may have been translated if We have made them
                        available to You on our Service. You agree that the original English text
                        shall prevail in the case of a dispute.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head1}>
                        Changes to These Terms and Conditions  {'\n'}
                        ---------------------------------------
                    </Text>
                    <Text style={styles.descrip}>
                        We reserve the right, at Our sole discretion, to modify or replace these Terms
                        at any time. If a revision is material We will make reasonable efforts to
                        provide at least 30 days' notice prior to any new terms taking effect. What
                        constitutes a material change will be determined at Our sole discretion.{'\n'}{'\n'}

                        By continuing to access or use Our Service after those revisions become
                        effective, You agree to be bound by the revised terms. If You do not agree to
                        the new terms, in whole or in part, please stop using the website and the
                        Service.{'\n'}{'\n'}
                    </Text>
                    <Text style={styles.head1}>
                        Contact Us {'\n'}
                        --------------
                    </Text>
                    <Text style={styles.descrip}>
                        If you have any questions about these Terms and Conditions, You can contact
                        us:{'\n'}{'\n'}
                        * By email: imeshau234@gmail.com{'\n'}{'\n'}
                    </Text>

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