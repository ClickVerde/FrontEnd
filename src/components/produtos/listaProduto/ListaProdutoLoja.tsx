import { LineWave } from "react-loader-spinner";
import Usuario from "../../../models/Usuario";
import CardProdutoLoja from "../cardProduto/CardProdutoLoja";
import ModalProduto from "../modalProduto/ModalProduto";

interface CardProdutoProps {
  usuario: Usuario;
}

function ListaProdutoLoja(props: CardProdutoProps) {
  return (
    <>
      {props.usuario.produtos === null && (
        <LineWave
          visible={true}
          height="200"
          width="2000"
          color="#3E5622"
          ariaLabel="tail-spin-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      <div className="w-[900px] mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center ">
        <ModalProduto type={1} id={null} />

        {Array.isArray(props.usuario?.produtos) ? (
          props.usuario.produtos.map((produto) => (
            <CardProdutoLoja key={produto.id} prod={produto} />
          ))
        ) : (
          <p className="text-black">Nenhum produto encontrado.</p>
        )}
      </div>
    </>
  );
}

export default ListaProdutoLoja;
