import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image,TouchableHighlight,Pressable, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Burada kayıt işlemi yapılabilir.
    
  };

  return (
    <View>
         <Image source={require('../assets/login.png')}  
        style={{ width: '100%', height: '50%' , position: 'absolute',top:0}} />
      <View style={styles.inputcontainer}>

      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
      />
     <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
       <TouchableHighlight 
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:20,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20,
                    marginBottom:20
                }}>
      <Button title="Sign Up" onPress={handleSignUp} />
      </TouchableHighlight>

{/* .............................................Sign In........................................ */}

      <Pressable style={styles.button}>
           <Text style={{fontSize:13, color: 'gray', marginTop:'5%'}}>Do you already have an account ?</Text>  
       </Pressable>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: wp('10%'), // 10% of screen width
    },
    title: {
      fontSize: hp('3%'), // 3% of screen height
      marginBottom: hp('3%'),
    },
    input: {
    //   width: '80%',
    //   height: hp('5%'),
    //   marginBottom: hp('2%'),
    //   borderWidth: 1,
    //   paddingHorizontal: wp('2%'),
    width: '80%',
    position:'relative',
    borderRadius:10,
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: '#e3e3e3'
    },
    inputcontainer:{
        width:'100%',
        height:'100%',
        top:'20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
  

export default RegisterScreen;


