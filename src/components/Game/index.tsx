import { useState } from "react";
import Board, { Squares } from "../Board";

const Game = () => {
  const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = Number.isInteger(currentMove / 2)
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: Squares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
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

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

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
