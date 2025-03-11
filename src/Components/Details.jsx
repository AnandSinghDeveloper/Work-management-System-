import React from 'react';
import { IoChevronBackOutline, IoAddOutline } from "react-icons/io5";

const Details = () => {
  return (
    <div className="h-screen  relative p-5">
     <img className='absolute inset-0 z-[-1] opacity-50 object-contain w-screen h-screen' src="https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148554232.jpg?t=st=1741604065~exp=1741607665~hmac=7b5c39d3d9f18427df8571322826d982f6e04f76bd2476f1cfaa78ec11ca748f&w=900" alt="" />
    
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="flex justify-center items-center h-10 w-10 shadow-lg shadow-zinc-200 rounded-lg cursor-pointer hover:bg-[#7269df10] transition-colors">
            <IoChevronBackOutline className='text-2xl font-semibold text-[#7269df]' />
          </div>
          <h1 className="text-2xl font-semibold text-[#2a2a2e] ml-4">Todo Details</h1>
        </div>
      </div>

      
      <form className= " h-[90%] rounded-2xl z-10 bg-transparent   p-5 shadow-xl shadow-zinc-200">
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#2a2a2e90] mb-1">Date</label>
          <input
            type="text"
            value="Thu 6 Feb"
            readOnly
            className="w-full text-base font-semibold text-[#2a2a2e90] outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-[#2a2a2e90] mb-1">Title</label>
          <input
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

        <div className="">
          <h2 className="text-xl font-medium text-[#62bbf6] mb-4">Details:</h2>
          <div className="space-y-4">
           
            <div className="flex items-center justify-between bg-[#f5f5f9] rounded-lg p-3">
              <input
                type="text"
                placeholder="Enter description"
                className="w-full text-base font-base text-zinc-700 outline-none bg-transparent"
              />
              <button type="button" className="flex items-center justify-center h-8 w-8 bg-[#62bbf6] rounded-lg hover:bg-[#4aa8e3] transition-colors">
                <IoAddOutline onClick={() => { }} className="text-white text-lg" />
              </button>
            </div>

           
            <div className=" overflow-y-auto webkit-scrollbar-none h-50 flex flex-col gap-3 ">
            <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                <p className="text-base text-zinc-700">Complete project proposal</p>
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
             
              <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                <p className="text-base text-zinc-700">Complete project proposal</p>
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                <p className="text-base text-zinc-700">Complete project proposal</p>
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>

              
              <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                <p className="text-base text-zinc-700">Call client for feedback</p>
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;