import { View, Text, StyleSheet } from 'react-native';

export default function ListaP() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo à SmartGem!</Text>
      <Text>Esta é a página principal do aplicativo.</Text>
    </View>
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

  titulo: {
    color: '#8FB3E2',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});