import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria";
import ListaCategoria from "./components/categorias/listaCategoria/ListaCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Header";
import BuscarProdutos from "./components/produtos/buscarProdutos/BuscarProdutos";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import FormularioProduto from "./components/produtos/formularioProduto/FormularioCadastroProduto";
import ListaProduto from "./components/produtos/listaProduto/ListaProduto";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BuscarProdutosCategoria from "./components/categorias/buscarProdutosCategoria/BuscarProdutosCategoria";
import Perfil from "./pages/perfil/Perfil";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <ToastContainer />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias/all" element={<ListaCategoria />} />
              <Route path="/categorias/:id" element={<FormularioCategoria />} />
              <Route
                path="/categorias/nome/:nome"
                element={<BuscarProdutosCategoria />}
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
              <Route path="/produtos/all" element={<ListaProduto />} />
              <Route
                path="/produtos/nomes/:nome"
                element={<BuscarProdutos />}
              />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route
                path="/editarProduto/:id"
                element={<FormularioProduto />}
              />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
