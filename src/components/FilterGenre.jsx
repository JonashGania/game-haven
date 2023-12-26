import { useState, useEffect } from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { getGenreList } from '../api/api';
import { useNavigate } from 'react-router-dom';
import SkeletonFilterGenre from './SkeletonFilterGenre';
import PropTypes from 'prop-types';


function Genre({ handleClose }){
    const [genres, setGenre] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchGenres(){
          try {
            setIsLoading(true);
            const { genreList } = await getGenreList();
            setGenre(genreList);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching data', error)
          }
        }
    
        fetchGenres();
    }, [])

    const handleGenreNavigate = (genreName) => {
        navigate(`/browse/${genreName}`);
        handleClose();
      }


    return (
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
                {isLoading ? (
                    Array.from({ length: 19 }).map((_, index) => (
                        <SkeletonFilterGenre key={index}/>
                    ))
                ) : (
                    genres.map((genre) => (
                        <li
                            key={genre.id} 
                            className='flex items-center gap-3 cursor-pointer'
                            onClick={() => handleGenreNavigate(genre.slug)}
                        >
                            <img src={genre.image_background} alt='genre image' className='w-[60px] h-[40px] rounded-lg'/>
                            <span className='text-neutral-300 text-xs mobile:text-sm'>{genre.name}</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default function FilterGenre() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className='relative'>
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
            {isOpen && <Genre handleClose={handleClose}/>}
        </div>
    )
}


Genre.propTypes = {
    handleClose: PropTypes.func.isRequired,
}