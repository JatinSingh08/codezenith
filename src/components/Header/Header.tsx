import React, { JSX } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'


const Header = () => {
  return (
    <div className='shadow-lg p-4 grid grid-flow-col'>
      <div className='col-span-1'>
        <h1 className='text-2xl font-semibold text-gray-700'>Code<span className='text-blue-500'><span className='text-3xl  font-bold'>Z</span>enith</span></h1>
      </div>
      <div className='col-span-10 flex items-center justify-center'>
        <input type="search" className='border border-gray-300 focus:border-blue-500 outline-none rounded-l-full h-8 px-4 w-5/12' placeholder='Search' />
        <button className='border-gray-300 border rounded-r-full px-2 h-8'>search</button>
      </div>
      <div className='col-span-1 flex items-center justify-center gap-6'>
        <UserCircleIcon className='w-8 h-8' />
        <button className='h-8 px-5 bg-blue-300 drop-shadow-sm rounded-md'>Login</button>
      </div>
    </div>
  )
}

export default Header
