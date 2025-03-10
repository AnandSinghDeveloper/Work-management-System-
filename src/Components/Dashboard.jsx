import React from 'react'

import { GoPlus } from "react-icons/go";

const Dashboard = () => {
  const taskarray = [{ id: 1, title: "Task1", completed: false ,time: "10:00am" }, { id: 2, title: "Task2" , completed: false ,time: "1:00pm" }, { id: 3, title: "Task3" , completed: false, time: "2:00pm" }, { id: 4, title: "Task4" , completed: false ,time: "3:00pm" }, { id: 5, title: "Task5" , completed: false ,time: "4:00pm" }]
  return (
    <div className='w-screen h-screen px-5  '>

      <div className='relative'>
         <div className='pt-10 '>
         <h4 className='text-[gray] font-medium text-base '> Thu 6 feb</h4>
        <h1 className='text-zinc-800 font-[900] text-3xl'>Today TO Do's :</h1>
        </div>
      <div className='w-full max-h-[70%] rounded-lg py-5  overflow-y-auto flex flex-wrap justify-start  gap-2 '> 

          {
            taskarray.map((Task ,index)=>{return(
              <div key={index} className=' px-5 py-3  mt-3 w-40 h-25 bg-zinc-100 active:bg-zinc-400  shadow-md rounded-lg  '>
              <div className=' flex justify-between items-center w-full'>
               
              <h5 className='text-[black] active:text-white font-medium text-base '> {Task.id}</h5>
                 <h5 className='text-[black] active:text-white font-medium text-base '> {Task.time}</h5>
                 
              </div>
              <div>
              <h2 className='text-[black] active:text-white font-medium text-xl '>{Task.title}</h2>
              </div>
           </div>

           
           
            )})
          }
    
        


        
        
        
        <button className=  'px-5 py-3  mt-3 w-40 h-25 bg-zinc-200  shadow-xl rounded-lg flex justify-center items-center'>
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
