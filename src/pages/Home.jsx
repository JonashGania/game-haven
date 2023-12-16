import React from 'react'
import Header from '../components/Header'
import HomeSwiper from '../components/HomeSwiper'
import StoreTopGames from '../components/StoreTopGames'

export default function Home() {
  return (
    <div className='bg-[rgb(18,18,18)] w-full min-h-screen'>
        <Header />
        <div className='max-w-[900px] mx-auto'>
          <HomeSwiper />
          <StoreTopGames />
        </div>
    </div>
  )
}
