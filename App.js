import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; 
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> {}
      
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#0077b6' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        {}
        
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ title: 'Aloha Surf' }}p
        />

        <Stack.Screen 
          name="List" 
          component={ListScreen} 
          options={{ title: 'Nossas Pranchas' }} 
        />

        <Stack.Screen 
          name="Details" 
          component={DetailScreen} 
          options={{ title: 'Detalhes do Produto' }} 
        />

        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Meu Perfil' }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}