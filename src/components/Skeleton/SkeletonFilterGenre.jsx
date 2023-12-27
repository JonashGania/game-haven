import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonFilterGenre() {
  return (
    <div className='flex items-center gap-3'>
        <Skeleton count={1} height='40px' width='60px' className='rounded-lg'/>
        <Skeleton count={1} height='10px' width='100px' className='rounded-lg'/>
    </div>
  )
}
