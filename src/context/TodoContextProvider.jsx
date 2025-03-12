import React, { useState } from 'react'
import TodoContext from './CreteContext'

const TodoContextProvider = ({children}) => {

  const [todo, setTodo] = useState()

  return (
    <TodoContext.Provider value={{todo, setTodo}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
