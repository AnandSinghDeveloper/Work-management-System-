import { useState } from 'react'
import React from 'react'
import Details from './Components/Details'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import { Route } from 'react-router'
import { Routes } from 'react-router'


function App() {
  

  return (
    <>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>



    </>
  )
}

export default App
