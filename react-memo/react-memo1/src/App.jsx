import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Review from "./components/Review";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <Movie
        title="Guardianes de la Galaxia"
        poster="https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/ca574c84-c71a-11ed-b87a-96c052f0041a.jpg"
      />

      <hr />

      <label htmlFor="score">
        <input
          type="number"
          name="score"
          id="score"
          value={score}
          onChange={(event) => setScore(event.target.valueAsNumber)}
        />
      </label>

      <Review title="Guardianes de la Galaxia" score={score} />
    </>
  );
}

export default App;
