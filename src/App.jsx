import { useState } from "react";
import "./App.css";
import { Paper } from "./components/Paper";
import { Rock } from "./components/Rock";
import { Scissors } from "./components/Scissors";
import { Playing } from "./pages/Playing";

function App() {
  const [move, setMove] = useState();
  const [status, setStatus] = useState({
    move: "",
    status: "",
  });

  return (
    <section className="container">
      <div className="scorePointsContainer">score:</div>

      {!status.status && (
        <div className="movesWrapper">
          <Scissors setStatus={setStatus} />
          <Paper setStatus={setStatus} />
          <Rock setStatus={setStatus} />
        </div>
      )}

      {status.status === "playing" && <Playing move={status.move} />}
    </section>
  );
}

export default App;
