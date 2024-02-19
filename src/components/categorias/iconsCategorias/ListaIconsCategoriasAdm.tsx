import { useEffect, useState } from "react";
import "../../../index.css";
import Categoria from "../../../models/Categorias";
import CardCategoria from "../cardCategoria/CardCategoria";
import ModalCategoria from "../modalCategoria/ModalCategoria"

interface CardCategoriaProps {
  categorias: Categoria[];
}

function ListaIconsCategoriasAdm(props: CardCategoriaProps) {

  return (
    <>

      <div className=" flex justify-center mb-5">
        <div className="container flex flex-col items-center justify-center text-white">
          <div className="mt-4">
            <h5 className="font-Roboto text-darkMossGreen mb-5">
              Categorias
            </h5>
          </div>
          <div className="w-[900px] mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center ">
            <ModalCategoria type={1} id={null} />

            {Array.isArray(props.categorias) && props.categorias.length > 0 ? (
              props.categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
              ))
            ) : (
              <p className="text-black">Nenhum produto encontrado.</p>
            )}
          </div>
          <div className="mb-4"></div>
          <div className="flex justify-center gap-5 mb-9"></div>
        </div>
      </div>
    </>
  );
}

export default ListaIconsCategoriasAdm;