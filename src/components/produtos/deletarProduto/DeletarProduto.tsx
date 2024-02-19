import { useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produtos";
import { buscar, deletar } from "../../../services/Service";
import { toastAlerta } from "../../../utils/toastAlerta";

interface DeletarProdutoProps {
  id: number;
}

function DeletarProduto({ id }: DeletarProdutoProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [produto, setProduto] = useState<Produto>({} as Produto);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      const idString: string = id.toString();
      buscarPorId(idString);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos/all");
  }

  async function deletarProduto() {
    setIsLoading(true);

    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Produto apagado com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar o produto", "erro");
    }

    setIsLoading(false);
    retornar();
  }
  return (
    <div className="container w-[500px] mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Produto</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o produto?
      </p>

      <div className="bg-seasalt flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg">
        <h6 className="mt-4 px-6 text-black text-lg">
          Seu Produto:
        </h6>
        <div className="p-4">
          <p className="text-2xl h-full font-medium m-2 uppercase">{produto.nome}</p>
          <p className="text-xl h-full font-medium m-2">{produto.descricao}</p>
        </div>
        <div className="flex">
          <button
            className="text-black textButton border border-sunglow bg-sunglow hover:bg-white hover:text-sunglow hover:border hover:border-sunglow rounded-lg w-full shadow-lg m-4 py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="textButton w-full border text-slate-100 bg-[#FF5757] hover:bg-white hover:text-[#FF5757] hover:border-[#FF5757] rounded-lg m-4 flex items-center justify-center shadow-lg"
            onClick={deletarProduto}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <p>Sim</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
