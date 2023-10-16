import { Square } from "./Square";

export const WinnerMessage = ({winner}) => {


  return (
    <>
      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? "Tie" : "Win: "}</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button>Restart</button>
            </footer>
          </div>
        </section>
      )}
    </>
  );
};
