import { Link } from "react-router-dom";
import "../../../index.css";
import Categoria from "../../../models/Categorias";

interface IconsCategoriasProps {
  categoria: Categoria;
}

function IconsCategorias({ categoria }: IconsCategoriasProps) {
  return (
    <Link to={`/categorias/${categoria.id}`}>
      <div className="bg-white p-1 rounded-[30px] text-center flex-grow text-white w-[150px] h-[150px]   mx-2">
        <p className="text-darkMossGreen bold m-4 truncate ">
          {categoria.nome}
        </p>
        <div className="mt-2 flex justify-center align-middle">
          <img
            src={categoria.foto}
            alt="Icone categoria"
            className="w-[60px] h-[60px] mb-5 py-auto"
          />
        </div>
      </div>
    </Link>
  );
}

export default IconsCategorias;
