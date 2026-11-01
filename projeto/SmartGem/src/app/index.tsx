import { Redirect } from 'expo-router';

export default function Index() {
  // Como a Quezia fez com que Login fosse a verdadeira tela inicial, podemos redirecionar para lá.
  return <Redirect href="/Login" />;
}
