import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categorias";
import Produto from "../../../models/Produtos";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { toastAlerta } from "../../../utils/toastAlerta";

interface FormularioAlterarProdutoProps {
  id: number;
}

function FormularioAlterarProduto({ id }: FormularioAlterarProdutoProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
    foto: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0, //?
    quantidade: 0, //?
    foto: "",
    descricao: "",
    qtd_vendas: 0, //?
    data: "",
    categoria: null,
    usuario: null,
    likes: 0,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoria() {
    await buscar("/categorias/all", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }
  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategoria();

    if (id !== undefined) {
      const idString: string = id.toString();
      buscarProdutoPorId(idString);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
      categoria: categoria,
      usuario: usuario,
    }));
  }

  console.log(produto);
  function retornar() {
    navigate("/produtos/all");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Produto atualizado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar o produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Produto cadastrado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar o produto", "erro");
        }
      }
    }

    setIsLoading(false);
  }

  const carregandoCategoria = categoria.descricao === "";

  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form
        onSubmit={gerarNovoProduto}
        className="flex flex-col w-[600px]  m-4 gap-4 input-login"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border border-darkMossGreen rounded-[10px] p-2 h-14"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Produto</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border border-darkMossGreen rounded-[10px] p-2 h-14"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço do Produto</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Preço"
            name="preco"
            required
            className="border border-darkMossGreen rounded-[10px] p-2 h-14"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="foto">Foto do produto</label>
            <input
              value={produto.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Foto(URL)"
              name="foto"
              required
              className="border border-darkMossGreen rounded-[10px] p-2 h-14"
            />
          </div>
          <p>Categoria do Produto</p>

          <select
            name="produto"
            id="produto"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma categoria
            </option>

            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.descricao}</option>
              </>
            ))}
          </select>
        </div>

        <button
          disabled={carregandoCategoria}
          type="submit"
          className="rounded-[10px] bg-darkMossGreen text-white w-2/6 h-[60px] p-4 flex justify-center items-center ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 shadow-md cursor-pointer">
          {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
           : id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormularioAlterarProduto;
