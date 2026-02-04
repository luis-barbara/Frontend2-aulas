import Contador from "./components/counter";
import "./App2.css"
import ToggleImage from "./components/toggleimage";

function App2() {
  return (
    <div className="App2">
      <h1>Contador com useState</h1>
      <Contador />
        <h1>Toggle Image com useState</h1>
      <ToggleImage />
    </div>
  );
}

export default App2;
