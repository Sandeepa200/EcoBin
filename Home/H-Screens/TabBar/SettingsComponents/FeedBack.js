import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

export default function Stars() {
  const navigation = useNavigation();
  const [starRating, setStarRating] = useState(null);

  return (
    <ScrollView style={{marginTop:20,width:'100%',height:'100%',backgroundColor:'white'}}>
        <View style={{marginTop:'6%'}}></View>
                <View style={{alignItems:'flex-start',marginLeft:'5%'}}>
                    <Text style={{fontSize:25,fontWeight:'bold' ,alignItems:'flex-start',marginTop:40}}>Give Your Feedback</Text>
        </View>
        <View style={styles.pic}>
                    <Image style={styles.img1} source={require('./Images/FeedBack.png')}
                    resizeMode='contain'
                    />
                    <Text style={{marginTop:20, fontSize:15,fontWeight:'500',marginLeft:20}}>How did we do</Text>
                </View>
      <View style={styles.container}>
        <View style={styles.stars}>
          <TouchableOpacity onPress={() => setStarRating(1)}>
            <MaterialIcons
              name={starRating >= 1 ? 'star' : 'star-border'}
              size={52}
              style={starRating >= 1 ? styles.starSelected : styles.starUnselected}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStarRating(2)}>
            <MaterialIcons
              name={starRating >= 2 ? 'star' : 'star-border'}
              size={52}
              style={starRating >= 2 ? styles.starSelected : styles.starUnselected}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStarRating(3)}>
            <MaterialIcons
              name={starRating >= 3 ? 'star' : 'star-border'}
              size={52}
              style={starRating >= 3 ? styles.starSelected : styles.starUnselected}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStarRating(4)}>
            <MaterialIcons
              name={starRating >= 4 ? 'star' : 'star-border'}
              size={52}
              style={starRating >= 4 ? styles.starSelected : styles.starUnselected}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStarRating(5)}>
            <MaterialIcons
              name={starRating >= 5 ? 'star' : 'star-border'}
              size={52}
              style={starRating >= 5 ? styles.starSelected : styles.starUnselected}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formInput}>
                     <TextInput multiline={true} style={[styles.textInput, { marginTop: 30 }]} placeholder='FeedBack' />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("MainHome")}
                 style={styles.regButton}>
                     <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'normal' }}>Publish Feedback</Text>
                </TouchableOpacity>

                <View style={{marginTop:'6%'}}></View>
                <View style={{alignItems:'center',}}>
                     <Text style={{marginTop:20, fontSize:15,fontWeight:'400',color:'gray',marginBottom:'12%'}}>Your review will be posted into google play store</Text>
                 </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {  
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:'5%',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  starUnselected: {
    color: '#aaa',
  },
  starSelected: {
    color: '#ffb300',
  },

  formInput: {
    padding: 5,
    marginTop: '2%',
    marginLeft: 20,
    marginRight: 20,
},

textInput: {
    padding: 7,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 10,
},
regButton: {
    padding:15,
    backgroundColor: '#42b357',
    borderRadius: 10,
    width: 180,
    marginLeft:'28%',
    marginTop:'15%',
    

},
check:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
},
img1: {
    // width: '70%',
    width: "100%",
    height: 235,
    marginLeft: 'auto',
    marginRight:'auto',
    marginTop: 0,
    alignItems:'flex-end'
  },
});
