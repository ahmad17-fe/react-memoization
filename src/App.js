import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  console.log("parent component");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Memoization</p>
        <button onClick={() => setCounter((count) => count + 1)}>
          Like {counter}
        </button>
        <input type="text" placeholder="text...." />

        <Child />
      </header>
    </div>
  );
}

function Child() {
  console.log("child component");

  return (
    <div style={{ marginTop: "30px" }}>
      Child Component <button>Like</button>
    </div>
  );
}

export default App;
