import { View, Text } from 'react-native';

export default function SacolaQIV() {
  return (
    <View style={{ flex: 1, backgroundColor: '#121B2D', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <Text style={{ color: '#E5ECF7', fontSize: 24, fontWeight: 'bold' }}>Sacola</Text>
      <Text style={{ color: '#8FB3E2', marginTop: 10, textAlign: 'center' }}>Sacola de compras.</Text>
    </View>
  );
}