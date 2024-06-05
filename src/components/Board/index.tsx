import BoardRow from "./BoardRow";
import Square from "./Square";

const Board = () => {
  return (
    <>
      <BoardRow>
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </BoardRow>
      <BoardRow>
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </BoardRow>
      <BoardRow>
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </BoardRow>
    </>
  );
};

export default Board;
