import { router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function index(){
  return (
    <View style={styles.container}>
      <Text>Sapoha funcinou eu vo chorar</Text>

      <TouchableOpacity onPress={() => router.push('/Login')}>
        <Text style={styles.botao}>Clica aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#087eb9',
  },

  botao: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#8254ff',
    color: '#000',
    fontSize: 16,
  }
});