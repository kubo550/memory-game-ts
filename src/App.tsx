import { Container, Paper } from "@material-ui/core";
import { useState } from "react";
import Board, { BoxType } from "./components/Board/Board";
import Header from "./components/Header/Header";
import { createPlayableArray } from "./helper";

const initial: string[] = "abcdefghijklmnoprstu".split("");

const App = () => {
  const [game, setGame] = useState<BoxType[]>(
    createPlayableArray([...initial, ...initial])
  );
  const [pick, setPick] = useState<BoxType[]>([]);
  const [moves, setMoves] = useState(0);

  const handleClick = (idx: number) => {
    const current = game[idx];

    if (current.hidden || current.revealed || pick.length > 1) return;

    setPick(prev => [...prev, current]);

    const revealedArray = game.map((box, i) =>
      idx === i ? { ...box, revealed: !box.revealed } : box
    );

    setGame(revealedArray);

    if (pick.length) {
      setTimeout(() => {
        const newArray =
          pick[0].value === current.value
            ? game.map(box =>
                box.value === current.value ? { ...box, hidden: true } : box
              )
            : game.map(box => ({ ...box, revealed: false }));
        setMoves(prev => ++prev);
        setPick([]);
        setGame(newArray);
      }, 500);
    }
  };

  return (
    <Container>
      <Paper
        elevation={5}
        style={{ maxWidth: "800px", padding: "0.5rem", margin: "30px auto" }}
      >
        <Header moves={moves} />
        <Board width={8} height={5} array={game} onClick={handleClick} string />
      </Paper>
    </Container>
  );
};

export default App;
