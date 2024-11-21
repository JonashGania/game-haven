import { useState } from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { data } from '../constants/constant';

export default function FilterGenre({ onClickGenre }) {
    const [isOpen, setIsOpen] = useState(false);
    const genres = data.genres

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleGenreSelect = (genre) => {
        onClickGenre(genre);
        setIsOpen(false);
    }

    return (
        <div className='relative block sidebar:hidden pb-4'>
            <button
                className='flex items-center gap-2 relative cursor-pointer' 
                onClick={handleOpen}
            >
                <span className='text-neutral-300 hover:text-neutral-200 text-lg'>Genres</span>
                <CgMenuGridO 
                    size='1.3rem' 
                    color='white'
                />
            </button>
            {isOpen && (
                <div className='bg-[rgb(34,34,34)] fixed top-0 left-0 w-full h-screen py-4 px-4 z-30 cursor-default'>
                    <div className='flex justify-between pb-4'>
                        <h3 className='text-neutral-200 text-lg font-semibold'>Genre</h3>
                        <button onClick={handleClose}>
                            <IoMdClose 
                                size='1.5rem' 
                                color='white'
                            />
                        </button>
                    </div>
                    <ul className='grid grid-cols-2 gap-3 gap-y-5'>
                        {genres.map((genre, index) => (
                            <li
                                key={index} 
                                className='flex items-center gap-3 cursor-pointer'
                                onClick={() => handleGenreSelect(genre.slug)}
                            >
                                <span className='text-neutral-300 text-xs mobile:text-sm'>{genre.genre}</span>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            )}
        </div>
    )
}
