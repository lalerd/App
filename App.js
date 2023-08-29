import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screen/RegisterScreen';
import LoginScreen from './screen/LoginScreen';
import WelcomeScreen from './screen/WelcomeScreen';
import DictionaryScreen from './screen/DictionaryScreen';



export default function App() {
  return (
    <View >
      <DictionaryScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    
  },
});
