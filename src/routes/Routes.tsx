import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';

import HomeScreen from '../screens/home/HomeScreen';
import TarefasScreen from '../screens/tarefas/TarefasScreen';
import PerfilScreen from '../screens/perfil/PerfilScreen';
import ConfiguracoesScreen from '../screens/configurações/ConfiguracoesScreen';




const Tab = createBottomTabNavigator();

function Routes() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle:{
              position:"relative",
              backgroundColor:"#000",
              height: 60
          }
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: true,
            tabBarIcon: ({ focused }) => {
              if(focused){
                return<Image source={require("../img/HomeSelect.png")} style={{width:50, height:50}}/>
              }
              
              return<Image source={require("../img/Home.png")} style={{width:50, height:50}}/>
            }}}/>
        <Tab.Screen name="Tarefa" component={TarefasScreen}           
        options={{
            headerShown: true,
            tabBarIcon: ({ focused }) => {
              if(focused){
                return<Image source={require("../img/TarefasSelect.png")} style={{width:50, height:50}}/>
              }
              
              return<Image source={require("../img/Tarefas.png")} style={{width:50, height:50}}/>
            }}}/>
        <Tab.Screen name="Perfil" component={PerfilScreen} 
                  options={{
                    headerShown: true,
                    tabBarIcon: ({ focused }) => {
                      if(focused){
                        return<Image source={require("../img/PerfilSelect.png")} style={{width:50, height:50}}/>
                      }
                      
                      return<Image source={require("../img/Perfil.png")} style={{width:50, height:50}}/>
                    }}}/>
        <Tab.Screen name="Configurações" component={ConfiguracoesScreen} 
                  options={{
                    headerShown: true,
                    tabBarIcon: ({ focused }) => {
                      if(focused){
                        return<Image source={require("../img/ConfigSelect.png")} style={{width:50, height:50}}/>
                      }
                      
                      return<Image source={require("../img/Config.png")} style={{width:50, height:50}}/>
                    }}}/>
      </Tab.Navigator>

  );
}

export default Routes;
