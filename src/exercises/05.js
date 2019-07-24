// useRef and useEffect: DOM interaction

import React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

function useTilt(ref, options) {
  React.useEffect(() => {
    const tiltNode = ref.current
    VanillaTilt.init(tiltNode, options)

    return () => tiltNode.vanillaTilt.destroy()
  }, [options, ref])
}

function Tilt({children}) {
  const tiltRootRef = React.useRef()
  useTilt(tiltRootRef, {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5,
  })
  return (
    <div className="tilt-root" ref={tiltRootRef}>
      <div className="tilt-child">{children}</div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}
Usage.title = 'useRef and useEffect: DOM interaction'

export default Usage
