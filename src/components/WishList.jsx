import React from 'react'

export default function WishList({ isOpen, onClose }) {
    return (
        <div 
            className={`fixed top-0 left-0 w-full h-screen z-30 ${isOpen ? 'visible bg-[rgba(0,0,0,0.6)]' : 'invisible'}`}
            onClick={onClose}
        >
            <div 
                className={`w-[400px] h-full bg-neutral-800 right-0 fixed px-8 py-4 transition-all duration-200 ease-in  ${isOpen ? 'translate-x-0' : 'translate-x-40'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-between items-center'>
                    <h1 className='text-white font-semibold text-2xl'>0 Games</h1>
                    <button className=' text-red-500 py-1 px-3 border border-red-500 rounded-md'>Clear</button>
                </div>
            </div>
        </div>
    )
}
