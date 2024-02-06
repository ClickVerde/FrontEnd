import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Produto from '../../../models/Produtos'
import { buscar, deletar } from '../../../services/Service'
import { RotatingLines } from 'react-loader-spinner'


function DeletarProduto() {
 

  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [produto, setProduto] = useState<Produto>({} as Produto)

  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, { 
        headers:{
          'Authorization': token 
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {  
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
        buscarPorId(id)  
    }
  }, [id])

  function retornar() {
    navigate("/produtos/all")
  }

  async function deletarProduto() {
    setIsLoading(true)

    try {
      await deletar(`/produtos/${id}`, { 
        headers: {
          'Authorization': token 
          }
        })

      alert('Produto apagado com sucesso')

    } catch (error) {
      alert('Erro ao apagar o produto')
    }

    setIsLoading(false)
  retornar()
}
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Produto</header>
      <div className="p-4">
        <p className='text-xl h-full'>{produto.nome}</p>
        <p>{produto.descricao}</p> 
      </div>
      <div className="flex">
        <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
        <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarProduto}>
       {isLoading ? (
       <RotatingLines
         strokeColor="white"
         strokeWidth="5"
          animationDuration="0.75"
          width="24"
          visible={true}
        />
        ) : (
         <span>Sim</span>
         )}
        </button>
      </div>
    </div>
  </div>
  )
}

export default DeletarProduto;