import './App.css';
import ListItems from "./ListItems/ListItems";
import styles from "./App.css";
import dark from "./assets/styles/dark.css";
import light from "./assets/styles/light.css";


function App() {
  return (
    <div>
    <div className="App">
      <ListItems theme={dark}/>
    </div>
    </div>
  );
}

export default App;


