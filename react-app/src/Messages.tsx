import React from 'react'


export default function Messages() {
  const name = "Rilwan"
  return (
    name ? 
    <div className="font-bold text-white bg-[rgba(0,0,0,0.4)] p-4 rounded-xl cursor-pointer">Hello, Good Morning <span className='underline'>{name}</span></div>
    : <div>Good Morning</div>
  )
}
