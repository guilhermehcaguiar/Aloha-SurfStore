import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation, route }) {
  const [mensagemLogout, setMensagemLogout] = useState('');

  const { nomeUsuario, emailUsuario, onLogout } = route.params || {};

  const handleLogout = () => {
    setMensagemLogout('Saindo da conta... Até logo!');
    
    setTimeout(() => {
      if (onLogout) onLogout(); 
      
      setMensagemLogout('');
      navigation.goBack(); 
    }, 1500);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={60} color="#0077b6" />
          </View>
          <Text style={styles.nome}>{nomeUsuario || "Surfista"}</Text>
          <Text style={styles.email}>{emailUsuario || "aloha@surf.com"}</Text>
        </View>

        <View style={styles.statusCard}>
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>Pedidos</Text>
            <Text style={styles.statusValor}>0</Text>
          </View>
          <View style={styles.divisor} />
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>Membro desde</Text>
            <Text style={styles.statusValor}>Março 2026</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <Text style={styles.menuTitulo}>Minha Atividade</Text>
          
          <TouchableOpacity style={styles.opcaoMenu}>
            <Ionicons name="receipt-outline" size={22} color="#03045e" />
            <Text style={styles.textoOpcao}>Histórico de Compras</Text>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.opcaoMenu}>
            <Ionicons name="location-outline" size={22} color="#03045e" />
            <Text style={styles.textoOpcao}>Meus Endereços</Text>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.opcaoMenu}>
            <Ionicons name="card-outline" size={22} color="#03045e" />
            <Text style={styles.textoOpcao}>Formas de Pagamento</Text>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.opcaoMenu}>
            <Ionicons name="settings-outline" size={22} color="#03045e" />
            <Text style={styles.textoOpcao}>Configurações da Conta</Text>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.opcaoMenu}>
            <Ionicons name="help-circle-outline" size={22} color="#03045e" />
            <Text style={styles.textoOpcao}>Central de Ajuda</Text>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoSair} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={22} color="#fff" />
            <Text style={styles.textoBotaoSair}>SAIR DA CONTA</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {mensagemLogout !== '' && (
        <View style={styles.overlayAviso}>
          <View style={styles.caixaAviso}>
            <Ionicons name="log-out" size={24} color="#fff" />
            <Text style={styles.textoAviso}>{mensagemLogout}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#caf0f8' },
  header: {
    backgroundColor: '#0077b6',
    paddingTop: 50,
    paddingBottom: 60,
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  avatarContainer: {
    width: 100, height: 100, backgroundColor: '#fff',
    borderRadius: 50, justifyContent: 'center', alignItems: 'center',
    marginBottom: 15, elevation: 5,
  },
  nome: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  email: { fontSize: 14, color: '#ade8f4', marginTop: 5 },
  statusCard: {
    flexDirection: 'row', backgroundColor: '#fff',
    marginHorizontal: 20, marginTop: -30, borderRadius: 15,
    padding: 20, elevation: 8, justifyContent: 'space-around', alignItems: 'center',
  },
  statusItem: { alignItems: 'center', flex: 1 },
  statusLabel: { fontSize: 12, color: '#999', marginBottom: 4 },
  statusValor: { fontSize: 16, fontWeight: 'bold', color: '#03045e' },
  divisor: { width: 1, height: 30, backgroundColor: '#eee' },
  menuContainer: { padding: 25 },
  menuTitulo: { fontSize: 18, fontWeight: 'bold', color: '#03045e', marginBottom: 20 },
  opcaoMenu: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', padding: 15, borderRadius: 15,
    marginBottom: 12, elevation: 2,
  },
  textoOpcao: { flex: 1, marginLeft: 15, fontSize: 16, color: '#03045e' },
  botaoSair: {
    flexDirection: 'row', backgroundColor: '#ff4d4d',
    marginTop: 20, padding: 15, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', elevation: 3,
  },
  textoBotaoSair: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginLeft: 10 },
  overlayAviso: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center', zIndex: 999,
  },
  caixaAviso: {
    backgroundColor: '#03045e', padding: 25, borderRadius: 20,
    flexDirection: 'row', alignItems: 'center', elevation: 10,
  },
  textoAviso: { color: '#fff', fontWeight: 'bold', marginLeft: 15, fontSize: 16 },
});