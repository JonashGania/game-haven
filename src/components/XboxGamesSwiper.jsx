import React, {useState, useEffect, useRef} from 'react'
import { getStoreTopGames } from '../api/api'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PaginationButton from './Pagination';
import GameSlides from './GameSlides';

import 'swiper/css';

export default function XboxGamesSwiper() {
    const [xboxGames, setXboxGames] = useState([]);
    const [slide, setSlide] = useState({
        isFirst: true,
        isLast: false,
    })
    const slideRef = useRef();

    useEffect(() => {
        async function fetchGames(){
            try{
                const { xbox } = await getStoreTopGames();
                setXboxGames(xbox.slice(0, 9))
            } catch(error) {
                console.error("Error fetching data", error)
            }
        }
        fetchGames();
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
                    <img src="/xbox.svg" alt="xbox logo" />
                    <h2 className='text-white text-xl pr-7'>Xbox</h2>
                    <a 
                        href="https://www.xbox.com/en-us/games?xr=shellnav" 
                        target='_blank' 
                        rel='noreferrer'
                        className='text-white py-1 px-3 rounded-sm text-sm border border-white  hover:border-neutral-500'
                    >
                        Visit Xbox store
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
                    {xboxGames.map((game) => (
                        <SwiperSlide key={game.id}>
                            <GameSlides game={game}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
