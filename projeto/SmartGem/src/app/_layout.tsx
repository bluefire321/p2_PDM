
import { Stack } from 'expo-router';

export default function RootLayoutIQV() {
  return (
    <Stack screenOptions={{ headerShown: false,}}>
      <Stack.Screen name="Login" />
      <Stack.Screen name="ListaP" />
      <Stack.Screen name="Detalhes" />
      
    </Stack>


  );
}
