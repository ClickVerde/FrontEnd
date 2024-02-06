import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";

function Perfil() {
	let navigate = useNavigate();

	const { usuario } = useContext(AuthContext);

	useEffect(() => {
		if (usuario.token === "") {
			toastAlerta("Você precisa estar logado", "info");
			navigate("/login");
		}
	}, [usuario.token]);

	return (
		<div className="container mx-auto my-4 overflow-hidden flex flex-col justify-center">
			{/* Não vai renderizar porque não tem um link para uma foto válida */}
			<div>
				<img
					src={usuario.foto}
					alt={`Foto de perfil de ${usuario.nome}`}
					className="p-4 w-[300px] h-[300px] object-cover rounded-full"
				/>
			</div>

			<div className="relative mt-[-6rem] h-72 flex flex-col border border-red-600 text-black text-2xl items-center justify-center">
				<p>Nome: {usuario.nome} </p>
				<p>Email: {usuario.email}</p>
			</div>
		</div>
	);
}

export default Perfil;
