import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal' 
import { saveGameToStorage, resetGameStorage } from './logic/storage/storage'

export function App() {
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  } )
  
  const [turn, setTurn] = useState( () => {
    const turnFromStorage = window.localStorage.getItem('turn')

    return turnFromStorage ?? TURNS.X
  } )


  const [winner, setWinner] = useState(null) // null es que no hay ganador y false un empate

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return // no actualizamos esta posicion si ya tiene algo

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // guardar la partida
    saveGameToStorage({board: newBoard, turn: newTurn})

    // const newWinner = checkWinnerFrom(newBoard)
    // if(newWinner) {
    //   setWinner((prevWinner) => {
    //     console.log(`El ganador es ${newWinner}, el anterior era ${prevWinner}`);
    //     return newWinner
    //   }) // la actualizacion del estado es asincrono
    // }

    // revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  // useEffect( () => {
  //   saveGameToStorage({board: newBoard, turn: newTurn})
  // }, [turn, board])

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>

      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}