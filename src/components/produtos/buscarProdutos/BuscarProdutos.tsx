import { useContext, useEffect, useState } from "react";
import { LineWave } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produtos";
import { buscar } from "../../../services/Service";
import { toastAlerta } from "../../../utils/toastAlerta";
import CardProduto from "../cardProduto/CardProduto";

function BuscarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { handleLogout } = useContext(AuthContext);

  const { nome } = useParams<{ nome: string }>();

  useEffect(() => {
    async function fetchData() {
      try {
        await buscar(`/produtos/nomes/${nome}`, setProdutos, {});
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        }
      }
    }

    fetchData();
  }, []);
  return (
    <>
      {produtos.length === 0 && (
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
        {produtos.map((produto) => (
          <CardProduto key={produto.id} prod={produto} />
        ))}
      </div>
    </>
  );
}

export default BuscarProdutos;
