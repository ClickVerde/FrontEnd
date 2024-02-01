import { useContext, useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categorias";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardCategoria/CardCategoria";

function ListaCategorias() {
	const [categorias, setCategorias] = useState<Categoria[]>([]);

	let navigate = useNavigate();

	const { email, handleLogout } = useContext(AuthContext); // email ou usuario?

	/* No blog pessoal, o campo email era chamado de usuário, mas ao mudar pra email isso afetou a declaração e agora não dá pra declarar como "usuario", apenas como "email", caso contrário indica um erro: "Propriedade usuário não existe em AuthContextProps". Isso só é usado em duas linhas desse código, então não sei se isso seria um problema pra transparência dos nomes, já que o token deveria ser de um usuario e não de um email */

	const token = email.token;

	async function buscarCategorias() {
		try {
			await buscar("/categorias/all", setCategorias, {
				headers: { Authorization: token },
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
		buscarCategorias();
	}, [categorias.length]);
	return (
		<>
			{categorias.length === 0 && (
				<Dna
					visible={true}
					height="200"
					width="200"
					ariaLabel="dna-loading"
					wrapperStyle={{}}
					wrapperClass="dna-wrapper mx-auto"
				/>
			)}
			<div className="flex justify-center w-full my-4">
				<div className="container flex flex-col">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{categorias.map((categoria) => (
							<>
								<CardCategorias
									key={categoria.id}
									categoria={categoria}
								/>
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default ListaCategorias;
