import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { TabLink, TabNavigation, TabNavigationItens, TabUserProfile } from './styles';

import { Button } from '../Button';

export function TabBarNavigation() {
  const { signOut } = useAuth();

  return (
    <TabNavigation>
      <TabNavigationItens>
        <TabLink>
          <Link to="/">
            Painel de Controle
          </Link>
        </TabLink>
        <TabLink>
          <Link to="/instancias">
            Instâncias
          </Link>
        </TabLink>
      </TabNavigationItens>

      <TabUserProfile>
        <Button 
          icone={FiLogOut}
          color="#C6C6C6"
          title="Sair"
          onClick={signOut}
        />
      </TabUserProfile>
    </TabNavigation>
  );
}