import * as faker from 'faker/locale/pt_BR';

import { CreateInstanciaService } from "./CreateInstanciaService";

let createInstanciaService: CreateInstanciaService;

describe('Create Instancia Service', () => {
  beforeEach(() => {
    createInstanciaService = new CreateInstanciaService();
  })

  it('Should be able create a instancia in firebase', async () => {
    const response = await createInstanciaService.execute({
      nome: faker.name.findName(),
      cidade: faker.address.city(),
      uf: faker.address.state(),
      url: faker.internet.url()
    });

    expect(response).toBe('Instância salva com sucesso!');
  })
})