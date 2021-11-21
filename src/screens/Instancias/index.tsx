import React, { useEffect, useState, useCallback } from 'react';
import { FiEdit, FiPlus, FiSearch, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { TabBarNavigation } from '../../components/TabBarNavigation';

import { ListInstanciasService, IInstancia } from '../../services/InstanciaServices/ListInstanciasService';

import { ButtonAction, Container, ContainerWrapper, Header, HeaderActions } from './styles';

export function Instancias() {
  const [instancias, setInstancias] = useState<IInstancia[]>([]);
  const listInstanciasService = new ListInstanciasService();

  const carregarInstancias = useCallback(async () => {
    return await listInstanciasService.execute();
  }, []);

  useEffect(() => {
    document.title = "VersaSUS Suporte - Instâncias";

    carregarInstancias().then(response => {
      setInstancias(response);
    });
  }, []);

  return (
    <Container>
      <TabBarNavigation />

      <ContainerWrapper>
        <Header>
          <h1>Instancias</h1>

          <HeaderActions>
            <Link to="/instancias/cadastrar">
              <button>
                <FiPlus /> Cadastrar
              </button>
            </Link>
          </HeaderActions>
        </Header>

        <table cellSpacing="0">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cidade</th>
              <th>URL</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
          { instancias.length > 0 && instancias.map((instancia) => (
            <tr key={instancia.id}>
              <td>{instancia.nome}</td>
              <td>{instancia.cidade} - {instancia.uf}</td>
              <td>{instancia.url}</td>
              <td className="center">
                <Link to="/">
                  <ButtonAction className="show">
                    <FiSearch />
                  </ButtonAction>
                </Link>
                <Link to="/">
                  <ButtonAction className="edit">
                    <FiEdit />
                  </ButtonAction>
                </Link>
                <Link to="/">
                  <ButtonAction className="remove">
                    <FiTrash />
                  </ButtonAction>
                </Link>
              </td>
            </tr>
          ))}
          </tbody>
          <tfoot>
          </tfoot>
        </table>
      </ContainerWrapper>
      
    </Container>
  );
}