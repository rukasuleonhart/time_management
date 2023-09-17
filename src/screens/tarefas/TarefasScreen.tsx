import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


function TarefasScreen() {
  return (
    <View style={styles.BackgroundPage}>
      <Text style={styles.text}>Minhas Tarefas</Text>
      
    <ScrollView>

      <View style={styles.backgroundTask}>
        <Text style={{fontSize:20}}>Titulo</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems:"center", width: 120, marginLeft: -290, marginTop: -20}}> 
            <View style={styles.circlePhoto}></View>
            <Text style={styles.nameuser}>@name</Text>
          </View> 
      </View>
      
      <View style={styles.backgroundTask}>
        <Text style={{fontSize:20}}>Titulo</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems:"center", width: 120, marginLeft: -290, marginTop: -20}}> 
            <View style={styles.circlePhoto}></View>
            <Text style={styles.nameuser}>@name</Text>
          </View> 
      </View>

      <View style={styles.backgroundTask}>
        <Text style={{fontSize:20}}>Titulo</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems:"center", width: 120, marginLeft: -290, marginTop: -20}}> 
            <View style={styles.circlePhoto}></View>
            <Text style={styles.nameuser}>@name</Text>
          </View> 
      </View>

      <View style={styles.backgroundTask}>
        <Text style={{fontSize:20}}>Titulo</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems:"center", width: 120, marginLeft: -290, marginTop: -20}}> 
            <View style={styles.circlePhoto}></View>
            <Text style={styles.nameuser}>@name</Text>
          </View> 
      </View>

      <View style={styles.backgroundTask}>
        <Text style={{fontSize:20}}>Titulo</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems:"center", width: 120, marginLeft: -290, marginTop: -20}}> 
            <View style={styles.circlePhoto}></View>
            <Text style={styles.nameuser}>@name</Text>
          </View> 
      </View>

      <View style={styles.backgroundTask}>
        <Text style={{fontSize:20}}>Titulo</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems:"center", width: 120, marginLeft: -290, marginTop: -20}}> 
            <View style={styles.circlePhoto}></View>
            <Text style={styles.nameuser}>@name</Text>
          </View> 
      </View>

      <View style={styles.backgroundTask}>
        <Text style={{fontSize:20}}>Titulo</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems:"center", width: 120, marginLeft: -290, marginTop: -20}}> 
            <View style={styles.circlePhoto}></View>
            <Text style={styles.nameuser}>@name</Text>
          </View> 
      </View>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  BackgroundPage:{
    backgroundColor:"#2C3E50", 
    flex:1
  },
  text: {
    color:"#fff",
    marginTop: 5,
    marginHorizontal: 10,
    fontSize: 16,
  },
  backgroundTask: {
    alignItems:"center",
    backgroundColor:"#fff",
    height: 120,
    marginHorizontal: 10,
    borderRadius: 5,
    margin: 5,

    justifyContent:"center",
  },
  circlePhoto: {
    backgroundColor:"#fab1a0",
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  nameuser: {
  }
})
export default TarefasScreen;