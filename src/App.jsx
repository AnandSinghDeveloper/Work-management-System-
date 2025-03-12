import { useState } from 'react'
import React from 'react'
import Details from './Components/Details'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import LoginSignUp from './Components/LoginSignUp'
import { BrowserRouter } from 'react-router'
import { Route } from 'react-router'
import { Routes } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>


       
    {/* <Details/> */}
     {/* <Home/>  */}
      {/* <Dashboard/> */}
     {/* <LoginSignUp/> */}
    </>
  )
}

export default App
