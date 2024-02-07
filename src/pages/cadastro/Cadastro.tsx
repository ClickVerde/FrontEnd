import { Listbox, Transition } from "@headlessui/react";
import { CaretDown, CheckCircle } from "@phosphor-icons/react";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import CadastroImage from "../../assets/cadastro.jpg";
import PlantaLeft from "../../assets/icons/PlantaLeft.svg";
import PlantaRight from "../../assets/icons/PlantaRight.svg";
import Arrow from "../../assets/icons/arrow_white.svg";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { toastAlerta } from "../../utils/toastAlerta";
import "./../../index.css";

const options = [
  { type: "Quero comprar", textPlaceholder: "CPF" },
  { type: "Quero vender", textPlaceholder: "CNPJ" },
];

function Cadastro() {
  let navigate = useNavigate();

  const [selected, setSelected] = useState(options[0]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    cpf_cnpj: "",
    tipo: "",
    data: "",
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    cpf_cnpj: "",
    tipo: "",
    data: "",
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function atualizarTipo(tipo) {
    setUsuario({
      ...usuario,
      tipo: tipo,
    });
  }

  useEffect(() => {
    let tipo;

    if (selected.type == "Quero comprar") {
      tipo = "Cliente";
    }

    if (selected.type == "Quero vender") {
      tipo = "Vendedor";
    }

    atualizarTipo(tipo);
  }, [selected.type]);

  console.log(usuario);

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta
        );
        toastAlerta("Usuário cadastrado com sucesso", "sucesso");
      } catch (error) {
        console.log(usuario);
        toastAlerta("Erro ao cadastrar o Usuário", "erro");
        setIsLoading(false);
      }
    } else {
      toastAlerta(
        "Dados inconsistentes. Verifique as informações de cadastro.",
        "erro"
      ),
        setUsuario({ ...usuario, senha: "" }); // Reinicia o campo de Senha
      setConfirmaSenha("");
      setIsLoading(false); // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <section className="w-full h-[250px] bg-seasalt flex justify-center items-center ">
        <div className="flex gap-4 ">
          <img src={PlantaLeft}></img>
          <h2>Cadastre seu e-mail no ClickVerde</h2>
          <img src={PlantaRight}></img>
        </div>
      </section>
      <section className="grid  justify-items-center font-bold p-32">
        <article className="grid grid-cols-3 rounded-[30px] shadow-2xl w-[850px] h-[850px]">
          <div>
            <img
              src={CadastroImage}
              className="w-full h-[850px] rounded-s-[30px]"
            />
          </div>

          <form
            className="col-span-2 flex flex-col gap-7 p-10 rounded-e-[30px] h-min input-login"
            onSubmit={cadastrarNovoUsuario}
          >
            <div className="w-full flex flex-col  gap-7">
              <h4 className="">Cadastrar</h4>
              <div className="flex flex-col w-full">
                {/* <label htmlFor="nome">Nome</label> */}
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  className="border border-darkMossGreen rounded-[10px] p-2 h-14"
                  value={usuario.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex flex-col w-full input-login">
                {/* <label htmlFor="usuario">Usuario</label> */}
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border border-darkMossGreen rounded-[10px] p-2 h-14"
                  value={usuario.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex flex-col w-full input-login">
                {/* <label htmlFor="cpf_cnpj">CPF/CNPJ</label> */}
                <input
                  type="text"
                  id="cpf_cnpj"
                  name="cpf_cnpj"
                  placeholder={selected.textPlaceholder}
                  className="border border-darkMossGreen rounded-[10px] p-2 h-14"
                  value={usuario.cpf_cnpj}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>

              <div className="flex flex-col w-full input-login">
                {/* <label htmlFor="senha">Senha</label> */}
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  className="border border-darkMossGreen rounded-[10px] p-2 h-14"
                  value={usuario.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex flex-col w-full input-login">
                {/* <label htmlFor="confirmarSenha">Confirmar Senha</label> */}
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  placeholder="Confirmar Senha"
                  className="border border-darkMossGreen rounded-[10px] p-2 h-14"
                  value={confirmaSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleConfirmarSenha(e)
                  }
                />
              </div>

              <div className="flex flex-col w-full input-login ">
                <Listbox value={selected} onChange={setSelected} name="tipo">
                  <div className="relative mt-1">
                    <Listbox.Button className="appearance-auto textButton text-darkMossGreen border border-darkMossGreen rounded-[30px] p-3 h-14  w-44">
                      <div className="flex justify-center">
                        {selected.type}
                        <CaretDown
                          size={10}
                          className="ms-1 self-center text-darkMossGreen flex"
                          weight="bold"
                          aria-hidden="true"
                        />
                      </div>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute inset-x-0 z-10 mt-1 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-1">
                        {options.map((option, optionIdx) => (
                          <Listbox.Option
                            key={optionIdx}
                            className={({ active }) =>
                              `flex px-4 py-2 text-sm  bg-white text-darkMossGreen hover:bg-sunglow-light
													rounded-md transition duration-300 ease-in-out${
                            active
                              ? "bg-sunglow-light transition transition-300 ease-in-out text-darkMossGreen"
                              : "text-darkMossGreen"
                          }`
                            }
                            value={option}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {option.type}
                                </span>
                                {selected ? (
                                  <span className="self-center left-0 flex pl-3 text-darkMossGreen">
                                    <CheckCircle
                                      size={18}
                                      className="-mr-1 self-center text-emerald"
                                      weight="bold"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
            <p className="paragraph ">
              Já possui uma conta?
              <Link
                to="/login"
                className="paragraphBold text-darkMossGreen hover:underline ms-1"
              >
                Faça o Login
              </Link>
            </p>
            <button
              type="submit"
              className="rounded-[10px] bg-darkMossGreen border border-darkMossGreen hover:bg-[#f7f7f7] hover:text-darkMossGreen text-white w-2/6 h-[60px] p-4 flex justify-center items-center"
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
                <span className="flex">
                  Cadastrar
                  <img src={Arrow} className="w-4 ms-2" />
                </span>
              )}
            </button>
          </form>
        </article>
      </section>

      <section className="flex justify-center">
        <div className="w-[80%] h-[250px] bg-seasalt flex justify-center items-center selfcenter rounded-[30px]">
          <div className="flex gap-4 ">
            <img src={PlantaLeft}></img>
            <h2>Banner / Mudar para foto !!!!!!!!!</h2>
            <img src={PlantaRight}></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cadastro;
