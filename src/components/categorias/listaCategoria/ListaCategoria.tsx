import { useEffect, useState } from "react";
import { LineWave } from "react-loader-spinner";
import Categoria from "../../../models/Categorias";
import CardCategorias from "../cardCategoria/CardCategoria";
import defaultCategorias from "../defaultCategorias/defaultCategorias";

function ListaCategorias() {
	const [categorias, setCategorias] = useState<Categoria[]>([]);

	useEffect(() => {
		setCategorias(defaultCategorias);
	}, []);

	return (
		<>
			<div className="mt-[40px] w-4/6 container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
