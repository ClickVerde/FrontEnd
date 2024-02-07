import { Link } from "react-router-dom";
import "../../../index.css";
import Categoria from "../../../models/Categorias";

interface IconsCategoriasAdmProps {
  categoria: Categoria;
}

function IconsCategoriasAdm({ categoria }: IconsCategoriasAdmProps) {
  return (
    <>
      <div className="grid grid-rows">
        <Link to={`/categorias/${categoria.id}`}>
          <div className="bg-seasalt p-1 rounded-t-lg text-center flex-grow text-white w-[120px] h-[120px]   mx-2">
            <p className="text-darkMossGreen bold m-4 truncate text-[12px]">
              {categoria.nome}
            </p>
            <div className="mt-2 flex justify-center align-middle">
              <img
                src={categoria.foto}
                alt="Icone categoria"
                className="w-[50px] h-[50px] mb-5 py-auto"
              />
            </div>
          </div>
        </Link>
        <div className="flex ml-2 w-[45px] h-[30px] self-center ">
          <Link
            to={`/editarCategoria/${categoria.id}`}
            className=" w-[200px] p-2 rounded-bl-lg text-black hover:text-white bg-[#FFD242] flex items-center justify-center"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletarCategoria/${categoria.id}`}
            className="w-[200px] p-2 rounded-br-lg text-white hover:text-white bg-[#FF5757] flex items-center justify-center"
          >
            <button className="">Deletar</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default IconsCategoriasAdm;
