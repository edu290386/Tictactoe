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
  
  export const checkWinner = (boardToCheck) => {
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