import "./App.css";
import Title from "./components/Title";
import Notes from "./components/Notes";

// const notes = [
//   {
//     id: 1,
//     nombre: "Default",
//     texto: "Descripcion Default",
//   },
//   {
//     id: 2,
//     nombre: "Default",
//     texto: "Descripcion Default",
//   },
//   {
//     id: 3,
//     nombre: "Default",
//     texto: "Descripcion Default",
//   },
// ];


function App() {
  return (
    <main className="App-main">
      <Title message="Notas :" />
      <Notes/>
    </main>
  );
}

export default App;
