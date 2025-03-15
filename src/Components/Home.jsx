import React from 'react'
import { Link } from 'react-router'
import TodoContext from '../context/CreteContext'


const Home = () => {

  const { todo , setTodo } = React.useContext(TodoContext)
 
 
  
  return (
    <div className='flex flex-col pt-10 justify-start items-center h-screen'>
      <div >
        <img className=' w-full h-cover  ' src="https://img.freepik.com/free-vector/woman-checking-giant-check-list_23-2148099800.jpg?t=st=1741672911~exp=1741676511~hmac=895f6c1a87e4f9daa6ff7a2a35ea93debe622ceae24d93ea3eb8ff59477d2ae2&w=900" alt="image" />
      </div>

    <div className='flex flex-col justify-center gap-5 items-center h-full'>
      <div className=' w-3/4 text-center'>
      <h1 className=' text-2xl font-semibold text-blue-700'>Start your day a Smile </h1 >
      <p className='  font-normal    text-[#01b7ff]'>Plan your day ahead it's easiesr than you think</p>
      </div>
        
          <Link to="/Login"  className= ' bg-white flex justify-center items-center text-[#06357c] active:bg-[#0195ff] border border-[#06087c] w-40 h-10 shadow-md  active:text-white  rounded-lg'>Login</Link>

          <Link to="/SignUp"  className= ' bg-white flex justify-center items-center text-[#06357c] active:bg-[#0195ff] border border-[#06087c] w-40 h-10 shadow-md  active:text-white  rounded-lg'>SignUp</Link>
         
         
           
    </div>

    </div>
  )
}

export default Home
