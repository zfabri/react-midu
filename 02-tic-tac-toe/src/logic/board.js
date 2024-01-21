import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) { // revisamos todas las combinaciones ganadoras para ver si x o u gano
    const [a, b, c] = combo

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }

  return null // si no hay ganador
}

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay mas espacios vacios
  // en el tablero

  // newBoard = [null,null,null,null,null,null,null,null,null]
  return newBoard.every(square => square !== null)
}