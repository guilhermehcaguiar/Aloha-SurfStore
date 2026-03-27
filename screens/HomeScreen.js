import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from '../components/Button'; 
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ALOHA SURFSTORE</Text>
      <Text style={styles.subtitulo}>Onde as melhores ondas começam.</Text>

      <View style={styles.areaBotoes}>
        <Botao 
          title="Ver Catálogo" 
          onPress={() => navigation.navigate('List')} 
        />
        
        <Botao 
          title="Meu Perfil" 
          onPress={() => navigation.navigate('Profile')} 
          color="#0077b6"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#caf0f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#03045e',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#023e8a',
    textAlign: 'center',
    marginBottom: 40,
  },
  areaBotoes: {
    width: '100%',
  },
});
