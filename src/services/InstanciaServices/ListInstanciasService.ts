import { child, Database, get, getDatabase, ref } from "@firebase/database";

interface IInstancia {
  id: string;
  cidade: string;
  cidade_id: string;
  nome: string;
  uf: string;
  url: string;
  status: string;
}

class ListInstanciasService {
  private database: Database;

  constructor() {
    this.database = getDatabase();
  }

  async execute(): Promise<IInstancia[]> {
    const response = ref(this.database);
    const snapshot = await get(child(response, 'instancias'));

    if(snapshot.exists()) {
      const instanciasJson = snapshot.toJSON() as object;

      const instancias = Object.entries(instanciasJson).map((instancia) => ({
        id: instancia[0], 
        ...instancia[1]
      }));

      return instancias;
    }

    return [];
  }
}

export { ListInstanciasService, IInstancia }