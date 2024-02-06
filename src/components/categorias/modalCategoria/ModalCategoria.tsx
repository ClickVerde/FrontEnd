import FormularioCategoria from '../formularioCategoria/FormularioCategoria';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalCategoria.css'

function ModalCategoria() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800 animate-bounce'>Nova postagem</button>} modal>
        <div>
          <FormularioCategoria />
        </div>
      </Popup>
    </>
  );
}

export default ModalCategoria;