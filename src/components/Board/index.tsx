import BoardRow from "./BoardRow";
import Square from "./Square";

const Board = () => {
  return (
    <>
      <BoardRow>
        <Square>1</Square>
        <Square>2</Square>
        <Square>3</Square>
      </BoardRow>
      <BoardRow>
        <Square>4</Square>
        <Square>5</Square>
        <Square>6</Square>
      </BoardRow>
      <BoardRow>
        <Square>7</Square>
        <Square>8</Square>
        <Square>9</Square>
      </BoardRow>
    </>
  );
};

export default Board;
