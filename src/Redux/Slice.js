 import { createSlice } from "@reduxjs/toolkit";
 import { nanoid } from "@reduxjs/toolkit";
 import { createAsyncThunk } from "@reduxjs/toolkit";

 export const todoSlice = createSlice({
      name: "todo",
      initialState :{
        todos: [
               {
                 id: "1",
                 title: "Learn Redux",
               }

               ]
         }, 
      reducers: {
        addTodo: (state, action) => {
          const todo = {
            id: nanoid(),
            title: action.payload,
          }
          state.todos.push(todo)
        },
        removeTodo: (state, action) => {
          state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
          state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              todo.title = action.payload.title
              return todo
            } else {

              return todo
            }
          })
              
        },

      },
     
 });

 export const { addTodo, removeTodo, editTodo } = todoSlice.actions ; 
 export default todoSlice.reducer ;