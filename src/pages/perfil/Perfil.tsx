import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Row from "../../assets/icons/arrow_white.svg";
import ListaProdutoLoja from "../../components/produtos/listaProduto/ListaProdutoLoja";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";
//import ModalPerfil from "../../components/perfil/modalPerfil/ModalPerfil";
import { useState } from "react";
import ListaIconsCategoriasAdm from "../../components/categorias/iconsCategorias/ListaIconsCategoriasAdm";
import Usuario from "../../models/Usuario";
import { buscar } from "../../services/Service";
import Categoria from "../../models/Categorias";

function Perfil() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [usuario.token]);

  const [seuUsuario, setSeuUsuario] = useState<Usuario>();

  const [suaCategoria, setSuaCategoria] = useState<Categoria[]>();

  const token = usuario.token;
  const idUsuarioLogin = usuario.id;
  useEffect(() => {
    async function fetchData() {
      try {
        await buscar(`/usuarios/${idUsuarioLogin}`, setSeuUsuario, {
          headers: { Authorization: token },
        });
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        }
      }
    }

    fetchData();
  }, []);

  let dataDoBanco;
  let dataLocal;

  if (seuUsuario && seuUsuario.data) {
    // Convertemos a data criada no Banco de Dados no formato Date, e armazenamos em uma variável
    dataDoBanco = new Date(seuUsuario.data);

    // Remover 3 horas da data devido ao Fuso Horário do Banco de Dados
    dataDoBanco.setHours(dataDoBanco.getHours() - 3);

    // Formatamos a data
    dataLocal = new Intl.DateTimeFormat(undefined, {
      dateStyle: "full",
      timeStyle: "medium",
    }).format(dataDoBanco);
  }

  console.log(seuUsuario);
  return (
    <>
      <div className="mx-auto my-4 overflow-hidden flex flex-col">
        <section className="justify-center">
          <div className="h-[300px] bg-seasalt flex justify-center items-center">
            <h3 className=" font-roboto">Bem Vindo ao seu Perfil</h3>
          </div>
        </section>
        {/* Não vai renderizar porque não tem um link para uma foto válida */}
        <div className="justify-center w-full">
          <div className=" relative grid grid-flow-row justify-items-center text-black text-2xl  rounded-xl">
            <div className="flex justify-center mt-[-6rem]">
              <img
                src={usuario.foto}
                alt={`Foto de perfil de ${usuario.nome}`}
                className="w-[200px] h-[200px] object-cover rounded-full self-start border-8 border-[#3E5622]"
              />
            </div>
            <div className="m-10">
              <h3 className="font-bold text-darkMossGreen">{usuario.nome}</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-flow-row m-4 w-4/6 h-[400px] bg-seasalt rounded-3xl">
            <div className="p-10 grid grid-cols-2 gap-4 content-end pt-[70px] font-bold text-[#525C60]">
              <div>
                <p>Nome: {usuario.nome} </p>
              </div>
              <div>
                <p>Email: {usuario.email}</p>
              </div>
              <div>
                {seuUsuario != null && <p>CPF/CNPJ: {seuUsuario.cpf_cnpj}</p>}
              </div>
              <div>{dataLocal && <p>Usuario desde: {dataLocal}</p>}</div>
            </div>
            <div className="flex justify-end items-end">
              <button className="rounded-[10px] bg-sunglow text-darkMossGreen font-bold w-1/6 h-[60px] p-4 m-6 transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300 shadow-lg">
                <span className="flex ml-4">
                  Editar
                  <img src={Row} className="w-4 ms-2" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {seuUsuario?.tipo?.toLowerCase() === "adm" && (
          <ListaIconsCategoriasAdm categorias={suaCategoria}></ListaIconsCategoriasAdm>
        )}

        {seuUsuario?.tipo?.toLowerCase() === "vendedor" && (
          <>
            <section className="w-ful flex justify-center items-center mt-[50px]  mb-[40px] ">
              <div className="flex gap-4 ">
                <h5>Seus Produtos</h5>
              </div>
            </section>
            <ListaProdutoLoja usuario={seuUsuario}></ListaProdutoLoja>
          </>
        )}
      </div>
    </>
  );
}

export default Perfil;
