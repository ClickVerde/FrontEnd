import Produto from '../../../models/Produtos'
import { Link } from 'react-router-dom';

interface CardProdutoProps {
  prod: Produto
}

function CardProduto({prod}: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src={prod.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{prod.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{prod.nome}</h4>
          <p>{prod.descricao}</p>
          <p>Categoria: {prod.categoria?.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
              dateStyle: 'full',
              timeStyle: 'medium',
            }).format(new Date(prod.data))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarProduto/${prod.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${prod.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto;