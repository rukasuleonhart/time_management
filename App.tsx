import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

import HomeScreen from './src/screens/home/HomeScreen';
import Routes from './src/routes/Routes';



const App = () => {
  return (

      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
  );
}

export default App;

