// useCounter: custom hooks
import React from 'react'

// 🐨 Make a custom hook called useCounter that accepts the step and
// initialCount and returns the count and increment functions

function useCounter(step, initialCount) {
  // 💣 remove this (or move it to your custom hook)
  const [count, setCount] = React.useState(initialCount)
  const increment = () => setCount(c => c + step)

  return [count, increment]
}

function Counter({step = 1, initialCount = 0}) {
  const [count, increment] = useCounter(step, initialCount)
  return <button onClick={increment}>{count}</button>
}

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return <Counter />
}
Usage.title = 'useCounter: custom hooks'

export default Usage
