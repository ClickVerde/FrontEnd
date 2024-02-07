import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";
import Row from "../../assets/icons/arrow_white.svg";
import { Link } from 'react-router-dom';
import Categoria from '../../models/Categorias';
//import ModalPerfil from "../../components/perfil/modalPerfil/ModalPerfil";

interface CardCategoriaProps {
	categoria: Categoria

}

function Perfil({ categoria }: CardCategoriaProps) {
	let navigate = useNavigate();

	console.log(categoria);
	
	const { usuario } = useContext(AuthContext);

	useEffect(() => {
		if (usuario.token === "") {
			toastAlerta("Você precisa estar logado", "info");
			navigate("/login");
		}
	}, [usuario.token]);

	console.log(usuario.data);

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
					<div className="grid grid-flow-row m-4 border w-4/6 h-[400px] bg-[#F5F5F5] rounded-3xl">
						<div className="p-10 grid grid-cols-2 gap-4 content-end pt-[70px] font-bold text-[#525C60]">
							<div><p>Nome: {usuario.nome} </p></div>
							<div><p>Email: {usuario.email}</p></div>
							<div><p>CPF/CNPJ: {usuario.cpf_cnpj}</p></div>
							<div><p>Usuário desde:</p></div>
						</div>
						<div className="flex justify-end items-end">
							<button className="rounded-[10px] bg-sunglow hover:bg-[#FFE499] hover:text-[#3e56227a] text-darkMossGreen font-bold w-1/6 h-[60px] p-4 m-6 transition duration-300 ease-in-out">
								<span className='flex ml-4'>Editar
									<img src={Row} className='w-4 ms-2' />
								</span>
							</button>
						</div>
						<div className="flex">
							<Link to={`/editarCategoria/${categoria.id}`} className='w-full text-black hover:text-blue-600 flex items-center justify-center py-2'>
								<button>Editar</button>
							</Link>
							<Link to={`/deletarCategoria/${categoria.id}`} className='text-black hover:text-red-600 w-full flex items-center justify-center'>
								<button>Deletar</button>
							</Link>
						</div>
					</div>
				</div>
				<div>

				</div>
			</div>
		</>

	);

}

export default Perfil;
