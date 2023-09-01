import React from 'react'
import { FireIcon, HomeIcon } from '@heroicons/react/24/solid'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
const Sidebar = () => {
  return (
    <div className='w-2/12  h-[100vh] m-auto flex justify-center items-start '>
      <ul className='flex-col flex  w-full text-center '>
        <li className='flex gap-6 hover:bg-gray-200 cursor-pointer py-4 px-8 animate'>
          <HomeIcon className='w-6 h-6 ' />
          <p className='text-lg'>Home</p>
        </li>
        <li className='flex gap-6 hover:bg-gray-200 cursor-pointer py-4 px-8 animate'>
          <FireIcon className='w-6 h-6 ' />
          <p className='text-lg'>Trending</p>
        </li>
        <hr className='mt-4 mb-4' />
        <li className='flex gap-6 hover:bg-gray-200 cursor-pointer py-4 px-8 animate'>
          <HistoryOutlinedIcon className='w-6 h-6 ' />
          <p className='text-lg'>History</p>
        </li>
        <li className='flex gap-6 hover:bg-gray-200 cursor-pointer py-4 px-8 items-center animate'>
          <ThumbUpOutlinedIcon className='w-6 h-6 ' />
          <p className='text-lg'>Liked Videos</p>
        </li>
        <li className='flex gap-6 hover:bg-gray-200 cursor-pointer py-4 px-8 items-center animate'>
          <WatchLaterOutlinedIcon className='w-6 h-6 ' />
          <p className='text-lg'>Watch Later</p>
        </li>
        <li className='flex gap-6 hover:bg-gray-200 cursor-pointer py-4 px-8 items-center animate'>
          <PlaylistPlayIcon className='w-6 h-6' />
          <p className='text-lg'>Playlist</p>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
