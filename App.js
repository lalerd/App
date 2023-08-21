import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screen/RegisterScreen';
import LoginScreen from './screen/LoginScreen';



export default function App() {
  return (
    <View >
      <LoginScreen />
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
