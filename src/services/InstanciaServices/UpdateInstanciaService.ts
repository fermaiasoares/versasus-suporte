import { Database, getDatabase, ref, update } from "@firebase/database";

interface IRequest {
  id: string;
  cidade: string;
  nome: string;
  uf: string;
  url: string;
  status: string;
}

class UpdateInstanciaService {
  private database: Database;

  constructor() {
    this.database = getDatabase();
  }

  async execute({
    id,
    cidade,
    nome,
    uf,
    url,
    status
  }: IRequest) {
    const reference = ref(this.database, `instancias/${id}`);

    const cidade_id = cidade.toLowerCase().replace(/ /g, '_');

    return await update(reference,{
      cidade,
      cidade_id,
      nome,
      uf,
      url,
      status
    })
      .then(() => 'Instância salva com sucesso!')
      .catch(() => 'Error ao salvar instância!');

  }
}

export { UpdateInstanciaService }