
import { View, Text, StyleSheet } from 'react-native';

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
        Projeto acadêmico{"\n"}
        Desenvolvimento Mobile{"\n"}
        Expo SDK 54{"\n"}
        React Native
      </Text>

      <Text style={estilosSobreIQV.rodape}>
        SmartGem © 2026
      </Text>

    </View>
  );
}

const estilosSobreIQV = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 25,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3d16e9',
    marginBottom: 20,
  },

  descricao: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 24,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 12,
    color: '#252525',
  },

  informacoes: {
    fontSize: 15,
    color: '#666666',
    lineHeight: 27,
  },

  rodape: {
    marginTop: 40,
    color: '#999999',
    fontSize: 12,
    textAlign: 'center',
  },
});
