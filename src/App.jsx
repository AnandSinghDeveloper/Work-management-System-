import { useState } from 'react'
import React from 'react'

import Home from './Components/Home'
import Dashboard from './Components/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dashboard/>
    </>
  )
}

export default App
