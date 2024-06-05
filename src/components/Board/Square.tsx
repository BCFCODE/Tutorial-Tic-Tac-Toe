interface Props {
  value: string | null;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: Props) => {
  return (
    <button onClick={onSquareClick} type="button" className="square">
      {value}
    </button>
  );
};

export default Square;
