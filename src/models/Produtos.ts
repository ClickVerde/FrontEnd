import Tema from './Categorias';
import Usuario from './Usuario';

export default interface Postagem {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  foto: string;
  descricao: string;
  qtd_vendas: number;
  data: string;
  tema: Tema | null;
  usuario: Usuario | null;
}