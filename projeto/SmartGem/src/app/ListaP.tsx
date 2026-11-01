//Lembrem de adicionar as iniciais de cada integrante (IQV) em todas as variáveis, funções e estados 
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import Detalhes from './Detalhes';
import { produtos } from '../Data/DataDetalhes';

export default function ListaP() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo à SmartGem!</Text>
      <Text>Esta é a página principal do aplicativo.</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push({
          pathname: '/Detalhes',
          params: { id: String(produtos[0].id) }, // Vou tentar passar o id e depois usar useLocalSearchParams para pegar o produto correto na tela de detalhes.
        })}
      >
        <Text style={styles.botaoTexto}>Ir para Detalhes do Produto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push({
          pathname: '/Detalhes',
          params: { id: String(produtos[1].id) }, // Vou tentar passar o id do segundo produto e depois usar useLocalSearchParams para pegar o produto correto na tela de detalhes.
        })}
      >
        <Text style={styles.botaoTexto}>Ir para Detalhes do Produto 02</Text>
      </TouchableOpacity>
    </View>//SUCESSO!
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192338',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  botao: {
    backgroundColor: '#8FB3E2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  titulo: {
    color: '#8FB3E2',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});