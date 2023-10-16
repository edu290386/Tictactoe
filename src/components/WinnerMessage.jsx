import { Square } from "./Square";

export const WinnerMessage = ({ winner, resetGame }) => {
  if (winner === null) return null;

  const winnerText = winner === false ? "Tie" : "Win: ";

  const handleReset = () => {
    resetGame();
  };

  return (
    <>
      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>
          <header className="win">{winner && <Square>{winner}</Square>}</header>
          <footer>
            <button onClick={handleReset}>Restart</button>
          </footer>
        </div>
      </section>
    </>
  );
};
