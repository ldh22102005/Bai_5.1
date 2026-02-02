import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonColor from './components/ButtonColor';

export default function App() {
  const [bgColor, setBgColor] = useState('green');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ButtonColor title="GREEN"  color="green"  onPress={setBgColor} />
      <ButtonColor title="BLUE"   color="blue"   onPress={setBgColor} />
      <ButtonColor title="BROWN"  color="brown"  onPress={setBgColor} />
      <ButtonColor title="YELLOW" color="yellow" onPress={setBgColor} />
      <ButtonColor title="RED"    color="red"    onPress={setBgColor} />
      <ButtonColor title="BLACK"  color="black"  onPress={setBgColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  }
});