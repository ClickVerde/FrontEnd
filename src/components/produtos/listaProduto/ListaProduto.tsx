import { useContext, useEffect, useState } from "react";
import { LineWave } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produtos";
import { buscar } from "../../../services/Service";
import { toastAlerta } from "../../../utils/toastAlerta";
import CardProduto from "../cardProduto/CardProduto";

function ListaProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { handleLogout } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        await buscar("/produtos/all", setProdutos, {});
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
      <section className="flex justify-center">
        <div className="max-w-[900px] my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 justify-items-center ">
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              prod={produto}
              categoria={produto.categoria.nome}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ListaProduto;
