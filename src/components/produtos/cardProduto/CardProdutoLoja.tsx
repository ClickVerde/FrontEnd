import coracao from "../../../assets/icons/heart.svg";
import Produto from "../../../models/Produtos";
import ModalProduto from "../modalProduto/ModalProduto";

interface CardProdutoLojaProps {
  prod: Produto;
}

function CardProdutoLoja({ prod }: CardProdutoLojaProps) {
  return (
    <>
      <div className="grid grid-row-3 gap-4  rounded-[15px] bg-seasalt px-3 py-2">
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

          <button
            type="submit"
            className="mt-4 rounded-[7px]  bg-[#FF5757] border border-[#FF5757] hover:bg-[#f7f7f7]text-darkMossGreen textButton  text-darkMossGreen h-[40px] p-4 flex justify-center items-center"
          >
            <p className="textButton text-white">Deletar</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default CardProdutoLoja;
