import "./Note.css";

export const Note = (props) => {
  return (
    <li ket={props.id} className="AppNote">
      <p className="AppNombre">{props.nombre} :</p>
      <p className="AppTexto">{props.texto}</p>
      <div className="containerBtn">
      <button className="button" onClick={() => props.onClose(props.id)}>
        x
      </button>
      </div>
      <hr className="hr"></hr>
    </li>
  );
};
