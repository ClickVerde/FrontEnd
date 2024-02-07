import coracao from "../../../assets/icons/heart.svg";
import Produto from "../../../models/Produtos";
interface CardProdutoProps {
  prod: Produto;
  categoria: String;
}

function CardProduto(props: CardProdutoProps) {
  return (
    <>
      <div className="grid grid-row-3 gap-4  rounded-[15px] bg-seasalt px-3 py-2">
        <div>
          <div className="bg-[#3E5622] w-min p-1 px-2 h-min rounded-md text-center my-4">
            <p className="text-white fontCategoriaProdutoCard w-max font-bold capitalize ">
              {props.categoria}
            </p>
          </div>
          <img
            src={props.prod.foto}
            className=" w-[275px] h-[200px] object-cover rounded-[5px]"
            alt=""
          />
        </div>

        <div className="grid gap-1">
          <p className=" fontProdutoNameCard text-[16px] text-darkMossGreen capitalize my-1">
            {props.prod.nome}
          </p>
          <div className="">
            <hr />
          </div>
          <div className="flex justify-between fontProdutoNameCard text-[15px] text-darkMossGreen">
            <p className="  font-semibold uppercase">R${props.prod.preco}</p>
            <p className=" flex gap-1 font-semibold">
              <img src={coracao} alt="icone de coração" />
              {props.prod.likes}
            </p>
          </div>
        </div>
      </div>
    </>
  );

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
