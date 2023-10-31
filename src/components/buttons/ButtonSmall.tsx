import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string;
  color?: string; // tornando color opcional
  onPress?: () => void; // tornando onPress opcional
}

const ButtonSmall = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.color || 'blue' }]}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems:"center",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    backgroundColor:"#E74C3C",
    width: 117,
    height: 41,
    borderWidth: 1,
    borderColor: "rgba(255, 253, 253, 0.45)"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ButtonSmall;
