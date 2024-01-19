import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Footer from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Cadastro } from './pages/cadastro/Cadastro';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';



function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <main>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cadastro" element={<Cadastro/>}></Route>
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
