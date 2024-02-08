import Categoria from "../../../models/Categorias";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="bflex flex-coloverflow-hidden justify-between object-cover ">
      <div className=" w-[350px] h-[350px]">
        <img
          className=" object-cover rounded-[30px] transition ease-in-out delay-50 hover:-translate-y-4 hover:scale-110 duration-300 shadow-lg"
          src={categoria.foto}
          alt=""
        />
      </div>
      <h6 className="p-4 font-bold text-[#3E5622]">{categoria.nome}</h6>
    </div>
  );
}

export default CardCategorias;
