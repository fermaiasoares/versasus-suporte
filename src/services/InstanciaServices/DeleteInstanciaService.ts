import { Database, getDatabase, remove, ref } from "@firebase/database";

class DeleteInstanciaService {
  private database: Database;

  constructor() {
    this.database = getDatabase();
  }

  async execute(id: string) {
    const reference = ref(this.database, `instancias/${id}`);
    await remove(reference)
    .then(() => 'Instância removida com sucesso!')
    .catch(() => 'Erro ao remover a instância!');
  }
}

export { DeleteInstanciaService }