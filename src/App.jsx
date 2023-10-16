import { useState } from "react";
import "./App.css";
import {
  Square,
  checkWinner,
  TURNS,
  TurnComponent,
  WinnerMessage,
  checkEndGame,
} from "./components";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    console.log(newWinner);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
  };

  return (
    <>
      <main className="board">
        <h1>TicTacToe</h1>
        <button onClick={resetGame}>Restart</button>
        <section className="game">
          {board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            );
          })}
        </section>
        <TurnComponent turn={turn} />
        <WinnerMessage winner={winner} resetGame={resetGame} />
      </main>
    </>
  );
}

export default App;
