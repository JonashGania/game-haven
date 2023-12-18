import React, {useState, useEffect, useRef} from 'react'
import { getSteamTopGames } from '../api/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PaginationButton from './Pagination';
import GameSlides from './GameSlides';
import SkeletonSlides from './SkeletonSlides';

import 'swiper/css';

export default function SteamGamesSwiper() {
    const [steamGames, setSteamGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [slide, setSlide] = useState({
        isFirst: true,
        isLast: false,
    })
    const slideRef = useRef();

    useEffect(() => {
        async function fetchSteamGames(){
            try{
                const { steam } = await getSteamTopGames();
                setSteamGames(steam.slice(0, 9))
                setIsLoading(false);
            } catch(error) {
                console.error("Error fetching data", error)
            }
        }
        fetchSteamGames();
    }, [])

    const handleNext = () => {
        slideRef.current.swiper.slideNext();
    }

    const handlePrevious = () => {
        slideRef.current.swiper.slidePrev();
    }

    const onSlideChange = swiper => {
        setSlide({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd,
        })
    }

    const { isLast, isFirst } = slide;

    return (
        <div>
            <div className='w-full flex justify-between items-center pb-4'>
                <div className='flex items-center gap-1'>
                    <img src="/steam.svg" alt="steam logo" />
                    <h2 className='text-white text-xl pr-7'>Steam</h2>
                    <a 
                        href="https://store.steampowered.com" 
                        target='_blank' 
                        rel='noreferrer'
                        className='text-white py-1 px-3 rounded-sm text-sm border border-white  hover:border-neutral-500'
                    >
                        Visit Steam store
                    </a>
                </div>
                <PaginationButton isFirst={isFirst} isLast={isLast} handlePrevious={handlePrevious} handleNext={handleNext}/>
            </div>
            <div>
                <Swiper 
                    modules={[Navigation, Pagination]}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    spaceBetween={10}
                    navigation={false}
                    className={'mySwiper'}
                    ref={slideRef}
                    onSlideChange={onSlideChange}
                >
                    {isLoading ? (
                        Array.from({ length: 9 }).map((_, index) => (
                            <SwiperSlide key={index}>
                                <SkeletonSlides />
                            </SwiperSlide>
                        ))
                    ) : (
                        steamGames.map((game) => (
                            <SwiperSlide key={game.id}>
                                <GameSlides game={game}/>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
        </div>
    )
}
