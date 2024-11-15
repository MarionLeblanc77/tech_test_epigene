export interface IGeneset {
    "title": "string";
    "id": 0;
    "genes": IGenes[]
}

export interface IGenes {
    name: string;
    id: number;
    geneset_id: number
  }