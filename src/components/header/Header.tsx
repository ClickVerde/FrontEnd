import { Menu, Transition } from "@headlessui/react";
import { CaretDown, SignIn, SignOut, UserSquare } from "@phosphor-icons/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import Cart from "../../assets/icons/carticon.svg";
import User from "../../assets/icons/usericon.svg";
import { AuthContext } from "../../contexts/AuthContext";
import "../../index.css";
import Categoria from "../../models/Categorias";
import { buscar } from "../../services/Service";
import { toastAlerta } from "../../utils/toastAlerta";
import MenuCategorias from "./menuCategorias/MenuCategorias";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await buscar("/categorias/all", setCategorias, {
      headers: {},
    });
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  let userDropDown;

  if (usuario.token !== "") {
    userDropDown = (
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-seasalt shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          <Menu.Item>
            <Link
              to="/perfil"
              className="flex px-4 py-2 text-sm  bg-seasalt text-darkMossGreen hover:bg-sunglow-light
													rounded-md transition duration-300 ease-in-out"
            >
              <UserSquare
                size={16}
                className="-mr-1 self-center text-gray-400 flex"
              />
              <p className="px-2">Meu Perfil</p>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to=""
              onClick={logout}
              className="flex px-4 py-2 text-sm  bg-seasalt text-darkMossGreen hover:bg-sunglow-light
													rounded-md transition duration-300 ease-in-out"
            >
              <SignOut
                size={16}
                className="-mr-1 self-center text-gray-400 flex"
              />
              <p className="px-2">Sair</p>
            </Link>
          </Menu.Item>
        </div>
      </Menu.Items>
    );
  } else {
    userDropDown = (
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-seasalt shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          <Menu.Item>
            <Link
              to="/login"
              className="flex px-4 py-2 text-sm  bg-seasalt text-darkMossGreen hover:bg-sunglow-light
													rounded-md transition duration-300 ease-in-out"
            >
              <SignIn
                size={16}
                className="-mr-1 self-center text-gray-400 flex"
              />
              <p className="px-2">Entrar</p>
            </Link>
          </Menu.Item>
        </div>
      </Menu.Items>
    );
  }

  return (
    <>
      <header className="w-full bg-white text-white flex justify-between align-middle py-[1rem] px-[4rem] ">
        <div>
          <img src={Logo} className="xl:w-20 sm:w-20"></img>
        </div>

        <section className="flex justify-between gap-6">
          <div className="text-darkMossGreen p-4 grid gap-10 grid-flow-col items-center font-bold text-[16px] ]">
            <Link
              to="/home"
              className="transition duration-300 ease-in-out hover:text-sunglow  "
            >
              Home
            </Link>
            <Link
              to="/produtos/all"
              className="transition duration-300 ease-in-out hover:text-sunglow"
            >
              Produtos
            </Link>
            <Menu as="div" className="relative inline-block">
              <div className="flex group">
                <Menu.Button className="transition duration-300 ease-in-out group-hover:text-sunglow inline-flex w-full">
                  Categorias
                  <CaretDown
                    size={10}
                    className="ms-1 self-center text-darkMossGreen flex transition duration-300 ease-in-out group-hover:text-sunglow"
                    weight="bold"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute inset-x-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-seasalt shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      <Link
                        to={`/categorias/all`}
                        className="block px-4 py-2 text-[12px]  bg-seasalt text-darkMossGreen hover:bg-sunglow-light rounded-md transition duration-300 ease-in-out"
                      >
                        Todas Categorias
                      </Link>
                    </Menu.Item>
                    {categorias.map((categoria) => (
                      <Menu.Item key={categoria.id}>
                        <MenuCategorias categoria={categoria} />
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <a className="transition duration-300 ease-in-out hover:text-sunglow">
              Sobre
            </a>
          </div>

          <div className="div-focus flex p-[5px] rounded-full self-center  bg-seasalt border border-emerald input-pesquisa">
            <input
              type="text"
              placeholder="Pesquisar"
              name="descricao"
              className="w-[16vw] h-[10px] border-none rounded-full p-2 self-center input-pesquisa"
            />
            <button className="group bg-emerald rounded-full w-7 h-7 flex justify-center	">
              <img className="w-4 self-center" src={SearchIcon} alt="" />
            </button>
          </div>

          <div className="gap-3 justify-around flex items-center p-3">
            <div className="flex rounded-[12rem]  items-center border border-emerald p-[5px]">
              <Menu
                as="div"
                className="relative inline-block text-darkMossGreen"
              >
                <div className="flex group">
                  <Menu.Button className="transition duration-300 ease-in-out group-hover:text-sunglow inline-flex w-full">
                    <img src={User} className="w-7"></img>
                    <p className="flex headerBtn ps-2 pe-1 items-center self-center">
                      Perfil
                    </p>
                    <CaretDown
                      size={10}
                      className="me-2 self-center text-darkMossGreen text-[12px] transition duration-300 ease-in-out group-hover:text-sunglow"
                      weight="bold"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {userDropDown}
                </Transition>
              </Menu>
            </div>

            <div className="flex rounded-[12rem] items-center border-emerald border p-[1px] px-[5px]">
              <img src={Cart} className="w-7"></img>
              <p className="headerBtn text-darkMossGreen p-2">Carrinho</p>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default Navbar;
