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
      <div className="max-w-[900px] mx-auto my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center ">
        <ModalProduto type={1} id={null} />

        {Array.isArray(props.usuario?.produtos) ? (
          props.usuario.produtos.map((produto) => (
            <CardProdutoLoja key={produto.id} prod={produto} />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </>
  );
}

export default ListaProdutoLoja;
