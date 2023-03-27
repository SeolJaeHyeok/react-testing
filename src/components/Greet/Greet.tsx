interface PropsType {
  name?: string;
}

export default function Greet({ name }: PropsType) {
  return <div>Greet {name}</div>;
}
