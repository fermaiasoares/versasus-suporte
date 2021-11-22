import { ListInstanciasService } from "./ListInstanciasService";

let listInstanciasService: ListInstanciasService;

describe('Create Instancia Service', () => {
  beforeEach(() => {
    listInstanciasService = new ListInstanciasService();
  })

  it('Should be able create a instancia in firebase', async () => {
    const response = await listInstanciasService.execute();

    expect(response[0]).toHaveProperty('id');
    expect(response[0]).toHaveProperty('nome');
    expect(response[0]).toHaveProperty('url');
  })
})