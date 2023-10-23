import { useState } from "react";
import "./App.css";
import { Square, TurnComponent, WinnerMessage } from "./components";
import { checkEndGame, checkWinner, TURNS } from "./logic";
import confetti from "canvas-confetti";
import { saveGameStorage, resetGameStorage } from "./logic";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ? turnFromStorage : TURNS.x;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);
    saveGameStorage({
      board: newBoard,
      turn: newTurn,
    });
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    resetGameStorage();
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
