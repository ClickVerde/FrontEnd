import { Link } from "react-router-dom";
import Categoria from "../../../models/Categorias";

interface CardCategoriaProps {
	categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
	return (
		<div className="bflex flex-coloverflow-hidden justify-between object-cover">
			<div className=" w-[350px] h-[350px]">
				<img
					className=" object-cover rounded-[30px]"
					src={categoria.foto}
					alt=""
				/>
			</div>
			<h6 className="p-4 font-bold text-[#3E5622]">{categoria.nome}</h6>

			{/* <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-black hover:text-blue-600 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-black hover:text-red-600 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div> */}
		</div>
	);
}

export default CardCategorias;
