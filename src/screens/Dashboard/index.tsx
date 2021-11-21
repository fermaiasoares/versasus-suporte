import React, { useEffect } from 'react';

// import { useAuth } from '../../hooks/auth';

import { Container } from './styles';
import { TabBarNavigation } from '../../components/TabBarNavigation/index';

export const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = `VersaSUS Suporte - Painel de Controle`;
  }, []);

  return (
    <Container>
      <TabBarNavigation />
    </Container>
  );
}