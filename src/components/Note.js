import './Note.css';

export const Note = (props) => {
 
  

  return (
      <li ket={props.id} className='AppNote'>
        <p className='AppNombre'>{props.nombre} :</p>
        <p className='AppTexto'>{props.texto}</p>
        <button onClick={()=>props.onClose(props.id)}>X</button>
      </li>
    );
  };