import React, { useState } from 'react';
import TodoContext from '../context/CreteContext';

import { Navigate, useNavigate } from 'react-router';

const SignUp = () => {
  
  // onst {setTodo}=React.useContext(TodoContext)
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const userSignUp = { email, password, name };

    console.log(userSignUp);

    // setTodo(userSignUp);

    setEmail('');
    setPassword('');
    setName('');
    Navigate('/dashboard')

  }
      

   
 

  return (
    <div >
         <div className="min-h-screen flex items-center justify-center relative">
          <img className="absolute inset-0 opacity-30 object-contain w-full h-full" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1741602108~exp=1741605708~hmac=9e7c90a20388c9ee9e6fa406be424f59a7c60e07bed5145ab2324d563d3533b9&w=900" alt="" />
         <div className=" p-8 rounded-lg shadow-lg w-80 h-120 max-w-md z-10 bg-transparent">
        <h2 className="text-2xl font-bold mb-6 text-start text-slate-700">
        SignUp
        </h2>
        <form onSubmit={(e) => handleSubmit(e)} >
         
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center flex-col gap-3 ">
            <button 

              className="bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-24 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SignUP
            
            </button>
            
            
          </div>
        </form>
      </div>
         </div>
      
    </div>
  );
};

export default SignUp;

