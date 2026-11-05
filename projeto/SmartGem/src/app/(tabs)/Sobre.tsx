
import { router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function SobreIQV() {
  return (
    <View style={estilosSobreIQV.container}>

      <Text style={estilosSobreIQV.titulo}>
        Sobre o SmartGem
      </Text>

      <Text style={estilosSobreIQV.descricao}>
        O SmartGem é um aplicativo desenvolvido
        para apresentar uma loja virtual de joias
        e acessórios.
      </Text>

      <Text style={estilosSobreIQV.subtitulo}>
        Informações do aplicativo
      </Text>

      <Text style={estilosSobreIQV.informacoes}>
        Projeto para a Matéria de Desenvolvimento Mobile{"\n"}
        Versão: Expo SDK 54{"\n"}
        React Native{"\n"}
      </Text>

      <TouchableOpacity
        style={estilosSobreIQV.botao}
        onPress={() => {
          router.replace('/Login');}}
      >
        <Text style={estilosSobreIQV.textoBotao}>Fazer Logout</Text>
      </TouchableOpacity>

      <Text style={estilosSobreIQV.rodape}>
        SmartGem © 2026
      </Text>

    </View>
  );
}

const estilosSobreIQV = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121B2D',
    justifyContent: 'center',
    padding: 25,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7f92ba',
    marginBottom: 20,
  },

  descricao: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 24,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 12,
    color: '#7f92ba',
  },

  informacoes: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 27,
  },

  rodape: {
    marginTop: 40,
    color: '#999999',
    fontSize: 12,
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#1659e9',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 380,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
