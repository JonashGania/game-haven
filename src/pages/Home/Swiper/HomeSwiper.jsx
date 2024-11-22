import {useState, useEffect} from 'react'
import { getNewestGames } from '../../../api/api'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperCard from './SwiperCard';
import SkeletonSwiper from '../Skeleton/SkeletonSwiper';
import 'swiper/css';
import 'swiper/css/autoplay';


export default function HomeSwiper({ newestGames, isLoading }) {
    return (
        <div className='pt-10'>
            <h1 className='w-[900px] mx-auto text-white text-2xl pb-6 font-semibold'>Newest Games</h1>
            {isLoading && (
                <SkeletonSwiper />
            )}
            <Swiper
                className="mySwiper rounded-2xl"
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={1000}
            >
                {newestGames?.map((game) => (
                    <SwiperSlide key={game.id} className='flex items-center justify-center rounded-2xl'>
                        <SwiperCard game={game}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
