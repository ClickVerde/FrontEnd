import { Link } from "react-router-dom";
import "../../../index.css";
import Categoria from "../../../models/Categorias";

interface IconsCategoriasProps {
  categoria: Categoria;
}

function IconsCategorias({ categoria }: IconsCategoriasProps) {
  return (
    <Link to={`/categorias/${categoria.id}`}>
      <div className="bg-white p-1 rounded-[20px] text-center flex-grow text-white w-[120px] h-[120px]   mx-2">
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
  );
}

export default IconsCategorias;
