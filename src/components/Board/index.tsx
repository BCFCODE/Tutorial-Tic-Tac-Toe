import BoardRow from "./BoardRow";
import Square from "./Square";

const Board = () => {
  return (
    <>
      <BoardRow>
        <Square />
        <Square />
        <Square />
      </BoardRow>
      <BoardRow>
        <Square />
        <Square />
        <Square />
      </BoardRow>
      <BoardRow>
        <Square />
        <Square />
        <Square />
      </BoardRow>
    </>
  );
};

export default Board;
