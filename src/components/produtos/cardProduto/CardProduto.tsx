import Produto from '../../../models/Produtos'
import { Link } from 'react-router-dom';
import defaultImage from '../../../assets/Photo.png';

interface CardProdutoProps {
  prod: Produto
}

function CardProduto({ prod }: CardProdutoProps) {
  return (
    <div className='grid grid-row-3 border-t shadow-lg rounded-[30px] w-[335px] h-[483px] bg-seasalt'>
      <div className=" px-2 gap-2">
        <h4 className='flex justify-start text-lg font-bold uppercase p-6'>{prod.categoria?.nome}</h4>
      </div>
      <div className='p-4'>
        <img src={prod.foto} className='h-30 rounded-lg' alt="" />
      </div>

      <div className='grid grid-row-2 p-4 gap-4 border-b bg-seasalt rounded-b-[30px]'>
        <div>
          <p className='text-sm font-semibold uppercase'>{prod.nome}</p>
        </div>
        <hr />
        <div>
          <p className='text-sm font-semibold uppercase'>{prod.preco} R$</p>
          <p className='text-sm font-semibold'>{prod.quantidade} Qtd</p>
        </div>
      </div>

      {/* <p>{prod.descricao}</p>
        <p>Categoria: {prod.categoria?.descricao}</p>
        <p>Data: {new Intl.DateTimeFormat(undefined, {
          dateStyle: 'full',
          timeStyle: 'medium',
        }).format(new Date(prod.data))}</p> */}

      {/* <div className="flex">
        <Link to={`/editarProduto/${prod.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${prod.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div> */}
    </div>
  )
}

export default CardProduto;