import React, {useEffect, useState} from 'react'
import { getGameDetails } from '../api/api'
import { IoIosAddCircle  } from "react-icons/io";
import { cutParagraph } from '../utils/cutParagraph';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams, useNavigate } from 'react-router-dom';
import { format, isValid, parseISO } from "date-fns";
import StarRatings from 'react-star-ratings';
import SkeletonGameDetails from './SkeletonGameDetails';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


export default function GameDetails() {
    const [game, setGame] = useState({});
    const [paragraph, setParagraph] = useState(null);
    const [screenshots, setScreenshots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { gameId } = useParams();
    const navigate = useNavigate();
    const releasedDate = isValid(new Date(game.released))
    ? format(parseISO(game.released), "MM/dd/yyyy")
    : 'N/A';

    useEffect(() => {
        async function fetchGameDetails() {
            try {
                const { results, screenShots } = await getGameDetails(gameId);
                setGame(results)
                setParagraph(cutParagraph(results.description_raw))
                setScreenshots(screenShots)
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchGameDetails()
    }, [gameId])


    return (
        <div className='w-full min-h-screen bg-[rgb(18,18,18)] pb-32'>
            <div className='max-w-5xl mx-auto'>
                <div className='h-24 flex items-center sticky top-0 bg-[rgb(18,18,18)] z-20'>
                    <button 
                        className='flex items-center gap-4'
                        onClick={() => {
                            navigate(-1)
                        }}
                    >
                        <FaArrowLeftLong color='rgb(163,163,163)' size='1.5rem'/>
                        <span className='text-neutral-400 font-semibold'>Back</span>
                    </button>
                </div>
                {isLoading ? (
                    <SkeletonGameDetails />
                ) : (
                    <div>
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
                        <div className='flex gap-8 pt-4'>
                            <div className='w-[650px]'>
                                <Swiper 
                                    className="mySwiper"
                                    modules={[Pagination, Navigation, Scrollbar]}
                                    scrollbar={{
                                        hide: true,
                                    }}
                                    navigation={true}
                                >
                                    {screenshots.map((shots) => (
                                        <SwiperSlide key={shots.id}>
                                            <img src={shots.image} alt="screenshot" className='w-full h-[350px] rounded-xl'/>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                                <p className='text-neutral-200 text-sm pt-4'>{paragraph}</p>
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
                                    {game.publishers?.slice(0,1).map((name) => (
                                        <h3 className='text-neutral-200 text-sm' key={name.id}>{name.name}</h3>
                                    ))}
                                </div>
                                <div className='w-full flex items-center justify-between gap-4 pb-1 border-b border-neutral-800'>
                                    <span className='text-neutral-400'>Released</span>
                                    <h3 className='text-neutral-200 text-sm'>{releasedDate}</h3>
                                </div>
                                <div className='w-full flex items-center justify-between gap-4 pb-1 border-b border-neutral-800'>
                                    <span className='text-neutral-400'>Metacritic</span>
                                    <h3 className='text-neutral-200 text-sm'>{game.metacritic !== null ? game.metacritic : 'N/A'}</h3>
                                </div>
                                <button className='py-1 flex items-center gap-2 justify-center border border-neutral-200 rounded-sm hover:bg-[rgba(255,255,255,0.2)]'>
                                    <IoIosAddCircle size='1.3rem' color='white'/>
                                    <p className='text-xs uppercase text-neutral-200 font-medium'>Add to wishlist</p>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}
