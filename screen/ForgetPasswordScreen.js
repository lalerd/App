import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import LibelleTextInput, {
  LibelleTextInputData,
} from '../../components/textinputs/LibelleTextInput';
import RoundedButton, {
  RoundedButtonData,
} from '../../components/buttons/RoundedButton';
import AppColors from '../../constants/AppColors';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');

  const handleForgetPassword = () => {
    // forget password ...
  };

  return (
    <View style={styles.container}>
      {forgetPasswordText}
      {getTextInput('E-mail', email, (text) => setEmail(text))}
      {getForgetPasswordButton(handleForgetPassword)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 128,
  },
  inputArea: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 32,
    fontWeight: Platform.select({ ios: '600', android: 'bold' }),
    color: AppColors.primary500,
  },
  textInput: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  forgetPasswordButton: {
    marginHorizontal: 16,
    marginTop: 36,
  },
});

const forgetPasswordText = <Text style={styles.text}>FORGET PASSWORD</Text>;

function getTextInput(label, value, onChangeText) {
  return (
    <LibelleTextInput
      componentData={getTextInputData(label, value, onChangeText)}
    />
  );
}

function getTextInputData(label, value, onChangeText) {
  return new LibelleTextInputData(
    styles.textInput,
    label,
    value,
    null,
    null,
    null,
    null,
    onChangeText
  );
}

function getForgetPasswordButton(onPress) {
  return <RoundedButton componentData={getForgetPasswordData(onPress)} />;
}

function getForgetPasswordData(onPress) {
  return new RoundedButtonData(
    'Forget Password',
    null,
    styles.forgetPasswordButton,
    null,
    null,
    null,
    null,
    onPress
  );
}