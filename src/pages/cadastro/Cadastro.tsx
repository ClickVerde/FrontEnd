import { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import { RotatingLines } from 'react-loader-spinner';
import CadastroImage from '../../assets/cadastro.jpg'
import PlantaRight from '../../assets/icons/PlantaRight.svg';
import PlantaLeft from '../../assets/icons/PlantaLeft.svg';
import Arrow from '../../assets/icons/arrow_white.svg';
import './../../index.css'

function Cadastro() {

  let navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    cpf_cnpj: "",
    tipo: ""
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    cpf_cnpj: "",
    tipo: ""
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true)
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        console.log(usuario)
        alert('Erro ao cadastrar o Usuário')
        setIsLoading(false)
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")
      setIsLoading(false)                // Reinicia o campo de Confirmar Senha
    }
  }


  const [queroComprar, setQueroComprar] = useState<boolean>(true);
  const [tipo, setTipo] = useState<string>('CPF');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if(selectedValue === 'opcao1'){
      setQueroComprar(true)
    }else{
      setQueroComprar(false)
    }
  };

  useEffect(() => {
    if(!queroComprar){
      setTipo('CNPJ')
    } 
    if (queroComprar) {
      setTipo('CPF')
    } 
    
   
  }, [queroComprar]);

  return (
    <>
      <section className='w-full h-[250px] bg-seasalt flex justify-center items-center '>

        <div className='flex gap-4 '>
          <img src={PlantaLeft}></img>
          <h2>Cadastre seu e-mail no ClickVerde</h2>
          <img src={PlantaRight}></img>
        </div>
      </section>
      <section className='grid  justify-items-center font-bold p-32'>

        <article className='grid grid-cols-3 rounded-[30px] shadow-2xl w-[850px] h-[850px]'>

          <div>
            <img src={CadastroImage} className='w-full h-[850px] rounded-s-[30px]' />
          </div>

          <form className='col-span-2 flex flex-col gap-7 p-10 rounded-e-[30px] h-min'  onSubmit={cadastrarNovoUsuario}>
            <div className='w-full flex flex-col  gap-7'>
              <h4 className=''>Cadastrar</h4>
              <div className="flex flex-col w-full">
                {/* <label htmlFor="nome">Nome</label> */}
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  className="border border-darkMossGreen rounded-[10px] p-2 h-14"
                  value={usuario.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
              <div className="flex flex-col w-full input-login">
                {/* <label htmlFor="cpf_cnpj">CPF/CNPJ</label> */}
                <input
                  type="text"
                  id="cpf_cnpj"
                  name="cpf_cnpj"
                  placeholder={tipo}
                  className="border border-darkMossGreen rounded-[10px] p-2 h-14"
                  value={usuario.cpf_cnpj}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                />
              </div>

              <div className="flex flex-col w-full input-login">
                {/* <label htmlFor="tipo">Tipo</label> */}
                <input
                  type="text"
                  id="tipo"
                  name="tipo"
                  placeholder="Tipo"
                  className="border border-darkMossGreen rounded-[10px] p-2 h-14"
                  value={usuario.tipo}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div >
              <label htmlFor="tipoSelect">
                <select id="tipoSelect" onChange={handleSelectChange} className='appearance-auto textButton text-darkMossGreen border border-darkMossGreen rounded-[30px] p-3 h-14  w-44'>
                <option value='opcao1' className='textButton text-darkMossGreen'>Quero Comprar</option>
                <option value='opcao2' className='textButton text-darkMossGreen'>Quero vender</option>S
              </select>
              </label>
            </div>
            <p className='paragraph '>
              Já possui uma conta?
              <Link to="/login" className="paragraphBold text-darkMossGreen hover:underline ms-1">
                Faça o Login
              </Link>
            </p>
            <button type='submit' className="rounded-[10px] bg-darkMossGreen border border-darkMossGreen hover:bg-[#f7f7f7] hover:text-darkMossGreen text-white w-2/6 h-[60px] p-4 flex justify-center items-center">
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span className='flex'>Cadastrar
                  <img src={Arrow} className='w-4 ms-2' />
                </span>}
            </button>
          </form>
        </article>

      </section>

      <section className='flex justify-center'>
        <div className='w-[80%] h-[250px] bg-seasalt flex justify-center items-center selfcenter rounded-[30px]'>
          <div className='flex gap-4 '>
            <img src={PlantaLeft}></img>
            <h2>Banner / Mudar para foto !!!!!!!!!</h2>
            <img src={PlantaRight}></img>
          </div>
        </div>
        
      </section>

    </>
  )
}

export default Cadastro