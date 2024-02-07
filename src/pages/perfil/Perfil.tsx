import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Row from "../../assets/icons/arrow_white.svg";
import ListaProdutoLoja from "../../components/produtos/listaProduto/ListaProdutoLoja";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";
//import ModalPerfil from "../../components/perfil/modalPerfil/ModalPerfil";
import { useState } from "react";
import Usuario from "../../models/Usuario";
import { buscar } from "../../services/Service";

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

  return (
    <>
      <div className="mx-auto my-4 overflow-hidden flex flex-col">
        <section className="justify-center">
          <div className="h-[300px] bg-[#F5F5F5] flex justify-center items-center">
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
          <div className="grid grid-flow-row m-4 border w-[900px] w-4/6 h-[400px] bg-[#F5F5F5] rounded-3xl">
            <div className="p-10 grid grid-cols-2 gap-4 content-end pt-[70px] font-bold text-[#525C60]">
              <div>
                <p>Nome: {usuario.nome} </p>
              </div>
              <div>
                <p>Email: {usuario.email}</p>
              </div>
              <div>
                <p>CPF/CNPJ: {usuario.cpf_cnpj}</p>
              </div>
              <div>
                <p>Usuário desde:</p>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <button className="rounded-[10px] bg-sunglow hover:bg-[#FFE499] hover:text-[#3e56227a] text-darkMossGreen font-bold w-1/6 h-[60px] p-4 m-6 transition duration-300 ease-in-out">
                <span className="flex ml-4">
                  Editar
                  <img src={Row} className="w-4 ms-2" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <section className="w-ful flex justify-center items-center mt-[50px]  mb-[40px] ">
          <div className="flex gap-4 ">
            <h5>Seus Produtos</h5>
          </div>
        </section>

        {seuUsuario?.tipo?.toLowerCase() === "vendedor" && (
          <ListaProdutoLoja usuario={seuUsuario}></ListaProdutoLoja>
        )}
      </div>
    </>
  );
}

export default Perfil;
