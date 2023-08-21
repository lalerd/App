import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';


function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
      <Image
      source={require('../assets/WelcomePageImage.png')} // Arka plan resmi
      style={{ width: '100%', height: '100%' , position: 'absolute', top:0}}
    />
      </View>
    
     <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
  </View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    flex: 1,
    width:'100%',
  },
  backgroundImage: {
    position: 'absolute',
    resizeMode: 'cover',
    
  },
  // button: {
  //   backgroundColor: 'blue',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 20,
  //   marginTop :'100%' ,
  //   alignItems: 'flex-end',
  // },
  buttonText: {
    color: '#000',
    fontSize: 18,
    
  },
});