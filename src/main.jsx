import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store.js'
import { BrowserRouter } from 'react-router'
import TodoContextProvider from './context/TodoContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}> 
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Provider>
  
  </StrictMode>,
)
