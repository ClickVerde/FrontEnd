import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



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
      <div className='w-full bg-[#21882a] text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Clique</Link>

          <div className='flex gap-4'>
            <div className='font-bold cursor-pointer text-[#fde845] hover:text-[#2d2c24]'>Postagens</div>
            <Link to='/categorias/all' className='font-bold cursor-pointer hover:text-[#242b2d]'>Categorias</Link>
            <Link to='/cadastroCategoria' className='font-bold cursor-pointer hover:text-[#242b2d]'>Cadastrar categoria</Link>
            <div className='font-bold cursor-pointer hover:text-[#242b2d]'>Perfil</div>
            <Link to='' onClick={logout} className='font-bold cursor-pointer hover:text-[#242b2d]'>Sair</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
