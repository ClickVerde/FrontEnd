import ListaIConsCategorias from "../../components/categorias/iconsCategorias/ListaIconsCategorias";
import ListaProduto from "../../components/produtos/listaProduto/ListaProduto";

function Home() {
  return (
    <>
      <main>
        <section className="w-full h-[250px] bg-seasalt flex justify-center items-center ">
          <div className="flex gap-4 ">
            <h2>Home</h2>
          </div>
        </section>
        <ListaIConsCategorias />

        <section className="w-ful flex justify-center items-center mt-[100px]  mb-[40px] ">
          <div className="flex gap-4 ">
            <h2>Alguns dos nossos produtos</h2>
          </div>
        </section>
        <ListaProduto />

        <section className="flex justify-center">
          <div className="w-4/6 flex justify-around items-center ">
            <div>
              <h2>Produtos</h2>
            </div>
            <div>
              <h2>Categorias</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
