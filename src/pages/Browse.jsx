import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import GameLists from '../components/GameLists'

export default function Browse() {
  return (
    <div className='bg-[rgb(18,18,18)] w-full min-h-screen'>
      <Header />
      <div className='max-w-6xl mx-auto pt-8 flex gap-4'>
        <Sidebar />
        <GameLists />
      </div>
    </div>
  )
}
