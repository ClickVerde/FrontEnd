import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categorias";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormularioCategoria() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

	let navigate = useNavigate();

	const { id } = useParams<{ id: string }>();

	const { usuario, handleLogout } = useContext(AuthContext); //email ou usuario
	const token = usuario.token;

	async function buscarPorId(id: string) {
		await buscar(`/categorias/${id}`, setCategoria, {
			headers: {
				Authorization: token,
			},
		});
	}

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setCategoria({
			...categoria,
			[e.target.name]: e.target.value,
		});

		console.log(JSON.stringify(categoria));
	}

	async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);

		if (id !== undefined) {
			try {
				await atualizar(`/categorias`, categoria, setCategoria, {
					headers: {
						Authorization: token,
					},
				});

				alert("Categoria atualizada com sucesso");
				retornar();
			} catch (error: any) {
				if (error.toString().includes("403")) {
					alert("O token expirou, favor logar novamente");
					handleLogout();
				} else {
					alert("Erro ao atualizar a categoria");
				}
			}
		} else {
			try {
				await cadastrar(`/categorias`, categoria, setCategoria, {
					headers: {
						Authorization: token,
					},
				});

				alert("Categoria cadastrada com sucesso");
			} catch (error: any) {
				if (error.toString().includes("403")) {
					alert("O token expirou, favor logar novamente");
					handleLogout();
				} else {
					alert("Erro ao cadastrar a Categoria");
				}
			}
		}
		setIsLoading(false);
		retornar();
	}

	function retornar() {
		navigate("/categorias/all");
	}

	useEffect(() => {
		if (token === "") {
			alert("Você precisa estar logado");
			navigate("/login");
		}
	}, [token]);

	return (
		<div className="container flex flex-col items-center justify-center mx-auto">
			<h1 className="text-4xl text-center my-8">
				{id === undefined
					? "Cadastre uma nova categoria"
					: "Editar categoria"}
			</h1>
			<form
				className="w-1/2 flex flex-col gap-4"
				onSubmit={gerarNovaCategoria}
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="nome">Nome da categoria</label>
					<input
						type="text"
						placeholder="Nome"
						name="nome"
						className="border-2 border-slate-700 rounded p-2"
						value={categoria.nome}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							atualizarEstado(e)
						}
					/>
					<label htmlFor="descricao">Descrição da categoria</label>
					<input
						type="text"
						placeholder="Descrição"
						name="descricao"
						className="border-2 border-slate-700 rounded p-2"
						value={categoria.descricao}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							atualizarEstado(e)
						}
					/>
					<label htmlFor="foto">Foto da categoria</label>
					<input
						type="text"
						placeholder="Link da foto"
						name="foto"
						className="border-2 border-slate-700 rounded p-2"
						value={categoria.foto}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							atualizarEstado(e)
						}
					/>
				</div>
				<button
					className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
					type="submit"
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
						<span>{id === undefined ? "Cadastrar" : "Editar"}</span>
					)}
				</button>
			</form>
		</div>
	);
}

export default FormularioCategoria;