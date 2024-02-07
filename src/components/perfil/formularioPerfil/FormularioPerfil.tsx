// import { ChangeEvent, useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthContext';
// import Perfil from '../../../models/Usuario';
// import { buscar, atualizar, cadastrar } from '../../../services/Service';
// import { toastAlerta } from '../../../utils/toastAlerta';
// import { TelegramLogo } from '@phosphor-icons/react';


// function FormularioPerfil() {

//   const[isLoading, setIsLoading] = useState<boolean>(false);

//   const navigate = useNavigate();

//   const { id } = useParams<{ id: string }>();

//   const { usuario, handleLogout } = useContext(AuthContext);
//   const token = usuario.token;


//   const [perfil, setPerfil] = useState<Perfil>({
//     id: 0,
//     nome: '',
//     email: '',
//     senha: '',
//     foto: '',
//     cpf_cnpj: '',
//     tipo: '',
//     data: ''
//   });

//   async function buscarPerfilPorId(id: string) {
//     await buscar(`/usuarios/${id}`, setPerfil, {
//       headers: {
//         Authorization: token,
//       },
//     });
//   }

//   useEffect(() => {
//     if (token === '') {
//       toastAlerta('Você precisa estar logado', 'info');
//       navigate('/');
//     }
//   }, [token]);

//   function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
//     setPerfil({
//       ...perfil,
//       [e.target.name]: e.target.value,
//       usuario: usuario,
//     });
//   }

//   function retornar() {
//     navigate('/postagens');
//   }

//   async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
//     e.preventDefault();

//     console.log({ usuario });

//     if (id != undefined) {
//       try {
//         await atualizar(`/usuarios`, usuario, setUsuario, {
//           headers: {
//             Authorization: token,
//           },
//         });
//         toastAlerta('Postagem atualizada com sucesso', 'sucesso');
//         retornar();
//       } catch (error: any) {
//         if (error.toString().includes('403')) {
//           toastAlerta('Sua sessão expirou, favor logar novamente', 'info')
//           handleLogout()
//         } else {
//           toastAlerta('Erro ao atualizar a Postagem', 'erro');
//         }
//       }
//     } else {
//       try {
//         await cadastrar(`/usuarios`, usuario, setUsuario, {
//           headers: {
//             Authorization: token,
//           },
//         });

//         toastAlerta('Postagem cadastrada com sucesso', 'sucesso');
//         retornar();
//       } catch (error: any) {
//         if (error.toString().includes('403')) {
//           toastAlerta('Sua sessão expirou, favor logar novamente', 'info')
//           handleLogout()
//         } else {
//           toastAlerta('Erro ao cadastrar a Postagem', 'erro');
//         }
//       }
//     }
//   }

//   const carregandoTema = tema.descricao === '';

//   return (
//     <div className="container flex flex-col mx-auto items-center">
//       <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}</h1>

//       <form onSubmit={gerarNovaPostagem} className="flex flex-col w-1/2 gap-4">
//         <div className="flex flex-col gap-2">
//           <label htmlFor="titulo">Titulo da postagem</label>
//           <input
//             value={postagem.titulo}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
//             type="text"
//             placeholder="Titulo"
//             name="titulo"
//             required
//             className="border-2 border-slate-700 rounded p-2"
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <label htmlFor="titulo">Texto da postagem</label>
//           <input
//             value={postagem.texto}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
//             type="text"
//             placeholder="Texto"
//             name="texto"
//             required
//             className="border-2 border-slate-700 rounded p-2"
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <p>Tema da postagem</p>
//           <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>
//             <option value="" selected disabled>Selecione um tema</option>
//             {temas.map((tema) => (
//               <>
//                 <option value={tema.id} >{tema.descricao}</option>
//               </>
//             ))}
//           </select>
//         </div>
//         <button disabled={carregandoTema} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
//           {carregandoTema ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FormularioPostagem;