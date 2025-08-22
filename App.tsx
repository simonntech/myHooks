import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  let quantity: number = 12;

  const removeNumber = () => {
    quantity = quantity - 1;
    console.log(quantity)
  }; 

  const addNumber = () => {
    quantity = quantity + 1;
    console.log(quantity)
  }

  return (
    <View style={styles.container}>

      <View style={styles.btnRow}>
        <Button title='-' onPress={removeNumber}/>
        <Text style={styles.txtLbl}>{quantity}</Text>
        <Button title='+' onPress={addNumber}/>
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
