import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonColor({ title, color, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => onPress(color)}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 6
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});