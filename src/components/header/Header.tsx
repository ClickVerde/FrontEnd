import { useContext } from 'react'
import SearchIcon from '../../assets/icons/SearchIcon.svg'
import Seta from '../../assets/icons/seta.svg'
import Logo from '../../assets/Logo.svg';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import User from '../../assets/icons/usericon.svg';
import Cart from '../../assets/icons/carticon.svg';
import '../../index.css';

function Navbar() {
  let navigate = useNavigate()

  const { email, handleLogout } = useContext(AuthContext)

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
            <a >Home</a>
            <a >Produtos</a>
            <a className='flex' >
              <p>Categorias</p>
              <img src={Seta} className='px-1'></img>
            </a>
            <a >Sobre</a>
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
