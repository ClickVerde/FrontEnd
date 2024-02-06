import { useContext, useEffect, useState } from "react";
import { LineWave } from "react-loader-spinner";
import Produto from "../../../models/Produtos";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardProduto/CardProduto";
import { toastAlerta } from "../../../utils/toastAlerta";

function ListaProduto() {
	const [produtos, setProdutos] = useState<Produto[]>([]);
	const { handleLogout } = useContext(AuthContext);

	useEffect(() => {
		async function fetchData() {
			try {
				await buscar("/produtos/all", setProdutos, {});
			} catch (error: any) {
				if (error.toString().includes("403")) {
					toastAlerta(
						"O token expirou, favor logar novamente",
						"info"
					);
					handleLogout();
				}
			}
		}

		fetchData();
	}, []);
	return (
		<>
			{produtos.length === 0 && (
				<LineWave
					visible={true}
					height="200"
					width="2000"
					color="#3E5622"
					ariaLabel="tail-spin-loading"
					wrapperStyle={{}}
					wrapperClass=""
				/>
			)}
			<div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
				{produtos.map((produto) => (
					<CardProduto key={produto.id} prod={produto} />
				))}
			</div>
		</>
	);
}

export default ListaProduto;
