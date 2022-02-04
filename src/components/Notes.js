import React, { useEffect } from "react";
import "./Notes.css";
import { Note } from "./Note";
import { useState } from "react";

const Notes = ({ notas }) => {
  const [note, setNote] = useState([]);
  const [state, setState] = useState({
    nombre: "",
    texto: "",
  });

  useEffect(() => {
    window.localStorage.setItem("notas", JSON.stringify(note));
  }, [note]);

  useEffect(() => {
    if (notas !== null) {
      setNote(notas);
    }
  }, [notas])
  const handleChangeState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: note.length + 1,
      nombre: state.nombre,
      texto: state.texto,
    };
    if (state.nombre === "" || state.texto === "") {
      alert('Es necesario rellenar los campos "Nombre" y "Texto"');
    } else {
      setNote(note.concat(noteToAddToState));
      setState({
        nombre: "",
        texto: "",
      });
    }
  };

  function onClose(id){
    const notas = note.filter(note => note.id !== id)
    setNote(notas)
  }

  return (
    <div className="AppContainer">
      <ol className="AppNotas">
        {note.map((note) => (
          <Note key={note.id} onClose={onClose} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit} className="AppForm">
        <label className="label" htmlFor="nombre">Nombre</label>
        <input
          onChange={handleChangeState}
          type="text"
          name="nombre"
          value={state.nombre}
          className="input"
          placeholder="Nombre de Nota"
        ></input>
        <br />
        <label className="label" htmlFor="texto">Texto</label>
          <textarea
          className="input-text"
          onChange={handleChangeState}
          type="textarea"
          name="texto"
          value={state.texto}
          placeholder="Descripción de Nota"
          >
          </textarea>
        <br />
        <button className="AppButton">Crear</button>
      </form>
    </div>
  );
};

export default Notes;
