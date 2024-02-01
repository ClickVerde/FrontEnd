import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categorias";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

	let navigate = useNavigate();

	const { id } = useParams<{ id: string }>();

	const { usuario, handleLogout } = useContext(AuthContext); //email ou usuario
	const token = usuario.token;

	async function buscarPorId(id: string) {
		try {
			await buscar(`/categorias/${id}`, setCategoria, {
				headers: {
					Authorization: token,
				},
			});
		} catch (error: any) {
			if (error.toString().includes("403")) {
				alert("O token expirou, favor logar novamente");
				handleLogout();
			}
		}
	}

	useEffect(() => {
		if (token === "") {
			alert("Você precisa estar logado");
			navigate("/login");
		}
	}, [token]);

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	function retornar() {
		navigate("/categorias/all");
	}

	async function deletarCategoria() {
		setIsLoading(true);
		try {
			await deletar(`/categorias/${id}`, {
				headers: {
					Authorization: token,
				},
			});

			alert("Categoria apagada com sucesso");
		} catch (error) {
			alert("Erro ao apagar a categoria");
		}

		retornar();
	}
	return (
		<div className="container w-1/3 mx-auto">
			<h1 className="text-4xl text-center my-4">Deletar categoria</h1>

			<p className="text-center font-semibold mb-4">
				Você tem certeza de que deseja apagar a categoria a seguir?
			</p>

			<div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
				<header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
					Categoria
				</header>
				<p className="p-8 text-3xl bg-slate-200 h-full">
					{categoria.nome}
				</p>
				<div className="flex">
					<button
						className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
						onClick={retornar}
					>
						Não
					</button>
					<button
						className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
						onClick={deletarCategoria}
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
							<span>Sim</span>
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

export default DeletarCategoria;
