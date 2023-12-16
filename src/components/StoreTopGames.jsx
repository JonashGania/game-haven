import React from 'react'
import SteamGamesSwiper from './SteamGamesSwiper'

export default function StoreTopGames() {
  return (
    <div className='pt-16 pb-36 max-w-[900px] mx-auto'>
        <h1 className='text-center text-white text-2xl font-medium'>Top Games on Stores!</h1>
        <SteamGamesSwiper />
    </div>
  )
}
