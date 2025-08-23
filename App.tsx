import { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const textInputRef = useRef<TextInput>(null)

  const resetButton = () => {
    if(textInputRef.current) {
      textInputRef.current.focus();
      textInputRef.current.setNativeProps({text:''})
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={textInputRef}
        style={{height: 40, borderColor: 'grey', borderWidth: 1, borderRadius: 20, marginBottom: 20}}
      />

      <Button title='Resetar' onPress={resetButton}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLbl: {
    fontSize: 22
  },
  btnRow: {
    flexDirection: 'row',
    gap: 10
  }
});
