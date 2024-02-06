import coracao from '../../../assets/icons/heart.svg';
import Produto from '../../../models/Produtos';
interface CardProdutoProps {
  prod: Produto
}

function CardProduto({ prod }: CardProdutoProps) {
  return (

    <>
      <div className='grid grid-row-3 gap-4  rounded-[30px] bg-seasalt px-6 py-4'>
        <div>
        <div className='bg-[#3E5622] w-min p-1 px-2 h-min rounded-lg text-center m-4'>
          <p className='text-white text-[10px] fontCategoriaProdutoCard w-max font-bold capitalize '>{prod.categoria?.nome}</p>
        </div>
        <img src={prod.foto} className=' w-[400px] h-[300px] object-cover rounded-[30px]' alt="" />
        </div>

        <div className='grid gap-1'>
        <p className=' fontProdutoNameCard text-[20px] text-darkMossGreen capitalize my-3'>{prod.nome}</p>
        <div className=''>
          <hr/>
        </div>
        <div className='flex justify-between fontProdutoNameCard text-[17px] text-darkMossGreen'>
        <p className='  font-semibold uppercase'>R${prod.preco}</p>
        <p className=' flex gap-2 font-semibold'>
        <img src={coracao} alt="icone de coração" />{prod.likes}
        </p>
        </div>
        </div>

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