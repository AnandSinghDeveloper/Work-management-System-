import { time } from 'motion';
import React from 'react'
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';

const Dashboard = () => {
  const taskarray = [{ id: 1, title: "Task1", completed: false ,time: "10:00am" }, { id: 2, title: "Task2" , completed: false ,time: "1:00pm" }, { id: 3, title: "Task3" , completed: false, time: "2:00pm" }, { id: 4, title: "Task4" , completed: false ,time: "3:00pm" }, { id: 5, title: "Task5" , completed: false ,time: "4:00pm" }]

  console.log(taskarray)
 
 
  return (
    <div className='w-screen h-screen px-5  '>

      <div className='relative'>
         <div className='pt-10 '>
         <h4 className='text-[blue] font-medium text-base '> {new Date(Date.now()).toLocaleString()}</h4>
        <h1 className='text-blue-800 font-[900] text-3xl'>Today TO Do's :</h1>
        </div>
      <div className='w-full max-h-[70%] rounded-lg py-5  overflow-y-auto flex flex-wrap justify-start  gap-2 '> 

          {
            taskarray.map((Task ,index)=>{return(
              <Link key={index} to={`/Details`}  className=' px-5 py-3  mt-3 w-[45%] h-{30%}   active:bg-blue-400  shadow-xl rounded-lg  '>
              <div className=' flex justify-between items-center w-full'>
               
              <h5 className='text-[black] active:text-white font-medium text-base '> {Task.id}</h5>
                 <h5 className='text-[black] active:text-white font-medium text-base '> {Task.time}</h5>
                 
              </div>
              <div>
              <h2 className='text-[black] active:text-white font-medium text-xl mt-4 '>{Task.title}</h2>
              </div>
           </Link>

           
           
            )})
          }
    
        


        
        
        
        <button className=  'px-5 py-3  mt-3 w-40 h-25 bg-transparent   shadow-xl rounded-lg flex justify-center items-center'>
         <GoPlus className='text-zinc-400  h-16 w-16 '/>
        </button>
      </div>
      </div>
    <div className='absolute bg-[url(https://img.freepik.com/free-vector/completed-concept-illustration_114360-2945.jpg?t=st=1741605177~exp=1741608777~hmac=9f54cfd5354477b611a5fcfd668776ca2d3a256fa68fc8879b441f5e129ebfb3&w=900)] bg-contain opacity-50  w-full h-screen bg-no-repeat bg-center top-0 left-0 z-[-1]  '>
      
    </div>

      
    </div>
  )
}

export default Dashboard
