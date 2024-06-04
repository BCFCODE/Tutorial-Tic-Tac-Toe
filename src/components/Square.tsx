interface Props {
  children: string | number;
}

export default function Square({ children }: Props) {
  return (
    <button type="button" className="square">
      {children}
    </button>
  );
}
