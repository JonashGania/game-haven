import { useState } from 'react'
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

function ReadMore({ children }) {
    const [isReadMore, setIsReadMore] = useState(true);
    const text = children;

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            <p className='text-neutral-200 text-sm pt-4'>
                {isReadMore ? text.slice(0, 400) : text}   
            </p>
            <div className='relative w-full flex flex-col pt-2'>
                <button
                    onClick={toggleReadMore}
                    className='text-neutral-200 bg-neutral-700 hover:bg-neutral-600 px-3 py-3 w-full flex items-center justify-center gap-2'
                >
                    <span className=' font-light'>{isReadMore ? 'Show More' : 'Show Less'}</span>
                    {isReadMore ? 
                        <IoChevronDownOutline 
                            color='white'
                            size='1.5rem'
                            className='pt-1'
                        /> 
                    : 
                        <IoChevronUpOutline 
                            color='white'
                            size='1.5rem'
                            className='pt-1'
                        />
                    }
                </button>
                {isReadMore && (
                    <div className='absolute h-[100px] -top-24  w-full bg-white opaque-desc transition-all duration-300 ease-in'> </div>
                )}
            </div>

        </div>
    )
}

export default function GameDescription({ descrition }){
    return(
        <div>
            <ReadMore >
                {descrition}
            </ReadMore>
        </div>
    )
}

ReadMore.propTypes = {
    children: PropTypes.string.isRequired,
}