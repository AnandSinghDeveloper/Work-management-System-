import React from 'react'
import Task from './Task'
import { GoPlus } from "react-icons/go";

const Dashboard = () => {
  return (
    <div className='w-screen h-screen px-5  '>

      <div className='relative'>
         <div className='pt-10 '>
         <h4 className='text-[gray] font-medium text-base '> Thu 6 feb</h4>
        <h1 className='text-zinc-800 font-[900] text-3xl'>Today TO Do's :</h1>
        </div>
      <div className='w-full h-[70vh] mt-5  overflow-y-auto'>
        <Task />
        

        
        
        
        <button className=  'px-5 py-3  mt-3 w-full h-25 bg-zinc-200  shadow-xl rounded-2xl flex justify-center items-center'>
         <GoPlus className='text-zinc-400  h-16 w-16 '/>
        </button>
      </div>
      </div>
    <div className='absolute bg-[url(https://img.freepik.com/free-vector/colorful-gradient-background-modern-design_361591-4281.jpg?t=st=1741512755~exp=1741516355~hmac=7ff7195407ee707083067fa4d50f6d3b5c86b5b5f19b1c78f841e0558a7449f3&w=740)] bg-cover w-full h-screen bg-no-repeat bg-bg-center top-0 left-0 z-[-1]  '>
      
    </div>

      
    </div>
  )
}

export default Dashboard
