import React, {useState, useEffect} from 'react'
import { getNewestGames } from '../api/api'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperCard from './SwiperCard';
import SkeletonSwiper from './SkeletonSwiper';
import 'swiper/css';
import 'swiper/css/autoplay';


export default function HomeSwiper() {
    const [newestGamesList, setNewestGamesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async() => {
            try{
                const { newestGamesList } = await getNewestGames();
                setNewestGamesList(newestGamesList);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching games', error);
            }
        }

        fetchGames();
    }, [])
    
    return (
        <div className='pt-10'>
            <h1 className='w-[900px] mx-auto text-white text-2xl pb-6 font-semibold'>Newest Games</h1>
            {isLoading && (
                <SkeletonSwiper />
            )}
            <Swiper
                className="mySwiper"
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={1000}
            >
                {newestGamesList.map((game) => (
                    <SwiperSlide key={game.id} className='flex items-center justify-center'>
                        <SwiperCard game={game}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
