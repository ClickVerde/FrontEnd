import "reactjs-popup/dist/index.css";
import "./ModalProduto.css";
import {
  ModalButtonAlter,
  ModalButtonCreate,
  ModalButtonDelete,
} from "./modalButton/ModalButton";
interface ModalProdutoProps {
  type: number;
  id: number;
}

function ModalProduto(props: ModalProdutoProps) {
  // Componente do botão para o tipo 1

  switch (props.type) {
    case 1:
      return (
        <>
          <ModalButtonCreate></ModalButtonCreate>
        </>
      );
      break;
    case 2:
      return (
        <>
          <ModalButtonAlter id={props.id}></ModalButtonAlter>
        </>
      );
      break;
    case 3:
      return (
        <>
          <ModalButtonDelete></ModalButtonDelete>
        </>
      );
      break;
  }
}

export default ModalProduto;
