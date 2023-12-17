import React from 'react'
import SteamGamesSwiper from './SteamGamesSwiper'
import PSGamesSwiper from './PSGamesSwiper'
import XboxGamesSwiper from './XboxGamesSwiper'

export default function StoreTopGames() {
  return (
    <div className='pt-16 pb-36 max-w-[900px] mx-auto'>
        <h1 className='text-center text-white text-2xl font-medium pb-10'>Top Games on Stores!</h1>
        <div className='flex flex-col gap-10'>
          <SteamGamesSwiper />
          <PSGamesSwiper />
          <XboxGamesSwiper />
        </div>
    </div>
  )
}
