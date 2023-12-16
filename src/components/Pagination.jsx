import React from 'react'
import { FaChevronRight, FaChevronLeft  } from "react-icons/fa6";


export default function PaginationButton({ isFirst, isLast, handlePrevious, handleNext }) {
  return (
    <div className='flex items-center gap-2'>
        <button 
            className={`bg-[rgb(44,44,44)] hover:bg-[rgb(54,54,54)] px-2 py-2 rounded-[50%] ${isFirst ? 'opacity-50 cursor-default hover:bg-[rgb(44,44,44)]' : ''}`}
            onClick={handlePrevious}
        >
            <FaChevronLeft color='white' size='0.9rem'/>
        </button>
        <button 
            className={`bg-[rgb(44,44,44)] hover:bg-[rgb(54,54,54)]  px-2 py-2 rounded-[50%] ${isLast ? 'opacity-50 cursor-default hover:bg-[rgb(44,44,44)]' : ''}`}
            onClick={handleNext}
        >
            <FaChevronRight color='white' size='0.9rem'/>
        </button>
    </div>
  )
}
