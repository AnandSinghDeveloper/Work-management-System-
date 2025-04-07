import React, { useEffect, useRef, useState } from 'react';
import { IoChevronBackOutline, IoAddOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTodo } from '../Redux/Slice.js';
import { MdDeleteOutline } from "react-icons/md";
import { removeTodo } from '../Redux/Slice.js';
import { Link } from 'react-router';
import { h2 } from 'motion/react-client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';



const Details = () => {


  const [style , setStyle]= useState(false);

  const todos = useSelector(state=>state.todos)
  const [addtodostate,setAddtodostate]= useState("");
   const changeStyle= useRef(null);


useGSAP(()=>{
    if(style){
      gsap.to(changeStyle.current,{
        color:"#62BBF6",
        duration:.5,
        ease:"power1.inOut",
        textDecoration:"line-through"
    })
    }else{
      gsap.to(changeStyle.current,{
        color:"black",
        textDecoration : "none",
      })
    }
},[style])

 
  

   const dispatch= useDispatch()

   const handletodoSubmit=(e)=>{
     e.preventDefault();
      
      if(addtodostate){

        dispatch(addTodo(addtodostate))
        setAddtodostate("")
       }else{
         alert("Please enter todo")
       }

       console.log(todos);

   }
 


  return (
    <div className="h-screen  relative p-5">
     <img className='absolute inset-0 z-[-1] opacity-50 object-contain w-screen h-screen' src="https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148554232.jpg?t=st=1741604065~exp=1741607665~hmac=7b5c39d3d9f18427df8571322826d982f6e04f76bd2476f1cfaa78ec11ca748f&w=900" alt="" />
    
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Link to={"/dashboard"} className="flex justify-center items-center h-10 w-10 shadow-lg shadow-zinc-200 rounded-lg cursor-pointer hover:bg-[#7269df10] transition-colors">
            <IoChevronBackOutline className='text-2xl font-semibold text-[#7269df]' />
          </Link>
          <h1 className="text-2xl font-semibold text-[#2a2a2e] ml-4">Todo Details</h1>
        </div>
      </div>

      
      <div className= "  rounded-2xl z-10 bg-transparent   p-5 shadow-xl shadow-zinc-200">
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#2a2a2e90] mb-1">Date</label>
          <input
          name='date'
            type="text" 
            value="Thu 6 Feb"

           
            className="w-full text-base font-semibold text-[#2a2a2e90] outline-none"

          
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-[#2a2a2e90] mb-1">Title</label>
          <input
           name='title'
            type="text"
            value="Work"
            readOnly
            placeholder="Enter title"
            className="w-full text-4xl font-medium text-[#2a2a2e] outline-none"
           
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-[#2a2a2e90] mb-1">Time</label>
          <input
            type="text"
            value="10:00 am"
            readOnly
            className="w-full text-base font-semibold text-zinc-600 outline-none"
          />
        </div>
       
  
        <form onSubmit={(e)=>handletodoSubmit(e)} >
        <div className="">
          <h2 className="text-xl font-medium text-[#62bbf6] mb-4">Details:</h2>
          <div className="space-y-4">
           
             
            <div className="flex items-center justify-between bg-[#f5f5f9] rounded-lg p-3">
              <input
              name='details'
                value={addtodostate}
                onChange={(e)=>setAddtodostate(e.target.value)}
                type="text"
                placeholder="Enter description"
                className="w-full text-base font-base text-zinc-700 outline-none bg-transparent"
               
              />
              <button type="submit"
              
              className="flex items-center justify-center h-8 w-8 bg-[#62bbf6] rounded-lg hover:bg-[#4aa8e3] transition-colors">
                <IoAddOutline onClick={() => { }} className="text-white text-lg" />
              </button>
            </div>

           
            <div className=" overflow-y-auto webkit-scrollbar-none h-[30vh] flex flex-col gap-3 ">
            {
              todos.map((todo, inx )=>{
                return(
                  <div key={inx} className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                <p ref={changeStyle} >{todo.title} </p>
                
                <div className="flex items-center gap-3">
                <input  
                 
                  type="checkbox"

                  onChange={()=>setStyle(!style)}
                  className="w-5 h-5 cursor-pointer"
                />
                <button type="button"  className='px-.5 py-.5 bg-[#f5f5f9] rounded'>
                  <MdDeleteOutline className="text-2xl text-red-400 cursor-pointer"/>
                </button>

                </div>
               

              </div>
                )
              })
              
            }    
            </div>
            
          </div>
        </div>
        </form>
        </div>
    </div>
  );

}
export default Details;