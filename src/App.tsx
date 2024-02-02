import "./App.css";

import Navbar from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria";
import ListaCategoria from "./components/categorias/listaCategoria/ListaCategoria";
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';


function App() {
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<Navbar />
					<div className="min-h-[80vh]">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/cadastro" element={<Cadastro />} />
							<Route path="/home" element={<Home />} />
							<Route
								path="/categorias/all"
								element={<ListaCategoria />}
							/>
							<Route
								path="/cadastroCategoria"
								element={<FormularioCategoria />}
							/>
							<Route
								path="/editarCategoria/:id"
								element={<FormularioCategoria />}
							/>
							<Route
								path="/deletarCategoria/:id"
								element={<DeletarCategoria />}
							/>
							<Route path="/produtos/all" element={<ListaProduto/>} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto/>} />
							<Route path="/deletarProduto/:id" element={<DeletarProduto />}/>
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}
export default App;