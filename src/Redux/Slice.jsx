 import { createSlice } from "@reduxjs/toolkit";

 export const todoSlice = createSlice({
   name: "todos",
   initialState: [],
   reducers: {
     addTodo: (state, action) => {
       state.push(action.payload);
       console.log(state);
     },
     removeTodo: (state, action) => {
       return state.filter((todo) => todo.id !== action.payload);
        
     },
     updateTodo: (state, action) => {
       return state.map((todo) =>{
         if (todo.id === action.payload.id) {
           return {
             ...todo,
             ...action.payload

           }
         }
        })
     },
     toggleTodo: (state, action) => {
       return state.map((todo) => {
         if (todo.id === action.payload) {
           return {
             ...todo,
             completed: !todo.completed
           }
         }
       })
     },
     deleteTodo: (state, action) => {
       return state.filter((todo) => todo.id !== action.payload)
       
     },
   }
 })