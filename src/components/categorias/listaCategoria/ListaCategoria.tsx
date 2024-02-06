import { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import Categoria from "../../../models/Categorias";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardCategoria/CardCategoria";

function ListaCategorias() {
	const [categorias, setCategorias] = useState<Categoria[]>([]);

	async function buscarCategorias() {
		await buscar("/categorias/all", setCategorias, {});
	}

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
			<div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{categorias.map((categoria) => (
							<>
								<CardCategorias
									key={categoria.id}
									categoria={categoria}
								/>
							</>
						))}
			</div>
		</>
	);
}

export default ListaCategorias;