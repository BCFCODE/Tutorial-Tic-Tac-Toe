import BoardRow from "./BoardRow";
import Square from "./Square";
import calculateWinner from "../calculateWinner";

export type Squares = (string | null)[];
interface Props {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (squares: Squares) => void;
}

const Board = ({ xIsNext, onPlay, squares }: Props) => {
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;
    if (squares[i]) return;
    const nextSquares = [...squares];
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <BoardRow>
        <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
        <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
      </BoardRow>
      <BoardRow>
        <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
        <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
        <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
      </BoardRow>
      <BoardRow>
        <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
        <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
        <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
      </BoardRow>
    </>
  );
};

export default Board;
