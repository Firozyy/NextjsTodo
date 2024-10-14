import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-20 h-10'>
       <div className='font-extrabold text-xl'>ToDo</div>
       <div className='flex gap-4 font-semibold '>
        <p>Home</p>
        <p>Products</p>
        <p>Contact</p>
        <p>About</p>
       </div>
    </div>
  )
}

export default Navbar