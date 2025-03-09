import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col pt-10 justify-start items-center h-screen'>
      <div >
        <img className=' w-full h-cover  ' src="https://img.freepik.com/free-vector/notes-concept-illustration_114360-839.jpg?t=st=1741504621~exp=1741508221~hmac=cde849672d2072df9aaab721cf1b49a94970dc84b13159b7cf6c0452b9e8f524&w=900" alt="image" />
      </div>

    <div className='flex flex-col justify-center gap-5 items-center h-full'>
      <div className=' w-3/4 text-center'>
      <h1 className=' text-2xl font-semibold text-[#527C06]'>Start your day a Smile </h1 >
      <p className='  font-normal    text-[#AAFF01]'>Plan your day ahead it's easiesr than you think</p>
      </div>
        
          <button  className= ' bg-white text-[#527C06] active:bg-[#AAFF01] border border-[#527C06] w-40 h-10 shadow-md  active:text-white  rounded-lg'>SignUp</button>
          <button  className= ' bg-white text-[#527C06] active:bg-[#AAFF01] border border-[#527C06] w-40 h-10 shadow-md  active:text-white  rounded-lg'>Login</button>
         
           
    </div>

    </div>
  )
}

export default Home
