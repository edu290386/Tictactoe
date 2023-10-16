import { useState } from "react";
import "./App.css";
import { Square } from "./components/Square";

const TURNS = {
  x: "X",
  o: "O",
};

const WINNERS_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    const winnerCombo = WINNERS_COMBINATIONS.find((combo) => {
      const [a, b, c] = combo;
      return (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      );
    });
    return winnerCombo ? boardToCheck[winnerCombo[0]] : null;
  };

  const updateBoard = (index) => {
    if (board[index] || winner ) return;
    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn); 
    const newWinner = checkWinner(newBoard);
    if (newWinner){
      setWinner(newWinner);
    }
   
  };

  return (
    <>
      <main className="board">
        <h1>TicTacToe</h1>
        <section className="game">
          {board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>
        <section className="turn">
          <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
          <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
        </section>
      </main>
    </>
  );
}

export default App;
