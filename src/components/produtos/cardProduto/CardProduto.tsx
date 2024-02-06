import Produto from '../../../models/Produtos'
import { Link } from 'react-router-dom';
import defaultImage from '../../../assets/Photo.png';

interface CardProdutoProps {
  prod: Produto
}

function CardProduto({ prod }: CardProdutoProps) {
  return (

    <>
      <div className='grid grid-row-3 border-t shadow-lg rounded-[30px] w-[335px] h-[483px] bg-seasalt'>
        <button className='bg-[#3E5622] max-w-[20%] h-[50%] rounded-xl text-center m-4'>
          <p className='text-white text-[10px] font-bold uppercase '>{prod.nome}</p>
        </button>
        <img src={prod.foto} className='p-4 w-[400px] h-[300px] object-cover rounded-[30px]' alt="" />
        <p className='pl-4 py-4 text-sm font-semibold uppercase'>{prod.categoria?.nome}</p>
        <hr />
        <p className='pl-4 text-sm font-semibold uppercase'>{prod.preco} R$</p>
        <p className='pb-6 pl-4 text-sm font-semibold'>{prod.quantidade} Qtd</p>
      </div>

    </>

  )

  /* <p>{prod.descricao}</p>
    <p>Categoria: {prod.categoria?.descricao}</p>
    <p>Data: {new Intl.DateTimeFormat(undefined, {
      dateStyle: 'full',
      timeStyle: 'medium',
    }).format(new Date(prod.data))}</p> */

  /* <div className="flex">
        <Link to={`/editarProduto/${prod.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${prod.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div> */
}

export default CardProduto;