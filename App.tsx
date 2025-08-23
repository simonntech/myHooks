import { useRef, useReducer } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const ActionsTypes = {
  RESET: "RESET",
  WRITE: "WRITE"
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionsTypes.RESET:
      state.textInputRef.current.focus();
      state.textInputRef.setNativeProps({ text: '' })
      return state;

    case ActionsTypes.WRITE:
      state.textInputRef.current.setNativeProps({ text: 'bla bla bla' })
  }
}

export default function App() {
  const initialState = {
    textInputRef: useRef<TextInput>(null)
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <TextInput
        ref={state.textInputRef}
        style={{ height: 40, borderColor: 'grey', borderWidth: 1, borderRadius: 20, marginBottom: 20, width: '80%' }}
      />

      <Button title='Resetar' onPress={() => { dispatch({ type: ActionsTypes.RESET }) }} />
      <Button title='Blablabla' onPress={() => { dispatch({ type: ActionsTypes.WRITE }) }} />

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
