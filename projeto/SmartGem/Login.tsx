import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const EMAIL_VALIDOIQV = 'teste@smartgem.com';
const SENHA_VALIDAIQV = 'Smart123';

const CORESIQV = {
  fundo: '#192338',
  campo: '#1E2E4F',
  botao: '#31487A',
  destaque: '#8FB3E2',
  texto: '#D9E1F1',
};

type LoginProps = {
  onLoginSuccess: () => void;
};

export default function LoginIQV({ onLoginSuccess: onLoginSuccessIQV }: LoginProps) {
  const [emailIQV, setEmailIQV] = useState('');
  const [senhaIQV, setSenhaIQV] = useState('');
  const [mostrarSenhaIQV, setMostrarSenhaIQV] = useState(false);
  const [mensagemIQV, setMensagemIQV] = useState('');
  const [sucessoIQV, setSucessoIQV] = useState(false);

  function entrarIQV() {
    if (
      emailIQV.trim().toLowerCase() === '' && senhaIQV === ''
    ) {
      setMensagemIQV('Por favor, insira um e-mail e uma senha.');
      setSucessoIQV(false);
    } else {
      if (emailIQV.trim().toLowerCase() === '') {
        setMensagemIQV('Por favor, insira um e-mail.');
        setSucessoIQV(false);
      }
      if (senhaIQV === '') {
        setMensagemIQV('Por favor, insira uma senha.');
        setSucessoIQV(false);
      }
    }
    if (emailIQV.trim().toLowerCase() !== '' && senhaIQV !== '') {
      if (
        emailIQV.trim().toLowerCase() === EMAIL_VALIDOIQV &&
        senhaIQV === SENHA_VALIDAIQV
      ) {
        setMensagemIQV('Login realizado com sucesso!');
        setSucessoIQV(true);

        onLoginSuccessIQV();
      }
      if (
        emailIQV.trim().toLowerCase() !== EMAIL_VALIDOIQV &&
        senhaIQV !== SENHA_VALIDAIQV
      ) {
        setMensagemIQV('Email e senha incorretos.');
        setSucessoIQV(false);
      }
      if (
        emailIQV.trim().toLowerCase() !== EMAIL_VALIDOIQV && senhaIQV === SENHA_VALIDAIQV
      ) {
        setMensagemIQV('Email incorreto.');
        setSucessoIQV(false);
      }
      if (
        emailIQV.trim().toLowerCase() === EMAIL_VALIDOIQV && senhaIQV !== SENHA_VALIDAIQV
      ) {
        setMensagemIQV('Senha incorreta.');
        setSucessoIQV(false);
      }
    }
  }

  return (
    <View style={stylesIQV.container}>
      <Text style={stylesIQV.logo}>SmartGem</Text>

      <Text style={stylesIQV.subtitulo}>
        JOIAS E ACESSÓRIOS INTELIGENTES PARA O SEU DIA A DIA
      </Text>

      <Text style={stylesIQV.titulo}>Bem-vindo!</Text>

      <Text style={stylesIQV.descricao}>
        Entre na sua conta para continuar.
      </Text>

      <Text style={stylesIQV.label}>E-mail</Text>

      <TextInput
        style={stylesIQV.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor={CORESIQV.destaque}
        value={emailIQV}
        onChangeText={(textoIQV) => {
          setEmailIQV(textoIQV);
          setMensagemIQV('');
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={stylesIQV.label}>Senha</Text>

      <View style={stylesIQV.campoSenha}>
        <TextInput
          style={stylesIQV.inputSenha}
          placeholder="Digite sua senha"
          placeholderTextColor={CORESIQV.destaque}
          value={senhaIQV}
          onChangeText={(textoIQV) => {
            setSenhaIQV(textoIQV);
            setMensagemIQV('');
          }}
          secureTextEntry={!mostrarSenhaIQV}
          autoCapitalize="none"
          onSubmitEditing={entrarIQV}
          returnKeyType="done"
        />

        <Pressable
          onPress={() => setMostrarSenhaIQV(!mostrarSenhaIQV)}
        >
          <Text style={stylesIQV.mostrarSenha}>
            {mostrarSenhaIQV ? 'Ocultar' : 'Mostrar'}
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed: pressedIQV }) => [
          stylesIQV.botao,
          pressedIQV && stylesIQV.botaoPressionado,
        ]}
        onPress={entrarIQV}
      >
        <Text style={stylesIQV.textoBotao}>Entrar</Text>
      </Pressable>

      {mensagemIQV !== '' && (
        <Text
          style={[
            stylesIQV.mensagem,
            {
              color: sucessoIQV ? '#8FD9B6' : '#FF9C9C',
            },
          ]}
        >
          {mensagemIQV}
        </Text>
      )}

      <Pressable
        onPress={() => {
          setMensagemIQV('Cadastro ainda não implementado.');
          setSucessoIQV(false);
        }}
      >
        <Text style={stylesIQV.cadastro}>
          Não tem uma conta?{' '}
          <Text style={stylesIQV.cadastroDestaque}>
            Cadastre-se
          </Text>
        </Text>
      </Pressable>
    </View>
  );
}

const stylesIQV = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORESIQV.fundo,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  logo: {
    color: CORESIQV.destaque,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    color: CORESIQV.texto,
    fontSize: 10,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 55,
  },

  titulo: {
    color: CORESIQV.texto,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  descricao: {
    color: CORESIQV.destaque,
    fontSize: 14,
    marginBottom: 30,
  },

  label: {
    color: CORESIQV.texto,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },

  input: {
    backgroundColor: CORESIQV.campo,
    color: CORESIQV.texto,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: CORESIQV.botao,
  },

  campoSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CORESIQV.campo,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: CORESIQV.botao,
    paddingHorizontal: 15,
    marginBottom: 25,
  },

  inputSenha: {
    flex: 1,
    color: CORESIQV.texto,
    paddingVertical: 15,
  },

  mostrarSenha: {
    color: CORESIQV.destaque,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 8,
  },

  botao: {
    backgroundColor: CORESIQV.botao,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoPressionado: {
    opacity: 0.75,
  },

  textoBotao: {
    color: CORESIQV.texto,
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
    color: CORESIQV.texto,
    textAlign: 'center',
    marginTop: 25,
    fontSize: 13,
  },

  cadastroDestaque: {
    color: CORESIQV.destaque,
    fontWeight: 'bold',
  },
});