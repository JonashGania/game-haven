import React, {useEffect, useState} from 'react'
import { getGameDetails } from '../api/api'
import { IoIosAddCircle  } from "react-icons/io";
import { cutParagraph } from '../utils/cutParagraph';
import StarRatings from 'react-star-ratings';


export default function GameDetails() {
    const [game, setGame] = useState({});
    const [paragraph, setParagraph] = useState(null);
    const [screenshots, setScreenshots] = useState([]);

    useEffect(() => {
        async function fetchGameDetails() {
            try {
                const { results, screenshots } = await getGameDetails();
                setGame(results)
                setParagraph(cutParagraph(results.description_raw))
                setScreenshots(screenshots)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchGameDetails()
    }, [])

    return (
        <div className='w-full min-h-screen bg-[rgb(18,18,18)] fixed top-0 left-0 z-50'>
            <div className='max-w-5xl mx-auto'>
                <div className='pt-24'>
                    <h1 className='text-white text-3xl font-medium'>{game.name}</h1>
                    <div className='flex items-center gap-2'>
                        <StarRatings
                            rating={game.rating}
                            starRatedColor="white"
                            starEmptyColor="rgb(74,74,74)"
                            starDimension='20px'
                            starSpacing='1px'
                            numberOfStars={5}
                        />
                        <span className='py-1 px-2 rounded-md bg-[rgb(54,54,54)] text-neutral-400 text-sm'>{game.rating}</span>
                    </div>
                    <div className='flex gap-8'>
                        <div className='w-[650px]'>
                            <p className='text-neutral-200 text-sm'>{paragraph}</p>
                        </div>
                        <div className='flex-1 px-8 flex flex-col gap-3'>
                            <div className='w-full flex items-center justify-between gap-4 pb-1 border-b border-neutral-800'>
                                <span className='text-neutral-400'>Developer</span>
                                {game.developers?.slice(0,1).map((name) => (
                                    <h3 className='text-neutral-200 text-sm' key={name.id}>{name.name}</h3>
                                ))}
                            </div>
                            <div className='w-full flex items-center justify-between gap-4 pb-1 border-b border-neutral-800'>
                                <span className='text-neutral-400'>Publisher</span>
                                {game.publishers?.map((name) => (
                                    <h3 className='text-neutral-200 text-sm' key={name.id}>{name.name}</h3>
                                ))}
                            </div>
                            <div className='w-full flex items-center justify-between gap-4 pb-1 border-b border-neutral-800'>
                                <span className='text-neutral-400'>Released</span>
                                <h3 className='text-neutral-200 text-sm'>{game.released}</h3>
                            </div>
                            <div className='w-full flex items-center justify-between gap-4 pb-1 border-b border-neutral-800'>
                                <span className='text-neutral-400'>Metacritic</span>
                                <h3 className='text-neutral-200 text-sm'>{game.metacritic}</h3>
                            </div>
                            <button className='py-1 flex items-center gap-2 justify-center border border-neutral-200 rounded-sm hover:bg-[rgba(255,255,255,0.2)]'>
                                <IoIosAddCircle size='1.3rem' color='white'/>
                                <p className='text-xs uppercase text-neutral-200 font-medium'>Add to wishlist</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
