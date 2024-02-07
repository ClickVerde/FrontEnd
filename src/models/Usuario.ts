import Produtos  from "./Produtos";

export default interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  foto: string;
  cpf_cnpj: string;
  tipo: string;
  data: string;
  produtos?: Produtos | null;
}