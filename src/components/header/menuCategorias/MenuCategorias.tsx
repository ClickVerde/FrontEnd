import { Link } from "react-router-dom";
import Categoria from "../../../models/Categorias";


interface MenuCategoriasProps {
    categoria: Categoria
}

function MenuCategorias({ categoria }: MenuCategoriasProps) {

   
  return (
    <Link
      to={`/categorias/${categoria.id}`}
      className="block px-4 py-2 text-sm bg-seasalt text-darkMossGreen hover:bg-sunglow-light rounded-md transition duration-300 ease-in-out"
    >
      {categoria.nome}
    </Link>
  );
}

export default MenuCategorias