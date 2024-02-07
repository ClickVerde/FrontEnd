import Produtos from "./Produtos";
export default interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    foto: string;
    produtos?: Produtos[] | [];
  }