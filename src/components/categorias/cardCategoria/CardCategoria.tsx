import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categorias'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    <div className='bflex flex-coloverflow-hidden justify-between object-cover'>
      <img className=' w-[400px] h-[400px] object-cover rounded-[30px]' src={categoria.foto} alt="" />
      <p className='p-4 text-lg font-bold text-[#3E5622]'>{categoria.nome}</p>
      <p className='pl-4 pb-4 font-bold text-[12px] h-full text-[#5b852b]'>{categoria.descricao}</p>
      
      {/* <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-black hover:text-blue-600 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-black hover:text-red-600 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div> */}

    </div>
  )
}

export default CardCategorias