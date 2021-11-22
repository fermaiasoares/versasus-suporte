import { getDatabase, Database, ref, set, push } from 'firebase/database';

interface IRequest {
  id?: string;
  cidade: string;
  nome: string;
  uf: string;
  url: string;
  status: string;
}

class CreateInstanciaService {
  private database: Database;

  constructor() {
    this.database = getDatabase();
  }

  async execute({
    cidade,
    nome,
    uf,
    url,
    status
  }: IRequest) {
    const testes = ref(this.database, 'instancias');
    const newInstance = push(testes);

    const cidade_id = cidade.toLowerCase().replace(/ /g, '_');

    return await set(newInstance, {
      cidade_id,
      cidade,
      nome,
      uf,
      url,
      status
    })
      .then(() => 'Instância salva com sucesso!')
      .catch(() => 'Error ao salvar instância!');
  }
}

export { CreateInstanciaService };