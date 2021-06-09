import React from "react";
import "./Notes.css";
import { Note } from "./Note";
import { useState } from "react";

const Notes = () => {
  const [note, setNote] = useState([]);
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeText = (event) => {
    setNewText(event.target.value);
  };

  const handleClick = (event) => {
    const noteToAddToState = {
      id: note.length + 1,
      nombre: newName,
      texto: newText,
    }
      console.log(noteToAddToState);
      setNote(note.concat(noteToAddToState));
      setNewName("");
      setNewText("");
    
  };

  return (
    <div>
      <ol className="AppNotas">
        {note.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          onChange={handleChangeName}
          value={newName}
          type="text"
          name="nombre"
        ></input>
        <br />
        <label htmlFor="texto">Texto</label>
        <input
          onChange={handleChangeText}
          value={newText}
          type="text"
          name="texto"
        ></input>
        <br />
        <button onClick={handleClick}>Crear</button>
      </div>
    </div>
  );
};

export default Notes;
