import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

function DropdownLinks(){
    return (
        <div className='max-w-6xl bg-[rgb(54,54,54)] mx-4 absolute'>
            <div className='flex flex-col py-4 px-4 w-full'>
                <div className='pb-4 border-b border-neutral-600'>
                    <NavLink to='/' className='text-neutral-300'>
                        Home
                    </NavLink>
                </div>
                <div className='pb-4 border-b border-neutral-600'>
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
    

    const handleDropdownOpen = () => {
        setIsOpen(true);
    }

    return (
      <div className='relative w-full'>
        <button onClick={handleDropdownOpen} className='flex items-center gap-2'>
            <span className='text-neutral-200'>Home</span>
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
  