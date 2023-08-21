import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,TouchableHighlight, Button, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const WelcomeScreen = () => {
  return (
    <ImageBackground source={require('../assets/WelcomePageImage.png')} style={{ width: '100%', height: '100%' ,top:0,}} >

    <View style={styles.container}>
           <TouchableHighlight 
                style ={{
                    height: 40,
                    width:'50%',
                    borderRadius:20,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :100,
                    marginBottom:20
                }}>
        <Button title="Start" />
        </TouchableHighlight>
        
  </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('70%'), // Sayfanın üstündeki boşluk
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: hp('4%'),
    marginBottom: hp('3%'),
    color: 'white',
  },
  
});


export default WelcomeScreen;