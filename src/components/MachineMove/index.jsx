import { Paper } from "../Paper";
import { Rock } from "../Rock";
import { Scissors } from "../Scissors";
import "./styles.css";

export const MachineMove = () => {
  const getRandomMove = (max, min) => {
    return Math.floor(Math.random(max - min + 1) + min);
  };

  const moves = [
    {
      id: 0,
      move: <Scissors />,
    },
    {
      id: 1,
      move: <Paper />,
    },
    {
      id: 2,
      move: <Rock />,
    },
  ];

  console.log(getRandomMove(0, 2));

  return (
    <section className="machineContainer">
      <div className="machineWrapper">
        {/* {moves.find((move) => {
          if (move.id === getRandomMove(0, 2)) {
            return move.move;
          }
        })} */}
      </div>
    </section>
  );
};
