import { MachineMove } from "../components/MachineMove";
import { Paper } from "../components/Paper";
import { Rock } from "../components/Rock";
import { Scissors } from "../components/Scissors";

import "./styles.css";

export const Playing = ({ move }) => {

  return (
    <div className="playingContainer">
      <div>
        {move === "scissors" ? <Scissors /> : null}
        {move === "rock" ? <Rock /> : null}
        {move === "paper" ? <Paper /> : null}

        <MachineMove />
      </div>

      <p className="text">MACHINE IS CHOOSING...</p>
    </div>
  );
};
