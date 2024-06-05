interface Props {
  value: string;
}

export default function Square({ value }: Props) {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
}
