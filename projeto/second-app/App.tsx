import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // string
  let nome:string = "Gabriel";

  // number
  let idade:number = 29;

  // boolean
  let statusMatricula:boolean = true;  

  // array
  let pessoas:string[] = ["Gabriel", "Ana", "Paula"];
  let idades:number[] = [29, 15, 58];

  // tuple
  let dadosPessoa:[string, number, string, boolean] = ["Gabriel", 29, "FMM", true];

  // object
  type Paciente = {
    nome: string,
    idade?: number,
    status: boolean
  }

  let paciente: Paciente = {
    nome: "Francisco",
    idade: 78,
    status: false
  }

  return (
    <View style={styles.container}>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Status Matrícula: {statusMatricula}</Text>
      <Text>Nome Ana: {pessoas[1]}</Text>
      <Text>Idade Ana: {idades[1]}</Text>
      <Text>Nome paciente: {paciente.nome}</Text>
      <Text>Idade paciente: {paciente.idade}</Text>
      <Text>{`Status: ${paciente.status}`}</Text>
      {/* Ensinar operador ternário */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd779',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
