import React from 'react';
import { View, Text, TabBarIOSItem } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Login System
import ScreenOne from './Login System/ScreenOne';
import Login from './Login System/Login';
import SignUp from './Login System/SignUp';
import Reset from './Login System/Reset';
import Verify from './Login System/Verify';

//Home Screen
import Profile from './Home/Profile';
import MyProfile from './Home/MyProfile';
import Report from './Home/Report';
import MainHome from './Home/MainHome';
import EditProfile from './Home/EditProfile';

//Payment
import Screen1 from './Home/H-Screens/Payment/Screen1';
import Screen2VisaMaster from './Home/H-Screens/Payment/Screen2VisaMaster';
import Screen2Master from './Home/H-Screens/Payment/Screen2Master';
import LastScreen from './Home/H-Screens/Payment/LastScreen';

//Days
import Sunday from './Home/H-Screens/Days/Pop-up-Screens/Sunday';
import Tuesday from './Home/H-Screens/Days/Pop-up-Screens/Tuesday';
import Saturday from './Home/H-Screens/Days/Pop-up-Screens/Saturday';
import Thursday from './Home/H-Screens/Days/Pop-up-Screens/Thursday';
import Wednesday from './Home/H-Screens/Days/Pop-up-Screens/Wedneday';

//Image Slide
import Main from './Home/H-Screens/ImageSlide/Main';
import Complain from './Home/H-Screens/ImageVerticalSlide/Complain';
import Information from './Home/H-Screens/ImageVerticalSlide/Information';
import Guidelines from './Home/H-Screens/ImageVerticalSlide/Guidelines';

//Bottom Navigation Screens
import NotificationScreen from './Home/H-Screens/TabBar/NotificationScreen';
import SettingsScreen from './Home/H-Screens/TabBar/SettingsScreen';


//Settings Components
import FeedBack from './Home/H-Screens/TabBar/SettingsComponents/FeedBack';
import TermsConditions from './Home/H-Screens/TabBar/SettingsComponents/TeamsCondition';
import TermsConditions2 from './Home/H-Screens/TabBar/SettingsComponents/TermsConditions2';
import PrivacyPolicy from './Home/H-Screens/TabBar/SettingsComponents/PrivacyPolicy';
import AboutUs from './Home/H-Screens/TabBar/SettingsComponents/AboutUs';




const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#42b357'}, headerTitleStyle: {fontWeight: 'bold', fontSize: 25, color: 'white'}, headerTintColor: 'white'}}>

        {/* Login System */}
        <Stack.Screen options={{headerShown:false}} name="1stScreen" component={ScreenOne}/>
        <Stack.Screen options={{headerShown:false}} name="LoginScreen" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="SignUpScreen" component={SignUp}/>
        <Stack.Screen options={{headerShown:false}} name="ResetScreen" component={Reset}/>
        <Stack.Screen options={{headerShown:false}} name="VerifyScreen" component={Verify}/>

        {/* Home Screen */}
        <Stack.Screen options={{headerShown:false}} name="ProfileScreen" component={Profile}/>
        <Stack.Screen options={{headerShown:false}} name="MyProfile" component={MyProfile}/>
        <Stack.Screen options={{headerShown:false}} name="EditProfile" component={EditProfile}/>
        <Stack.Screen options={{headerShown:false}} name="Report" component={Report}/>
        <Stack.Screen options={{headerShown:false}} name="MainHome" component={MainHome}/>

        {/* Payment */}
        <Stack.Screen options={{headerShown:false}} name="Screen1" component={Screen1}/>
        <Stack.Screen options={{headerShown:false}} name="Screen2VisaMaster" component={Screen2VisaMaster}/>
        <Stack.Screen options={{headerShown:false}} name="Screen2Master" component={Screen2Master}/>
        <Stack.Screen options={{headerShown:false}} name="LastScreen" component={LastScreen}/>

        {/* Days  */}
        <Stack.Screen options={{headerShown:false}} name="Sunday" component={Sunday}/>
        <Stack.Screen options={{headerShown:false}} name="Tuesday" component={Tuesday}/>
        <Stack.Screen options={{headerShown:false}} name="Thursday" component={Thursday}/>
        <Stack.Screen options={{headerShown:false}} name="Saturday" component={Saturday}/>
        <Stack.Screen options={{headerShown:false}} name="Wednesday" component={Wednesday}/>

        {/* Image Slide Screens */}
        <Stack.Screen options={{headerShown:false}} name="Main" component={MainHome}/>
        <Stack.Screen options={{headerShown:true}} name="Complain" component={Complain}/>
        <Stack.Screen options={{headerShown:true, headerTitle: 'Lesson for Life'}} name="Information" component={Information}/>
        <Stack.Screen options={{headerShown:true}} name="Guidelines" component={Guidelines}/>

        {/*Bottom Navigation Screens*/}
        <Stack.Screen options={{headerShown:false}} name="Notification" component={NotificationScreen}/>
        <Stack.Screen options={{headerShown:false}} name="Settings" component={SettingsScreen}/>

        {/* Settings Components */}
        <Stack.Screen options={{headerShown:false}} name="FeedBackScreen" component={FeedBack}/>
        <Stack.Screen options={{headerShown:true}} name="Terms & Conditions" component={TermsConditions}/>
        <Stack.Screen options={{headerShown:true}} name="Terms & Conditions " component={TermsConditions2}/>
        <Stack.Screen options={{headerShown:true}} name="Privacy & Policy" component={PrivacyPolicy}/>
        <Stack.Screen options={{headerShown:true}} name="AboutUs" component={AboutUs}/>


        
      </Stack.Navigator> 

    </NavigationContainer>
  );
}

export default App;