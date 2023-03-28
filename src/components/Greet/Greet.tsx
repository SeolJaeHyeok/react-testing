import { PropsType } from "./Greet.types";

export default function Greet({ name }: PropsType) {
  return <div>Greet {name}</div>;
}
