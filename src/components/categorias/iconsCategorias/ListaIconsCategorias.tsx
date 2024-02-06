import { useEffect, useState } from "react";
import "../../../index.css";
import Categoria from "../../../models/Categorias";
import { buscar } from "../../../services/Service";
import IconsCategorias from "./IconsCategorias";

function ListaIConsCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await buscar("/categorias/all", setCategorias, {
      headers: {},
    });
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <div className="bg-darkMossGreen flex justify-center mb-5">
      <div className="container flex flex-col items-center justify-center text-white">
        <div className="mt-4">
          <h5 className="font-Roboto text-white mb-5">
            Conheça nossas categorias
          </h5>
        </div>
        <div className="px-1 py-1 flex ">
          {categorias.map((categoria) => (
            <IconsCategorias key={categoria.id} categoria={categoria} />
          ))}
        </div>
        <div className="mb-4"></div>
        <div className="flex justify-center gap-5 mb-9"></div>
      </div>
    </div>
  );
}

export default ListaIConsCategorias;
