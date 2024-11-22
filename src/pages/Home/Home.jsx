import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeSwiper from './Swiper/HomeSwiper'
import SteamGamesSwiper from './Swiper/SteamGamesSwiper'
import PSGamesSwiper from './Swiper/PSGamesSwiper'
import XboxGamesSwiper from './Swiper/XboxGamesSwiper'
import { useQuery } from '@tanstack/react-query'
import { getStoreTopGames, getNewestGames } from '../../api/api'

export default function Home() {

  const fetchHomeData = async () => {
    const [newestGames, steamGames, psGames, xboxGames] = await Promise.all([
      getNewestGames(),
      getStoreTopGames(1, 12),
      getStoreTopGames(2, 12),
      getStoreTopGames(3, 12),
    ])

    return { newestGames, steamGames, psGames, xboxGames  }
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['homeGames'],
    queryFn: fetchHomeData,
  })

  if (error) {
    return <div>Error loading data: {error.message}</div>
  }

  return (
    <div className='bg-[rgb(18,18,18)] w-full min-h-screen overflow-hidden'>
        <Header />
        <div className='max-w-[900px] mx-auto pb-32 px-4'>
          <HomeSwiper newestGames={data?.newestGames} isLoading={isLoading}/>
          <h1 className='text-center text-white text-2xl font-medium pt-20 pb-10'>Top Games on Stores!</h1>
          <div className='flex flex-col gap-10'>
            <SteamGamesSwiper steamGames={data?.steamGames} isLoading={isLoading}/>
            <PSGamesSwiper psGames={data?.psGames} isLoading={isLoading}/>
            <XboxGamesSwiper xboxGames={data?.xboxGames} isLoading={isLoading}/> 
          </div>
        </div>
        <Footer />
    </div>
  )
}
