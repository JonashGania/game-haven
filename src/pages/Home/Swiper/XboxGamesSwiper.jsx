import {useState, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PaginationButton from '../../../components/Pagination';
import GameSlides from './GameSlides';
import SkeletonSlides from '../Skeleton/SkeletonSlides';

import 'swiper/css';

export default function XboxGamesSwiper({ xboxGames, isLoading }) {
    const [slide, setSlide] = useState({
        isFirst: true,
        isLast: false,
    })
    const slideRef = useRef();

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

    return (
        <div>
            <div className='w-full flex justify-between items-center pb-4'>
                <div className='flex items-center gap-1'>
                    <img src="/xbox.svg" alt="xbox logo" />
                    <h2 className='text-white text-base mobile:text-xl pr:5 mobile:pr-7'>Xbox</h2>
                    <a 
                        href="https://www.xbox.com/en-us/games?xr=shellnav" 
                        target='_blank' 
                        rel='noreferrer'
                        className='text-white ml-3 mobile:ml-0 py-1 px-3 rounded-sm text-xs mobile:text-sm border border-white  hover:border-neutral-500'
                    >
                        Visit Xbox store
                    </a>
                </div>
                <PaginationButton isFirst={slide.isFirst} isLast={slide.isLast} handlePrevious={handlePrevious} handleNext={handleNext}/>
            </div>
            <div>
                <Swiper 
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    navigation={false}
                    className={'mySwiper'}
                    ref={slideRef}
                    onSlideChange={onSlideChange}
                    breakpoints={{
                        600: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                        },
                        640: {
                          slidesPerView: 2,
                          slidesPerGroup: 2,
                        },
                        900: {
                          slidesPerView: 3,
                          slidesPerGroup: 3,
                        }
                      }}
                >
                    {isLoading ? (
                        Array.from({ length: 9 }).map((_, index) => (
                            <SwiperSlide key={index}>
                                <SkeletonSlides />
                            </SwiperSlide>
                        ))
                    ) : (
                        xboxGames?.map((game) => (
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
