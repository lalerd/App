import React, { useState } from 'react';
import {StyleSheet, View, TextInput, Button, TouchableHighlight ,Image,Text, Pressable, Alert} from 'react-native';


export default function LoginScreen() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Giriş işlemlerini burada gerçekleştirin
    
     
    };

    const handleOnPress = () => {
       // Forget Pasword
       Alert.alert('say hi')
    }
  
    return (
       
      <View style={styles.container}>
      
        <Image source={require('../assets/login.png')}  
        style={{ width: '100%', height: '50%' , position: 'absolute',top:0}} />
        <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Email adresinizi girin"
          value={email}
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Şifrenizi girin"
          secureTextEntry
          value={password}
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
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
                }}/>
        <Button title="Login" onPress={handleLogin}/>

{/* .......................................Forget password ........................ */}

         {/* <Pressable style={styles.button} onPress={handleOnPress}>
           <Text style={{fontSize:13, color: 'gray', marginTop:'15%'}}>Forget Password?</Text> 
       </Pressable> */}
      
{/* .......................................Register ............................. */}

       <Pressable style={styles.button} onPress={handleOnPress}>
           <Text style={{fontSize:15, color: 'gray', marginTop:'5%'}}>Don't have an account ?</Text>  
       </Pressable>

   
         </View>
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      width:'100%',
      height:'100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
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
        top:'25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize:20,
        color: '#004AAD'
    }
 
    
  });