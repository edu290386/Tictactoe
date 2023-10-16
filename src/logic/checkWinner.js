import { WINNERS_COMBINATIONS } from "./constants";

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
