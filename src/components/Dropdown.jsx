import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

function DropdownLinks(){
    return (
        <div className='max-w-6xl bg-[rgb(34,34,34)] rounded-md w-[300px] absolute top-8 -left-[130px]'>
            <div className='flex flex-col gap-2 py-6 px-8 mx-4'>
                <div className='pb-3 border-b border-neutral-600'>
                    <NavLink to='/' className='text-neutral-300'>
                        Home
                    </NavLink>
                </div>
                <div className='pb-3 border-b border-neutral-600'>
                    <NavLink to='/browse' className='text-neutral-300'>
                        Browse
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState('')
    const location = useLocation();
    const dropdownRef = useRef();


    useEffect(() => {
        const path = location.pathname.split('/')[1];
        setActivePage(path);

    }, [location.pathname])


    useEffect(() => {
        const handleClickOutside = (e) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleDropdownOpen = () => {
        setIsOpen(!isOpen);
    }



    return (
      <div className='relative w-full' ref={dropdownRef}>
        <button 
            onClick={handleDropdownOpen} 
            className='flex items-center gap-2'
        >
            <span className='text-neutral-200 text-sm capitalize'>{activePage || 'Home'}</span>
            {isOpen ? (
                <IoChevronUpOutline 
                    color='white'
                    size='1.5rem'
                    className='pt-1'
                />
            ) : (
                <IoChevronDownOutline 
                    color='white'
                    size='1.5rem'
                    className='pt-1'
                />
            )}
        </button>
        {isOpen && (
            <DropdownLinks />
        )}
      </div>
    )
  }
  