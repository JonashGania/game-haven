import {useEffect, useState} from 'react'
import { getGameDetails } from '../api/api'
import { IoIosAddCircle, IoIosCheckmarkCircle } from "react-icons/io";
import { cutParagraph } from '../utils/cutParagraph';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams, useNavigate } from 'react-router-dom';
import { format, isValid, parseISO } from "date-fns";
import { useWishlist } from '../context/WishlistContext';
import GameDescription from './ReadMore';
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
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
    const { gameId } = useParams();
    const navigate = useNavigate();
    const releasedDate = isValid(new Date(game.released))
    ? format(parseISO(game.released), "MM/dd/yyyy")
    : 'N/A';
    const gameInWishlist = Boolean(wishlist[game.id]);

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


    const handleToggleWishlist = (game) => {
        if (gameInWishlist){
            removeFromWishlist(game.id)
        } else {
            addToWishlist(game)
        }
    }

    return (
        <div className='w-full min-h-screen bg-[rgb(18,18,18)] pb-32 overflow-hidden'>
            <div className='max-w-5xl mx-auto'>
                <div className='h-24 flex items-center sticky top-0 bg-[rgb(18,18,18)] z-20 px-4'>
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
                    <div className='w-full px-4'>
                        <div className=''>
                            <h1 className='text-white text-xl mobile:text-3xl font-medium'>{game.name}</h1>
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
                        </div>

                        <div className='flex justify-center laptop:gap-8 gap-4 pt-4 w-full max-w-5xl flex-wrap sidebar:flex-nowrap'>
                            <div className='w-full sidebar:w-[500px] laptop:w-[650px] transitiion-all duration-300 ease-in'>
                                <Swiper 
                                    className="mySwiper"
                                    modules={[Pagination, Navigation, Scrollbar]}
                                    scrollbar={{
                                        hide: true,
                                    }}
                                    navigation={true}
                                >
                                    {screenshots.map((shots) => (
                                        <SwiperSlide key={shots.id} className='w-100%'>
                                            <img src={shots.image} alt="screenshot" className='w-full rounded-xl'/>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                                <GameDescription descrition={paragraph}/>
                            </div>
                            <div className='sidebar:min-w-[310px] mobile:min-w-[400px] min-w-[300px] px-4 mobile:px-8 flex flex-col gap-3 pt-8 sidebar:pt-0'>
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
                                <button 
                                    className='py-1 flex items-center gap-2 justify-center border border-neutral-200 rounded-sm hover:bg-[rgba(255,255,255,0.2)]'
                                    onClick={() => handleToggleWishlist(game)}
                                >
                                    {gameInWishlist ? (
                                        <>
                                            <IoIosCheckmarkCircle size='1.3rem' color='white'/>
                                            <p className='text-sm text-white font-medium'>In Wishlist</p>
                                        </>
                                    ) : (
                                        <>
                                             <IoIosAddCircle size='1.3rem' color='white'/>
                                            <p className='text-sm text-white font-medium'>Add to Wishlist</p>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}
