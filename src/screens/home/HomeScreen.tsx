import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '../../routes/Routes';

function HomeScreen() {
  return (
    <View style={styles.BackgroundPage}>
      <Text style={styles.text}>Gestão de Tarefas com o time em breve</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  BackgroundPage:{
    backgroundColor:"#2C3E50", flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  text: {
    color:"#fff",
    marginTop: 5,
    marginHorizontal: 10,
    fontSize: 20,
  },
})
export default HomeScreen;