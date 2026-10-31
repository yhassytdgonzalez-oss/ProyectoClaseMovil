import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style ={styles.buttonsContainer}>
          <CustomButton {...({ title: 'My App Button #2' } as any)} />
          <CustomButton {...({ title: 'My App Button' } as any)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer:{
    flex: 1,
    flexDirection: 'column-reverse',
    padding: 15,
    backgroundColor: 'pink'
  }
});