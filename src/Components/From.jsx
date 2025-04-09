import React from 'react'
import { Link } from 'react-router';
import { IoChevronBackOutline } from "react-icons/io5";
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const From = () => {

  const [title,setTitle]= useState("");
  const [date,setDate]= useState("");
  const [time, setTime]= useState("");
  const [addtodostate,setAddtodostate]=useState(null)


   const handleSubmit=(e)=>{
     e.preventDefault();

     const newTodo = {
      id: nanoid(),
      title:title,
      date:date,
      time:time
    };
  
    setAddtodostate(newTodo);

     setDate("");
     setTitle("");
     setTime("");
     

   }

  return (
    <div className='w-screen h-screen p-10 flex justify-center items-center   '> 
    
      <img className=' absolute z-[-1] opacity-40 object-contain w-90 object-center '  src="https://img.freepik.com/free-vector/preferences-concept-illustration_114360-1384.jpg?t=st=1744175561~exp=1744179161~hmac=f31aca1b81741b0884838e8dd8b896e51edb329dd0d36e11ea9f150cf30cc889&w=826" alt="" />
    <form onSubmit={(e)=>{handleSubmit(e)}} className='w-90 h-full border-zinc-300 rounded-lg p-5 shadow-md shadow-zinc-200'>
            <Link to={"/dashboard"} className="flex justify-center items-center h-7 w-7 shadow-lg shadow-zinc-200 rounded-lg cursor-pointer hover:bg-[#7269df10] transition-colors">
            <IoChevronBackOutline className='text-2xl font-semibold text-[#007CFF]' />
          </Link>
       <h1 className='text-3xl font-semibold text-[#007CFF] pt-3 '>Add Todo Details </h1>

     <div className='flex flex-col gap-3 pt-7 '>
      <div className='flex flex-col'>
      <label htmlFor="title" className='text-lg font-medium pl-3  text-[#5da0f1] '>Title</label>
      <input
      value={title}
      onChange={(e)=>{setTitle(e.target.value)}}
      required
      placeholder='Enter title' 
      id='title' className=' border-gray-400 border  placeholder:text-[#80b8e1] rounded py-1 px-3  '  
      type="text" />
      </div>
      <div className='flex flex-col'>
      <label htmlFor="date" className='text-lg font-medium pl-3  text-[#5da0f1] '>Date</label>
      <input
       value={date}
       onChange={(e)=>{setDate(e.target.value)}}
       required 
       placeholder='Enter title'
       id='date'
       className=' border-gray-400 border  text-zinc-600 text-[15px] uppercase  placeholder:text-[#E0FF95] rounded py-1 px-3  ' 
      type="date"  /> 
      </div>
      <div className='flex flex-col'>
      <label htmlFor="time" className='text-lg font-medium pl-3  text-[#5da0f1] '>Time</label>
      <input
       value={time}
       onChange={(e)=>{setTime(e.target.value)}}
       required 
       placeholder='Enter title'
       id='time'
       className=' border-gray-400 border  text-zinc-600 text-[15px] uppercase  placeholder:text-[#E0FF95] rounded py-1 px-3  ' 
      type="time"  /> 
      </div>
    


     </div>

     <button type='submit' className=' flex justify-center items-center py-1 px-3 w-full bg-blue-400 rounded-md text-lg font-medium  text-white mt-15  '>Add Todo</button>

    </form>
      
    </div>
  )
}

export default From
