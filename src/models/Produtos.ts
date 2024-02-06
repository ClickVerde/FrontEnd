import Categoria from './Categorias';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  foto: string;
  descricao: string;
  qtd_vendas: number;
  data: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}