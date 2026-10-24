import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    if (email === '' || senha === '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    Alert.alert('Bem-vindo!', 'Login realizado com sucesso!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>NEXTECH</Text>
      <Text style={styles.subtitulo}>TECH ACCESSORIES</Text>

      <Text style={styles.titulo}>Faça seu login</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Pressable style={styles.botao} onPress={entrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </Pressable>

      <Text style={styles.cadastro}>
        Não tem uma conta? Cadastre-se!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1020',
    justifyContent: 'center',
    padding: 25,
  },

  logo: {
    color: '#6878FF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    color: '#A5B4FC',
    textAlign: 'center',
    marginBottom: 50,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#171F33',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#6878FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cadastro: {
    color: '#A5B4FC',
    textAlign: 'center',
    marginTop: 25,
  },
});