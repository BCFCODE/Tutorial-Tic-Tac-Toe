import { useState } from "react";
import Board, { Squares } from "../Board";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: Squares) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
