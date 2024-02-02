import { Fragment, useContext } from 'react'
import SearchIcon from '../../assets/icons/SearchIcon.svg'
import Seta from '../../assets/icons/seta.svg'
import Logo from '../../assets/Logo.svg';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import User from '../../assets/icons/usericon.svg';
import Cart from '../../assets/icons/carticon.svg';
import '../../index.css';
import { CaretDown } from '@phosphor-icons/react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  let navbarComponent


  return (
    <>

      <header className='w-full bg-white text-white flex justify-between align-middle py-[1rem] px-[4rem] '>
        <div>
          <img src={Logo} className='xl:w-28 sm:w-25'></img>
        </div>

        <section className='flex justify-between gap-6'>
          <div className='text-darkMossGreen p-4 grid gap-10 grid-flow-col items-center font-bold text-[20px] ]'>
            <Link to="/home" className='transition duration-300 ease-in-out hover:text-sunglow'>Home</Link>
            <Link to="/produtos/all" className='transition duration-300 ease-in-out hover:text-sunglow'>Produtos</Link>
            <a className='flex' >
              <Menu
							as="div"
							className="relative inline-block text-left"
						>
							<div>
								<Menu.Button className="transition duration-300 ease-in-out hover:text-sunglow inline-flex w-full justify-center gap-x-1.5 px-3 py-2">
									Categorias
									<CaretDown
										size={12}
										className="-mr-1 h-8  text-gray-400"
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
								<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<Link
													to="/categorias/all"
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													Todas as categorias
												</Link>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<Link
													to="/home"
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													Home
												</Link>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<Link
													to="/C"
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													Categoria C
												</Link>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
            
            </a>
            <a className='transition duration-300 ease-in-out hover:text-sunglow'>Sobre</a>
          </div>

          <div className='div-focus flex p-[5px] rounded-full self-center bg-seasalt border border-emerald input-pesquisa'>
            <input
              type="text"
              placeholder="Pesquisar"
              name='descricao'
              className="w-[15vw] h-[2vw] border-none rounded-full p-2 self-center input-pesquisa"
            />
            <button>
              <img className='w-10' src={SearchIcon} alt="" />
            </button>



          </div>

          <div className='gap-3 justify-around flex items-center p-3'>

            <div className='flex rounded-[12rem]  items-center border border-emerald p-[5px]'>
              <img src={User} className='w-10'></img>
              <p className='headerBtn text-darkMossGreen  ps-2 pe-1'>Perfil</p>
              <img src={Seta} className='pe-1'></img>
            </div>


            <div className='flex rounded-[12rem] items-center border-emerald border p-[5px]'>
              <img src={Cart} className='w-10'></img>
              <p className='headerBtn text-darkMossGreen p-2'>Carrinho</p>
            </div>

          </div>
        </section>
      </header>
    </>
  )
}

export default Navbar
