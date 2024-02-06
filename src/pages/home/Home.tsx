import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto';


function Home() {
  const { usuario } = useContext(AuthContext);

  return (
    <div className='grid grid-rows-2'>
      <div className='flex justify-center items-center'>
        <div>
          <h2 className="text-slate-900 text-5xl  my-4">Logar</h2>
          <h2 className="text-slate-900 text-4xl ">Ola user : {usuario.nome}</h2>
          <Link to="/login" className="my-4 rounded bg-indigo-400
         hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
            Voltar
          </Link>
        </div>
      </div>
      <div className='flex justify-center'>
        <ListaProduto />
      </div>

    </div>

  );
}

export default Home;