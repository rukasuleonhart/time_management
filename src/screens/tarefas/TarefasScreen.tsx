import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TarefasScreen = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [activeTaskIndex, setActiveTaskIndex] = useState(-1);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Carregando tarefas do AsyncStorage ao iniciar o aplicativo
  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  // Atualiza o contador a cada segundo quando uma tarefa está ativa
  useEffect(() => {
    let interval;
    if (activeTaskIndex !== -1) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeTaskIndex]);

  // Função para carregar tarefas do AsyncStorage
  const loadTasksFromStorage = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas do armazenamento:', error);
    }
  };

  // Função para salvar tarefas no AsyncStorage
  const saveTasksToStorage = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Erro ao salvar tarefas no armazenamento:', error);
    }
  };

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObj = {
      title: newTask,
      status: 'pendente', // Status pode ser 'pendente', 'em andamento' ou 'concluída'
      elapsedTime: 0,
    };

    setTasks([...tasks, newTaskObj]);
    saveTasksToStorage();
    setNewTask('');
  };

  return (
    <View>
      <Text>Minhas Tarefas</Text>
      <TextInput
        placeholder="Nova tarefa"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
<FlatList
  data={tasks}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => (
    <View>
      <Text>{item.title} - {item.status}</Text>
      <Text>Tempo decorrido: {item.status === 'em andamento' ? item.elapsedTime + elapsedTime : item.elapsedTime} segundos</Text>
      <Button
        title="Play"
        onPress={() => {
          // Lógica para iniciar tarefa (em andamento)
          tasks[index].status = 'em andamento';
          setActiveTaskIndex(index);
          saveTasksToStorage();
        }}
      />
      <Button
        title="Pausar"
        onPress={() => {
          // Lógica para pausar tarefa
          if (item.status === 'em andamento') {
            item.elapsedTime += elapsedTime;
          }
          tasks[index].status = 'pendente';
          setActiveTaskIndex(-1);
          saveTasksToStorage();
        }}
      />
  
      <Button
        title="Excluir"
        onPress={() => {
          // Lógica para excluir tarefa
          const updatedTasks = [...tasks];
          updatedTasks.splice(index, 1);
          setTasks(updatedTasks);
          saveTasksToStorage();
        }}
      />
    </View>
  )}
/>
    </View>
  );
};

export default TarefasScreen;
