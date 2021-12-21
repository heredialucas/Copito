import "./App.css";
import Title from "./components/Title";
import Notes from "./components/Notes";


function App() {
 
  const notas = JSON.parse(window.localStorage.getItem("notas"));

  return (
    <main className="App-main">
      <Title />
      <Notes notas={notas}/>
    </main>
  );
}

export default App;
