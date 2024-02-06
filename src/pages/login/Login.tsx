import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import PlantaRight from '../../assets/icons/PlantaRight.svg';
import PlantaLeft from '../../assets/icons/PlantaLeft.svg';
import LoginImage from '../../assets/Login.png';
import Arrow from '../../assets/icons/arrow_white.svg';
import './../../index.css'

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <>
      <section className='w-full h-[250px] bg-seasalt flex justify-center items-center '>

        <div className='flex gap-4 '>
          <img src={PlantaLeft}></img>
          <h2>Digite seu e-mail do Clickverde</h2>
          <img src={PlantaRight}></img>
        </div>
      </section>




      <section className="grid  justify-items-center font-bold p-32">

        <article className='grid grid-cols-3 rounded-[30px] shadow-2xl w-3/6'>
          <div>
            <img src={LoginImage} className='w-full h-full rounded-s-[30px]' />
          </div>

          <form className=" col-span-2 flex flex-col gap-4 p-10 rounded-e-[30px]" onSubmit={login}>
            <div className='w-full'>
              <h4 className="">Entrar</h4>
              <div className="flex flex-col w-full py-4 input-login">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border border-darkMossGreen rounded-[10px] p-2 h-14"
                  value={usuarioLogin.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                />
              </div>
              <div className="flex flex-col w-full py-4 input-login">
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  className="border border-darkMossGreen rounded-[10px] p-2 h-14"
                  value={usuarioLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
            </div>

            <p className='paragraph '>
              Ainda não tem uma conta?
              <Link to="/cadastro" className="paragraphBold text-darkMossGreen hover:underline ms-1">
                Cadastre-se
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
                <span className='flex'>Entrar
                  <img src={Arrow} className='w-4 ms-2' />
                </span>}
            </button>

          </form>
        </article>

      </section>
    </>
  );
}

export default Login;