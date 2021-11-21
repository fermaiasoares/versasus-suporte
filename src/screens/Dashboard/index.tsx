import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

export const Dashboard: React.FC = () => {

  const { user, signOut } = useAuth();

  useEffect(() => {
    document.title = `VersaSUS Suport - Painel de Controle`;
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>

      <p>Bem vindo {user?.email}</p>

      <button onClick={signOut}>Sair</button>
    </Container>
  );
}