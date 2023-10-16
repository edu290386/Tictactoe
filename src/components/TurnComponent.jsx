import { Square} from "./"
import { TURNS } from "../logic";


export const TurnComponent = ({turn}) => {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
      <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
    </section>
  );
};
