import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import VideoContainer from '../Videos/VideoContainer'

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <VideoContainer />
    </div>
  )
}

export default Body
