import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import GameLists from '../components/GameLists'
import WishList from '../components/WishList'

export default function Browse() {


  return (
    <div className='bg-[rgb(18,18,18)] w-full min-h-screen'>
      <Header />
      <div className='max-w-6xl mx-auto pt-8 flex gap-4 px-4'>
        <Sidebar />
        <GameLists />
      </div>
      <WishList />
    </div>
  )
}
