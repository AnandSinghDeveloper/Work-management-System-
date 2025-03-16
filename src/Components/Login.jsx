import React, { useRef } from 'react'
import { Link } from 'react-router'
import TodoContext from '../context/CreteContext'
import { useState } from 'react'

import { useNavigate } from 'react-router'

const Login = () => {
  // const {setTodo}=React.useContext(TodoContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleDashbordref =  useRef(false)

 const Navigate = useNavigate()
 const handleSubmit = (e) => {
   e.preventDefault();
   
   const user = { email, password };

   console.log(user);
  

  //  setTodo(user);
    
   Navigate('/dashboard')
  

   setEmail('');
   setPassword('');
  

 }  

  return (
    <div >
    <div className="min-h-screen flex items-center justify-center relative">
     <img className="absolute inset-0 opacity-30 object-contain w-full h-full" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1741602108~exp=1741605708~hmac=9e7c90a20388c9ee9e6fa406be424f59a7c60e07bed5145ab2324d563d3533b9&w=900" alt="" />
    <div className=" p-8 rounded-lg shadow-lg w-80 h-120 max-w-md z-10 bg-transparent">
   <h2 className="text-2xl font-bold mb-6 text-start text-slate-700">
   Login
   </h2>
   <form onSubmit={(e) => handleSubmit(e)} >
    
       
     
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
         Email
       </label>
       <input
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="email"
         required
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         type="email"
         placeholder="Email"
       />
     </div>
     <div className="mb-6">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
         Password
       </label>
       <input
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="password"
         required
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         type="password"
         placeholder="Password"
       />
     </div>

     <div className="flex items-center flex-col gap-3 ">
       <button 
     
       type='submit'
         className="bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-24 rounded focus:outline-none focus:shadow-outline"
         
       >
         Login
       
       </button>
       
       
     </div>
    
   </form>
   
 </div>
    </div>
 
</div>
  )
}

export default Login
