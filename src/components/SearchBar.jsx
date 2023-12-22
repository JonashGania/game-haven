import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";

export default function SearchGames() {
  return (
    <div   
        className='w-[500px] flex items-center gap-3 relative'>   
        <div className='absolute left-3'>
            <IoIosSearch 
                color='rgb(161,161,170)' 
                size='1.3rem'
            />
        </div>
        <input 
            type="text" 
            placeholder='Seach Games...'
            className='bg-[rgb(54,54,54)] focus:bg-white py-3 px-4 pl-11 outline-none w-full rounded-3xl text-sm focus:text-black text-neutral-400 placeholder:text-zinc-400 placeholder:text-sm'
        />
    </div>
  )
}
