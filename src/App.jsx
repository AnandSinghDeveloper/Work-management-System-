import { useState } from 'react'
import React from 'react'
import Details from './Components/Details'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import { Form, Route } from 'react-router'
import { Routes } from 'react-router'
import From from './Components/From'


function App() {
  

  return (
    <>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Form" element={<From />} />
      </Routes>



    </>
  )
}

export default App
