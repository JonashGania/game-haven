import React, {useState, useEffect} from 'react'
import { getNewestGames } from '../api/api'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from './SwiperCard';
import 'swiper/css';
import 'swiper/css/autoplay';


export default function HomeSwiper() {
    const [newestGamesList, setNewestGamesList] = useState([]);

    useEffect(() => {
        const fetchGames = async() => {
            try{
                const { newestGamesList } = await getNewestGames();
                setNewestGamesList(newestGamesList);
            } catch (error) {
                console.error('Error fetching games', error);
            }
        }

        fetchGames();
    }, [])
    
    return (
        <div className='pt-10'>
            <h1 className='w-[900px] mx-auto text-white text-2xl pb-6 font-semibold'>Newest Games</h1>
            <Swiper
                className="mySwiper"
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
