import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchGames from './SearchBar'
import WishList from './WishList';
import { MdOutlineAddBox } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
    const [openWishlist, setOpenWishlist] = useState(false);

    const handleOpenWishlist = () => {
        setOpenWishlist(true);
    }

    const handleCloseWishlist = () => {
        setOpenWishlist(false);
    }

  return (
    <header className='sticky top-0 z-20 h-24 bg-[rgb(18,18,18)] w-full'>
        <nav className='flex items-center justify-between gap-4 py-4 max-w-6xl mx-auto px-4'>
            <div>
                <Link to='/'>
                    <img src="/logo.svg" alt="avatar"/>
                </Link>
            </div>
            <SearchGames />
            <div className='flex items-center gap-3 tablet:gap-5'>
                <div className='hidden tablet:flex items-center gap-9'>
                    <NavLink to='/' className='text-neutral-300'>
                        Home
                    </NavLink>
                    <NavLink to='/browse' className='text-neutral-300'>
                        Browse
                    </NavLink>
                </div>
                <button className='block tablet:hidden'>
                    <IoIosSearch 
                        color='rgb(212,212,212)' 
                        size='1.5rem'
                    />
                </button>
                <div className='w-[2px] bg-neutral-300 h-6'></div>
                <button onClick={handleOpenWishlist}>
                    <MdOutlineAddBox color='rgb(212,212,212)' size='1.8rem'/>
                </button>
            </div>
        </nav>
        <WishList isOpen={openWishlist} onClose={handleCloseWishlist}/>
    </header>
  )
}
