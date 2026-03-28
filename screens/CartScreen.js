import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importante para não dar tela branca!

export default function CartScreen() {
  return (
    <View style={styles.container}>
      {/* Ícone grande de carrinho vazio */}
      <Ionicons name="cart-outline" size={100} color="#03045e" />
      
      <Text style={styles.textoPrincipal}>Seu carrinho está vazio</Text>
      
      <Text style={styles.subtexto}>
        Explore nossas pranchas e encontre a ideal para o seu surf!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#caf0f8', // Cor padrão da sua Aloha Surf
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textoPrincipal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#03045e',
    marginTop: 20,
  },
  subtexto: {
    fontSize: 16,
    color: '#023e8a',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
});