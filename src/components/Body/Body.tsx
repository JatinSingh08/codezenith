import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import VideContainer from '../Videos/VideContainer'

const Body = () => {
  return (
    <div className='flex gap-4'>
      <Sidebar />
      <VideContainer />
    </div>
  )
}

export default Body
