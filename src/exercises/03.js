// useEffect: persistent state
import React from 'react'

function useLocalStorageCounter({step = 1, initialCount = 0}) {
  const [count, setCount] = React.useState(() =>
    Number(window.localStorage.getItem('count') || initialCount),
  )
  React.useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])
  const increment = () => setCount(c => c + step)

  return [count, increment]
}

function Counter({step = 1, initialCount = 0}) {
  const [count, increment] = useLocalStorageCounter({step, initialCount})
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
Usage.title = 'useEffect: persistent state'

export default Usage
