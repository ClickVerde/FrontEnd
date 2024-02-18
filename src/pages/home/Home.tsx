import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/arrow_green.svg";
import ListaIConsCategorias from "../../components/categorias/iconsCategorias/ListaIconsCategorias";
import { Preloader } from "../../components/preloader/Preloader";
import ListaProduto from "../../components/produtos/listaProduto/ListaProduto";
import "./Home.css";

function Home() {
  return (
    <>
      <Preloader></Preloader>
      <main>
        <section className="h-[400px] overflow-hidden bg-seasalt flex justify-center items-center">
          <div className="flex gap-4 image-container p-[200px]">
            <div className="w-[500px] border-red flex flex-col justify-center">
              <p className="font-yellowtail text-emerald text-[20px]">
                100% Eco-friendly
              </p>
              <h3>Faça a melhor escolha de produtos eco-friendly</h3>
              <button
                type="submit"
                className="mt-4 rounded-[10px] bg-sunglow border border-sunglow hover:bg-[#f7f7f7]text-darkMossGreen textButton  text-darkMossGreen w-2/6 h-[60px] p-4 flex justify-center items-center transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300 shadow-lg"
              >
                <span className="flex ">
                  Ver agora!
                  <img src={Arrow} className="w-4 ms-2" />
                </span>
              </button>
            </div>
          </div>
        </section>

        <ListaIConsCategorias />

        <section className="m-6">
          <article className="w-ful flex justify-center items-center mt-[50px]  mb-[40px] ">
            <div className="flex gap-4 ">
              <h5>Alguns dos nossos Produtos</h5>
            </div>
          </article>

          <ListaProduto />

          <article className="flex justify-center mt-[70px]">
            <div className="justify-around items-center grid grid-cols-2 gap-6 container w-[900px]">
              <Link
                to="/produtos/all"
                className=" bg-darkMossGreen rounded-2xl  flex justify-center items-center h-[200px] transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"
              >
                <h5 className="text-white">Produtos</h5>
              </Link>
              <Link
                to="/categorias/all"
                className=" bg-darkMossGreen rounded-2xl flex justify-center items-center	h-[200px] transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"
              >
                <h5 className="text-white">Categorias</h5>
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home;
