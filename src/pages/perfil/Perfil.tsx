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
		<div className="container mx-auto my-4 rounded-2xl overflow-hidden">
			{/* Não vai renderizar porque não tem um link para uma foto válida */}
			<img
				src={usuario.foto}
				alt={`Foto de perfil de ${usuario.nome}`}
				className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
			/>

			<div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
				<p>Nome: {usuario.nome} </p>
				<p>Email: {usuario.email}</p>
			</div>
		</div>
	);
}

export default Perfil;
