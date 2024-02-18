import { useEffect, useState } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
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

  const { isTab, isMobile } = useWindowDimensions();

  return (
    <div className="bg-darkMossGreen flex flex-col align-middle justify-center mb-5 p-4 ">
      <h5 className="font-Roboto text-white mb-5 self-center ">
        Conheça nossas categorias
      </h5>

      {isTab && (
        <div className="flex justify-center">
          <div className=" text-white overflow-x-scroll p-5">
            <div className="w-full flex whitespace-nowrap  ">
              {categorias.map((categoria) => (
                <IconsCategorias key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      )}
      {!isTab && (
        <div className="px-1 py-1 flex self-center ">
          {categorias.map((categoria) => (
            <IconsCategorias key={categoria.id} categoria={categoria} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaIConsCategorias;
