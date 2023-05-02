import { StyleSheet, Text, View, Platform, StatusBar, ScrollView, Image,
useWindowDimensions } from "react-native";
import React from 'react'

const CustomImageCarouselSquare = ({data}) => {
  const {width} = useWindowDimensions();
  const SIZE = width * 1
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item) => {
        return (
          <View style={{width:SIZE}}>
            <View style = {styles.imageContainer}>
              <Image source={item.Image}  />
            </View>
          </View>
        )
      })}    
    </ScrollView>
  )
}

export default CustomImageCarouselSquare;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow: 'hidden',
    // width:400
    height:400,
   

  }
});

