// useState: tic tac toe

import React from 'react'

function Board({squareCount = 9}) {
  // 🐨 Use React.useState for the `squares` state you need
  // 💰 To create an empty array with 9 slots, you can use: `Array(9).fill(null)`
  const [squares, setSquares] = React.useState(Array(squareCount).fill(null))
  // 🐨 create your derived state variable here for the nextValue
  // 💰 call it "nextValue" and get it by calling calculateWhoIsNext with the squares
  const nextValue = calculateWhoIsNext(squares)
  // 🐨 create your derived state variable here for the winner
  // 💰 call it "winner" and get it by calling calculateWinner with the squares
  const winner = calculateWinner(squares)

  // This is the function your square click handler will call. `square` should
  // be an index. So if they click the center square, this will be `5`.
  // eslint-disable-next-line no-unused-vars
  function selectSquare(square) {
    if (winner || squares[square]) return

    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue
    setSquares(squaresCopy)
    // 🐨 first, if there's already winner or there's already a value at the
    // given square index (like someone clicked a square that's already been
    // clicked), then return early so we don't make any state changes
    //
    // 🦉 It's typically a bad idea to manipulate state in React
    // 🐨 make a copy of the squares array (💰 `[...squares]` will do it!)
    // 🐨 Set the value of the square that was selected
    // 💰 `squaresCopy[square] = nextValue`
    //
    // 🐨 set the squares to your copy
  }

  let status = `Next player: ${nextValue}`
  if (winner) status = `Winner: ${winner}`
  if (squares.every(Boolean)) status = `Scratch: Cat's game`

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <button className="square" onClick={() => selectSquare(0)}>
          {squares[0]}
        </button>
        <button className="square" onClick={() => selectSquare(1)}>
          {squares[1]}
        </button>
        <button className="square" onClick={() => selectSquare(2)}>
          {squares[2]}
        </button>
      </div>
      <div className="board-row">
        <button className="square" onClick={() => selectSquare(3)}>
          {squares[3]}
        </button>
        <button className="square" onClick={() => selectSquare(4)}>
          {squares[4]}
        </button>
        <button className="square" onClick={() => selectSquare(5)}>
          {squares[5]}
        </button>
      </div>
      <div className="board-row">
        <button className="square" onClick={() => selectSquare(6)}>
          {squares[6]}
        </button>
        <button className="square" onClick={() => selectSquare(7)}>
          {squares[7]}
        </button>
        <button className="square" onClick={() => selectSquare(8)}>
          {squares[8]}
        </button>
      </div>
    </div>
  )
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

// eslint-disable-next-line no-unused-vars
function calculateWhoIsNext(squares) {
  const xSquaresCount = squares.filter(r => r === 'X').length
  const oSquaresCount = squares.filter(r => r === 'O').length
  return oSquaresCount === xSquaresCount ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Usage() {
  return <Game />
}
Usage.title = 'useState: tic tac toe'

export default Usage
