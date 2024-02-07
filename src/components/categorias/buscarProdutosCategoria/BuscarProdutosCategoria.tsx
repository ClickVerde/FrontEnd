import { useContext, useEffect, useState } from "react";
import { LineWave } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categorias";
import { buscar } from "../../../services/Service";
import { toastAlerta } from "../../../utils/toastAlerta";
import CardProduto from "../../produtos/cardProduto/CardProduto";

function BuscarProdutosCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);
  const { handleLogout } = useContext(AuthContext);

  const { nome } = useParams<{ nome: string }>();

  useEffect(() => {
    async function fetchData() {
      try {
        await buscar(`/categorias/nome/${nome}`, setCategoria, {});
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        }
      }
    }

    console.log(categoria[0]);

    fetchData();
  }, []);

  return (
    <>
      {categoria.length > 0 && categoria[0].produtos ? (
        <div className="w-[900px] mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center ">
          {categoria[0].produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              prod={produto}
              categoria={categoria[0].nome}
            />
          ))}
        </div>
      ) : (
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
    </>
  );
}

export default BuscarProdutosCategoria;
