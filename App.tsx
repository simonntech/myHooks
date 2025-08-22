import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState<number>(12);

  const removeNumber = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1;
      console.log(newQuantity);
      return newQuantity;
    });
  };

  const addNumber = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      console.log(newQuantity);
      return newQuantity;
    });
  };

  return (
    <View style={styles.container}>

      <View style={styles.btnRow}>
        <Button title='-' onPress={removeNumber} />
        <Text style={styles.txtLbl}>{quantity}</Text>
        <Button title='+' onPress={addNumber} />
      </View>

      <StatusBar style="auto" />
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
