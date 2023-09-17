import { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import SwitchP from '../../components/switch';

import Line from '../../components/lines/line';

function ConfiguracoesScreen() {
  return (
      <View style={styles.BackgroundPage}>
        <Text style={styles.title}>Notificações</Text>
      <Line/>
        <View style={styles.View}>
        <Text style={styles.text}>Desativar todas notificações</Text>
        <SwitchP/>
      </View>
      <Line/>
        <View style={styles.View}>
        <Text style={styles.text}>Notificação ao criar tarefa</Text>
        <SwitchP/>
      </View>
      <Line/>
        <View style={styles.View}>
        <Text style={styles.text}>Notificação ao pausar tarefa</Text>
        <SwitchP/>
      </View>
      <Line/>
      <View style={styles.View}>
        <Text style={styles.text}>Notificação ao finalizar tarefa</Text>
        <SwitchP/>
      </View>
      <Line/>
        <View style={styles.View}>
        <Text style={styles.text}>Receber notificação por email</Text>
      <SwitchP/>
      </View>
      <Line/>
        <View style={styles.View}>
        <Text style={styles.text}>Receber notificação por sms</Text>
      <SwitchP/>
     </View> 
      <Line/>
    </View>
  );
}
const styles = StyleSheet.create({
  BackgroundPage:{
    backgroundColor:"#2C3E50", flex:1
  },
  title: {
    color:"#fff",
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color:"#fff",
    marginHorizontal: 10,
    fontSize: 18,
  },
  switch: {
    flex:1, justifyContent:"flex-end"
  },
  View: {
    flexDirection:"row", alignItems:"center"
  }
})
export default ConfiguracoesScreen;