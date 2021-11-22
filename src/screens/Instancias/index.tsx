import React, { useEffect, useState } from 'react';
import { FiEdit, FiPlus, FiSearch, FiTrash } from 'react-icons/fi';
import { Modal } from '../../components/Modal';

import { TabBarNavigation } from '../../components/TabBarNavigation';

import { CreateInstanciaService } from '../../services/InstanciaServices/CreateInstanciaService';
import { DeleteInstanciaService } from '../../services/InstanciaServices/DeleteInstanciaService';
import { ListInstanciasService, IInstancia } from '../../services/InstanciaServices/ListInstanciasService';
import { UpdateInstanciaService } from '../../services/InstanciaServices/UpdateInstanciaService';

import { ButtonAction, Container, ContainerWrapper, FormInstancia, Header, HeaderActions } from './styles';

export function Instancias() {
  const listInstanciasService = new ListInstanciasService();
  const createInstanciaService = new CreateInstanciaService();
  const updateInstanciaService = new UpdateInstanciaService();
  const deleteInstanciaService = new DeleteInstanciaService();

  const [instancias, setInstancias] = useState<IInstancia[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('Cadastrar Instância');
  const [blocked, setBlocked] = useState(true);

  const id = document.getElementById('id') as HTMLInputElement;
  const nome = document.getElementById('nome') as HTMLInputElement;
  const cidade = document.getElementById('cidade') as HTMLInputElement;
  const uf = document.getElementById('uf') as HTMLInputElement;
  const url = document.getElementById('url') as HTMLInputElement;
  const status = document.getElementById('status') as HTMLSelectElement;

  async function carregarInstancias() {
    return await listInstanciasService.execute();
  };

  async function handleSaveInstance() {
    setBlocked(true);
    const instancia = {
      id: id.value,
      nome: nome.value,
      cidade: cidade.value,
      uf: uf.value,
      url: url.value,
      status: status.value,
    };

    if (id.value) {
      await updateInstanciaService.execute(instancia);
    } else {
      await createInstanciaService.execute(instancia);
    }

    setBlocked(false);
    setShowModal(false);
    const instancias = await carregarInstancias();
    setInstancias(instancias);
  }

  async function handleDeleteInstance(id: string) {
    await deleteInstanciaService.execute(id);
    const reponse = await carregarInstancias();
    setInstancias(reponse);
  }

  function handleCreateInstance() {
    setTitleModal('Cadastrar Instância');
    limparFormulario();
    setBlocked(false);
    setShowModal(true);
  }

  function handleShowInstance(instanciaId: string) {
    setTitleModal('Visualizar Instância');
    setBlocked(true);
    setShowModal(true);

    const instancia = instancias.find(inst => inst.id === instanciaId) as IInstancia;
    carregaFormulario(instancia);
  }

  function handleEditInstance(instanciaId: string) {
    setTitleModal('Editar Instância');
    setBlocked(false);
    setShowModal(true);

    const instancia = instancias.find(inst => inst.id === instanciaId) as IInstancia;
    carregaFormulario(instancia);
  }

  // function handleRemoveInstance (instanciaId: string) {
  //   setTitleModal('Remover Instância');
  //   setShowModal(true);
  // }

  function carregaFormulario(instancia: IInstancia) {
    nome.value = instancia.nome;
    cidade.value = instancia.cidade;
    uf.value = instancia.uf;
    url.value = instancia.url;
    id.value = instancia.id;
    status.value = instancia.status;
  }

  function limparFormulario() {
    nome.value = '';
    cidade.value = '';
    uf.value = '';
    url.value = '';
    id.value = '';
    status.value = '';
  }

  function dismissModal() {
    setShowModal(false);
    limparFormulario();
  }

  useEffect(() => {
    document.title = "VersaSUS Suporte - Instâncias";

    carregarInstancias().then(response => {
      setInstancias(response);
    });
  }, []);

  return (
    <>
      <Container>
        <TabBarNavigation />

        <ContainerWrapper>
          <Header>
            <h1>Instancias</h1>

            <HeaderActions>
              <button
                onClick={handleCreateInstance}
              >
                <FiPlus /> Cadastrar
              </button>
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
                  <ButtonAction 
                    className="show"
                    onClick={() => handleShowInstance(instancia.id)}
                  >
                    <FiSearch />
                  </ButtonAction>
                  <ButtonAction 
                    className="edit"
                    onClick={() => handleEditInstance(instancia.id)}
                  >
                    <FiEdit />
                  </ButtonAction>
                  <ButtonAction 
                    className="remove"
                    onClick={() => handleDeleteInstance(instancia.id)}
                  >
                    <FiTrash />
                  </ButtonAction>
                </td>
              </tr>
            ))}
            { console.log(instancias) }
            </tbody>
            <tfoot>
            </tfoot>
          </table>
        </ContainerWrapper>  
      </Container>

      <Modal 
        title={titleModal}
        modalDismiss={dismissModal}
        modalShow={showModal}
      >
        <FormInstancia>
          <div className="row">
            <div className="input-block">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" disabled={blocked}/>
              <input type="hidden" id="id" name="id" disabled={blocked}/>
            </div>
          </div>

          <div className="row">
            <div className="input-block">
              <label htmlFor="cidade">Cidade</label>
              <input type="text" id="cidade" name="cidade" disabled={blocked}/>
            </div>

            <div className="divider"></div>

            <div className="input-block">
              <label htmlFor="cidade">UF</label>
              <input type="text" id="uf" name="uf" disabled={blocked}/>
            </div>
          </div>

          <div className="row">
            <div className="input-block">
              <label htmlFor="url">URL</label>
              <input type="text" id="url" name="url" disabled={blocked}/>
            </div>
          </div>

          <div className="row">
            <div className="input-block">
              <label htmlFor="status">Estado</label>
              <select id="status" name="status" disabled={blocked}>
                <option value="">Selecione</option>
                <option value="1">Ativado</option>
                <option value="0">Desativado</option>
              </select>
            </div>
          </div>

          <div className="row-buttons">
            <button 
              className="save"
              onClick={() => handleSaveInstance()}
            >
              Salvar
            </button>
            <div className="divider" />
            <button 
              className="close"
              onClick={dismissModal}
            >
              Fechar
            </button>
          </div>
        </FormInstancia>
      </Modal>
    </>
  );
}