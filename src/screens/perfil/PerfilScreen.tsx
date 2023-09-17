import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';

import Line from '../../components/lines/lineMargin';
import LineMargin from '../../components/lines/lineMargin';
import ButtonSmall from '../../components/buttons/ButtonSmall';


function PerfilScreen() {
  const [nome, setnome] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function handle(){
    const data = {
      nome,
      username,
      email,
      telefone
    }
  };

  const alterar = () => {
    alert("Dados alterados com sucesso!");
  }
  return (
  <ScrollView>
    <SafeAreaView style={styles.BackgroundPage}>
      <View style={{alignItems: "center"}}>
        <View style={styles.ConteinerFoto}>
          <Image source={require("../../img/AddFoto.png")} style={styles.img}/>
        </View>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={styles.text}>Tirar foto</Text>
            <Text style={styles.text}>Adicionar foto</Text>
          </View>  
      </View>
      <LineMargin/>
      <View>
        <Text style={styles.text}>Nome exibido</Text>
        <TextInput 
          style={styles.input}
          placeholder='' 
          value={nome} 
          onChangeText={setnome}
          />
      </View>
      <View>
        <Text style={styles.text}>Nome de usuário</Text>
        <TextInput 
          style={styles.input}
          placeholder='' 
          value={username} 
          onChangeText={setUsername}
          />
      </View>
      <View>
        <Text style={styles.text}>Email de recuperação</Text>
        <TextInput 
          style={styles.input}
          placeholder='' 
          value={email} 
          onChangeText={setEmail}
          />
      </View>
      <View>
        <Text style={styles.text}>Telefone (Opcional)</Text>
        <TextInput 
          style={styles.input}
          placeholder='' 
          value={telefone} 
          onChangeText={setTelefone}
          />
      </View>
        <LineMargin/>
      <Text style={{color:"#fff", marginHorizontal: 10, fontSize: 16, marginTop: -10}}>Senha</Text>
      <ButtonSmall
        label= "Mudar Senha"
        color="#1170A6"
        onPress={() => {
          
        }} 
      />
        <LineMargin/>
      <Text style={{color:"#fff", marginHorizontal: 10, fontSize: 16, marginTop: -10}}>Remoção de Conta</Text>
      <ButtonSmall
        label= "Desativar Conta"
        color="#E74C3C"
        onPress={() => {
          
        }} 
      />
      </SafeAreaView>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  BackgroundPage:{
    backgroundColor:"#2C3E50", flex:1
  },
  ConteinerFoto: {
    marginTop: 10,
    width: 201,
    height: 201,
    margin: 5,
    //flexShrink: 0,
    borderRadius: 100,
    backgroundColor:"#fff",
  },
  text: {
    color:"#fff",
    marginTop: 5,
    marginHorizontal: 10,
    fontSize: 16,
  },
  img: {
    width:undefined, 
    resizeMode:"contain", 
    flex:1
  },
  input: {
    backgroundColor:"#fff",
    marginHorizontal: 10,
    borderRadius: 5,
    height: 40,
  }
})

export default PerfilScreen;