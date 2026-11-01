import { useState } from 'react';
import ListaP from './ListaP';
import Login from './Login';

export default function App() {
  const [logado, setLogado] = useState(false);

  if (!logado) {
    return (
      <Login
        onLoginSuccess={() => setLogado(true)}
      />
    );
  }

  return <ListaP />;
}