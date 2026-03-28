import React, { useState, useLayoutEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, 
  TextInput, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Botao from '../components/Button';

export default function HomeScreen({ navigation }) {

  const [modalVisivel, setModalVisivel] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLogado, setIsLogado] = useState(false);

  const [usuarioSalvo, setUsuarioSalvo] = useState(null); 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');

  const handleLogoutGlobal = () => {
    setIsLogado(false);
    setEmail('');
    setSenha('');
  };

  const abrirPerfil = () => {
    if (isLogado && usuarioSalvo) {
      navigation.navigate('Profile', { 
        nomeUsuario: usuarioSalvo.nome, 
        emailUsuario: usuarioSalvo.email,
        onLogout: handleLogoutGlobal
      });
    } else {
      setModalVisivel(true);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.iconBtn}>
            <Ionicons name="cart-outline" size={26} color="#fff" />
            <View style={styles.badge}><Text style={styles.badgeText}>0</Text></View>
          </TouchableOpacity>

          <TouchableOpacity onPress={abrirPerfil} style={styles.iconBtn}>
            <Ionicons 
              name={isLogado ? "person-circle" : "person-circle-outline"} 
              size={28} 
              color={isLogado ? "#ade8f4" : "#fff"} 
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, isLogado, usuarioSalvo]);

  const handleAutenticacao = () => {
    setMensagem('');
    if (isLogin) {
      if (usuarioSalvo && email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
        setTipoMensagem('sucesso');
        setMensagem(`Aloha, ${usuarioSalvo.nome}!`);
        setTimeout(() => {
          setIsLogado(true);
          setModalVisivel(false);
          setMensagem('');
        }, 1500);
      } else {
        setTipoMensagem('erro');
        setMensagem("E-mail ou senha incorretos.");
      }
    } else {
      if (!nome || !email || !senha) {
        setTipoMensagem('erro');
        setMensagem("Preencha todos os campos!");
        return;
      }
      setUsuarioSalvo({ nome, email, senha });
      setTipoMensagem('sucesso');
      setMensagem("Conta criada com sucesso!");
      setTimeout(() => {
        setIsLogin(true);
        setMensagem('');
      }, 1500);
    }
  };

  return (
    <ScrollView style={styles.mainScroll} contentContainerStyle={styles.container}>
      
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>ALOHA SUMMER</Text>
        <Text style={styles.bannerSub}>Pranchas com 20% OFF</Text>
      </View>

      <Text style={styles.sectionTitle}>Categorias</Text>
      <View style={styles.categoriesArea}>
        <View style={styles.catItem}>
          <View style={styles.catCircle}><Ionicons name="water" size={26} color="#0077b6" /></View>
          <Text style={styles.catText}>Pranchas</Text>
        </View>
        <View style={styles.catItem}>
          <View style={styles.catCircle}><Ionicons name="shirt" size={26} color="#0077b6" /></View>
          <Text style={styles.catText}>Wetsuits</Text>
        </View>
        <View style={styles.catItem}>
          <View style={styles.catCircle}><Ionicons name="construct" size={24} color="#0077b6" /></View>
          <Text style={styles.catText}>Acessórios</Text>
        </View>
      </View>

      <Botao title="Ver Catálogo" onPress={() => navigation.navigate('List')} />

      <Modal animationType="slide" transparent={true} visible={modalVisivel}>
        <View style={styles.fundoModal}>
          <View style={styles.miniTela}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => {setModalVisivel(false); setMensagem('');}}>
              <Ionicons name="close" size={26} color="#03045e" />
            </TouchableOpacity>

            <Text style={styles.modalTitulo}>{isLogin ? 'Login' : 'Cadastro'}</Text>
            
            {mensagem !== '' && (
              <View style={[styles.avisoContainer, tipoMensagem === 'erro' ? styles.avisoErro : styles.avisoSucesso]}>
                <Text style={tipoMensagem === 'erro' ? styles.textoErro : styles.textoSucesso}>{mensagem}</Text>
              </View>
            )}

            {!isLogin && (
              <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
            )}
            <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />

            <TouchableOpacity style={styles.botaoAcao} onPress={handleAutenticacao}>
              <Text style={styles.textoBotaoAcao}>{isLogin ? 'ENTRAR' : 'CADASTRAR'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setIsLogin(!isLogin); setMensagem('');}} style={styles.linkTroca}>
              <Text style={styles.textoLink}>{isLogin ? 'Criar nova conta' : 'Já tenho conta'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainScroll: { flex: 1, backgroundColor: '#caf0f8' },
  container: { padding: 20, alignItems: 'center' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { marginLeft: 15 },
  badge: { position: 'absolute', right: -5, top: -5, backgroundColor: '#ff4d4d', borderRadius: 9, width: 18, height: 18, justifyContent: 'center', alignItems: 'center' },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  banner: { width: '100%', height: 120, backgroundColor: '#0077b6', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  bannerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  bannerSub: { color: '#ade8f4', fontSize: 14 },
  sectionTitle: { alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: '#03045e', marginBottom: 15 },
  categoriesArea: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 30 },
  catItem: { alignItems: 'center' },
  catCircle: { width: 60, height: 60, backgroundColor: '#fff', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 5, elevation: 4 },
  catText: { fontSize: 12, color: '#03045e' },
  fundoModal: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  miniTela: { backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25, height: '75%', alignItems: 'center' },
  closeBtn: { alignSelf: 'flex-end' },
  modalTitulo: { fontSize: 24, fontWeight: 'bold', color: '#03045e', marginBottom: 15 },
  avisoContainer: { width: '100%', padding: 12, borderRadius: 10, marginBottom: 15, borderWidth: 1 },
  avisoErro: { backgroundColor: '#ffebee', borderColor: '#ff4d4d' },
  avisoSucesso: { backgroundColor: '#e8f5e9', borderColor: '#2ecc71' },
  textoErro: { color: '#ff4d4d', fontWeight: 'bold', textAlign: 'center' },
  textoSucesso: { color: '#2ecc71', fontWeight: 'bold', textAlign: 'center' },
  input: { width: '100%', height: 50, backgroundColor: '#f1f1f1', borderRadius: 12, paddingHorizontal: 15, marginBottom: 15, borderWidth: 1, borderColor: '#ddd' },
  botaoAcao: { backgroundColor: '#0077b6', width: '100%', height: 55, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  textoBotaoAcao: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  linkTroca: { marginTop: 20 },
  textoLink: { color: '#0077b6', textDecorationLine: 'underline' }
});