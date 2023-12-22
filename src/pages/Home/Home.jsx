import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeSwiper from './Swiper/HomeSwiper'
import SteamGamesSwiper from './Swiper/SteamGamesSwiper'
import PSGamesSwiper from './Swiper/PSGamesSwiper'
import XboxGamesSwiper from './Swiper/XboxGamesSwiper'


export default function Home() {
  return (
    <div className='bg-[rgb(18,18,18)] w-full min-h-screen'>
        <Header />
        <div className='max-w-[900px] mx-auto pb-32'>
          <HomeSwiper />
          <h1 className='text-center text-white text-2xl font-medium pt-20 pb-10'>Top Games on Stores!</h1>
          <div className='flex flex-col gap-10'>
            <SteamGamesSwiper />
            <PSGamesSwiper />
            <XboxGamesSwiper />
          </div>
        </div>
        <Footer />
    </div>
  )
}
