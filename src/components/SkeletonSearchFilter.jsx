import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonSearchFilter() {
  return (
    <div className='scrollbar-hide absolute bg-[rgb(32,32,32)] w-full h-[250px] overflow-y-auto px-4 top-14 rounded-md'>
        <ul className='flex flex-col gap-2'>
            {Array.from({ length: 8 }).map((_, index) => (
                <div className='flex items-center gap-6' key={index}>
                    <Skeleton count={1} height='40px' width='60px'/>
                    <Skeleton count={1} height='15px' width='250px'/>
                </div>
            ))}
        </ul>
    </div>
  )
}
