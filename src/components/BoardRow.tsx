interface Props {
  children: React.ReactNode;
}

const BoardRow = ({ children }: Props) => {
  return <div className="board-row">{children}</div>;
};

export default BoardRow;
