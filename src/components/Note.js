export const Note = (props) => {
    return (
      <li>
        <p>{props.nombre}</p>
        <p>{props.texto}</p>
      </li>
    );
  };