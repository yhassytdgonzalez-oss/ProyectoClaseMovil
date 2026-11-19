import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Inicio (Home)</Text>
      <Text style={styles.subtext}>¡Bienvenido a MyRoutineApp!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', backgroundColor: 
    '#f5f5f5' },
  text: 
  { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10 
},
  subtext: 
  { 
    fontSize: 16, 
    color: '#666' 
}
});