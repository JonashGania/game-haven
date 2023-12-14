import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchGames from './SearchGames'
import { MdOutlineAddBox } from "react-icons/md";

export default function Header() {
  return (
    <header className='flex items-center justify-between h-24'>
        <div>
            <Link to='/'>
                <img src="/logo.svg" alt="avatar"/>
            </Link>
        </div>
        <SearchGames />
        <div className='flex items-center gap-5'>
            <div className='flex items-center gap-9'>
                <NavLink to='/' className='text-neutral-300'>
                    Home
                </NavLink>
                <NavLink to='/Browse' className='text-neutral-300'>
                    Browse
                </NavLink>
            </div>
            <div className='w-[2px] bg-neutral-300 h-6'></div>
            <div className='cursor-pointer'>
                <MdOutlineAddBox color='rgb(212,212,212)' size='1.8rem'/>
            </div>
        </div>
    </header>
  )
}
