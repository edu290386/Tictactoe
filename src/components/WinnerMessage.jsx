import { Square } from "./Square";

export const WinnerMessage = ({ winner, resetGame }) => {
  const handleReset = () => {
    resetGame();
  };

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
              <button onClick={handleReset}>Restart</button>
            </footer>
          </div>
        </section>
      )}
    </>
  );
};
