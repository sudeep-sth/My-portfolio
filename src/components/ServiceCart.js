import React from 'react'

export const ServiceCart = ({icon, title, disctiption, button}) => {
  return (
    <div className='w-96 h-72 rounded-xl shadow-[0px_0px_50px_rgba(0,0,0,0.3)] p-5 py-7 hover:scale-105 transition-all'>
<div className=' '>{icon}</div>
<h1 className='text-[20px] font-medium'>{title}</h1>
<p className='flex justify-evenly w-[330px] h-[100px] text-[10px]  font-normal'>{disctiption}</p>
<div className='w-28 text-black bg-[#0ef] flex justify-center rounded-full p-2 shadow-[1px_0px_10px_#0ef] hover:text-white hover:shadow-[0px_0px_25px_#0ef]  transition-all'>{button}</div>
    </div>
  )
}
