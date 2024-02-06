import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import Produto from '../../../models/Produtos';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';

function ListaProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { handleLogout } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        await buscar('/produtos/all', setProdutos, {});
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente');
          handleLogout();
        }
      }
    }

    fetchData();
  }, []); 
  return (
    <>
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} prod={produto} />
        ))}
      </div>

      <section className='flex justify-center py-12'>
        <div className='w-[80%] h-[250px] bg-seasalt flex justify-center items-center selfcenter rounded-[30px]'>
          <div className='flex gap-4 '>
            <h2>Banner / Mudar para foto !!!!!!!!!</h2>
          </div>
        </div>

      </section>
      
    </>
  );
}

export default ListaProduto;