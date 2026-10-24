import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

const EMAIL_VALIDO = 'teste@smarttech.com';
const SENHA_VALIDA = 'Smart123';

const CORES = {
  fundo: '#192338',
  campo: '#1E2E4F',
  botao: '#31487A',
  destaque: '#8FB3E2',
  texto: '#D9E1F1',
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  function entrar() {
    if (
      email.trim().toLowerCase() === '' &&
      senha === ''
    ) {
      setMensagem('Por favor, insira um e-mail e/ou uma senha.');
      setSucesso(false);
    }
     if (
      email.trim().toLowerCase() !== EMAIL_VALIDO && senha === SENHA_VALIDA
    ) {
      setMensagem('Email incorreto.');
      setSucesso(false);
    }
     if (
      email.trim().toLowerCase() === EMAIL_VALIDO && senha !== SENHA_VALIDA
    ) {
      setMensagem('Senha incorreta.');
      setSucesso(false);
    }
    if (
      email.trim().toLowerCase() === EMAIL_VALIDO &&
      senha === SENHA_VALIDA
    ) {
      setMensagem('Login realizado com sucesso!');
      setSucesso(true);
      //levar pra tela ListaP
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SmartTech</Text>

      <Text style={styles.subtitulo}>
        TECNOLOGIA PARA O SEU DIA A DIA
      </Text>

      <Text style={styles.titulo}>Bem-vindo!</Text>

      <Text style={styles.descricao}>
        Entre na sua conta para continuar.
      </Text>

      <Text style={styles.label}>E-mail</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor={CORES.destaque}
        value={email}
        onChangeText={(texto) => {
          setEmail(texto);
          setMensagem('');
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.label}>Senha</Text>

      <View style={styles.campoSenha}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Digite sua senha"
          placeholderTextColor={CORES.destaque}
          value={senha}
          onChangeText={(texto) => {
            setSenha(texto);
            setMensagem('');
          }}
          secureTextEntry={!mostrarSenha}
          autoCapitalize="none"
          onSubmitEditing={entrar}
          returnKeyType="done"
        />

        <Pressable
          onPress={() => setMostrarSenha(!mostrarSenha)}
        >
          <Text style={styles.mostrarSenha}>
            {mostrarSenha ? 'Ocultar' : 'Mostrar'}
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.botao,
          pressed && styles.botaoPressionado,
        ]}
        onPress={entrar}
      >
        <Text style={styles.textoBotao}>Entrar</Text>
      </Pressable>

      {mensagem !== '' && (
        <Text
          style={[
            styles.mensagem,
            {
              color: sucesso ? '#8FD9B6' : '#FF9C9C',
            },
          ]}
        >
          {mensagem}
        </Text>
      )}

      <Pressable
        onPress={() => {
          setMensagem('Cadastro ainda não implementado.');
          setSucesso(false);
        }}
      >
        <Text style={styles.cadastro}>
          Não tem uma conta?{' '}
          <Text style={styles.cadastroDestaque}>
            Cadastre-se
          </Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.fundo,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  logo: {
    color: CORES.destaque,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    color: CORES.texto,
    fontSize: 10,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 55,
  },

  titulo: {
    color: CORES.texto,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  descricao: {
    color: CORES.destaque,
    fontSize: 14,
    marginBottom: 30,
  },

  label: {
    color: CORES.texto,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },

  input: {
    backgroundColor: CORES.campo,
    color: CORES.texto,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: CORES.botao,
  },

  campoSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CORES.campo,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: CORES.botao,
    paddingHorizontal: 15,
    marginBottom: 25,
  },

  inputSenha: {
    flex: 1,
    color: CORES.texto,
    paddingVertical: 15,
  },

  mostrarSenha: {
    color: CORES.destaque,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 8,
  },

  botao: {
    backgroundColor: CORES.botao,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoPressionado: {
    opacity: 0.75,
  },

  textoBotao: {
    color: CORES.texto,
    fontSize: 16,
    fontWeight: 'bold',
  },

  mensagem: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
    fontWeight: '600',
  },

  cadastro: {
    color: CORES.texto,
    textAlign: 'center',
    marginTop: 25,
    fontSize: 13,
  },

  cadastroDestaque: {
    color: CORES.destaque,
    fontWeight: 'bold',
  },
});