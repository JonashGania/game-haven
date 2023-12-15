import React from 'react'
import Header from '../components/Header'
import HomeSwiper from '../components/HomeSwiper'

export default function Home() {
  return (
    <div className='bg-[rgb(18,18,18)] w-full min-h-screen py-2'>
        <div className=' max-w-6xl mx-auto '>
          <Header />
          <HomeSwiper />
        </div>
    </div>
  )
}
