import coracao from "../../../assets/icons/heart.svg";
import Produto from "../../../models/Produtos";
import ModalProduto from "../modalProduto/ModalProduto";

interface CardProdutoLojaProps {
  prod: Produto;
}

function CardProdutoLoja({ prod }: CardProdutoLojaProps) {
  return (
    <>
      <button className="grid grid-row-3 gap-4  rounded-[15px] bg-seasalt px-3 py-2 transition ease-in-out delay-50 hover:-translate-y-4 hover:scale-110 duration-300 shadow-md">
        <div>
          <div className="bg-[#3E5622] w-min p-1 px-2 h-min rounded-md text-center my-4">
            <p className="text-white fontCategoriaProdutoCard w-max font-bold capitalize ">
              {prod.categoria?.nome}
            </p>
          </div>
          <img
            src={prod.foto}
            className=" w-[275px] h-[200px] object-cover rounded-[5px]"
            alt=""
          />
        </div>

        <div className="grid gap-1">
          <p className=" fontProdutoNameCard text-[16px] text-darkMossGreen capitalize my-1">
            {prod.nome}
          </p>
          <div className="">
            <hr />
          </div>
          <div className="flex justify-between fontProdutoNameCard text-[15px] text-darkMossGreen">
            <p className="  font-semibold uppercase">R${prod.preco}</p>
            <p className=" flex gap-1 font-semibold">
              <img src={coracao} alt="icone de coração" />
              {prod.likes}
            </p>
          </div>

          <ModalProduto type={2} id={prod.id} />

          <ModalProduto type={3} id={prod.id} />
        </div>
      </button>
    </>
  );
}

export default CardProdutoLoja;
