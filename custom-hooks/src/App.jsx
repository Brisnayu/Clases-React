import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Toggleable from "./components/Toggleable";
import useWindowSize from "./hooks/useWindowSize";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(false);
  const { widht, height } = useWindowSize();

  useEffect(() => {
    console.log("Cambiando", widht, height);
  }, [widht, height]);

  return (
    <>
      <Increment />
      <Decrement />
      <Toggleable />

      <button
        onClick={() => {
          !setState;
        }}
      >
        Change State
      </button>

      <div>
        <h1>Window Size:</h1>
        <h3>Widht: {widht}</h3>
        <h3>Height: {height}</h3>
      </div>
    </>
  );
}

export default App;
