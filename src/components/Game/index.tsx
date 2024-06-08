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

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : `Go to game start`;

    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  const jumpTo = (nextMove) => {};

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
