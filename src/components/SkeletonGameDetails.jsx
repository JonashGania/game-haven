import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonGameDetails() {
  return (
    <div className='px-4'>
        <div className='hidden mobile:block'>
            <Skeleton count={1} height='35px' width='300px'/>
        </div>
        <div className='block mobile:hidden'>
            <Skeleton count={1} height='35px' width='200px'/>
        </div>
        <div className='flex items-center gap-1 pb-4'>
            <Skeleton circle count={1} height='20px' width='20px'/>
            <Skeleton circle count={1} height='20px' width='20px'/>
            <Skeleton circle count={1} height='20px' width='20px'/>
            <Skeleton circle count={1} height='20px' width='20px'/>
            <Skeleton circle count={1} height='20px' width='20px'/>
        </div>
        <div  className='flex justify-center gap-8 w-full max-w-5xl flex-wrap sidebar:flex-nowrap'>
            <div className='w-full sidebar:w-[500px] laptop:w-[650px]'>
                <div className='hidden mobile:block'>
                    <Skeleton count={1} width='100%' height='350px' className='rounded-lg'/>
                </div>
                <div className='block mobile:hidden'>
                    <Skeleton count={1} width='100%' height='200px' className='rounded-lg'/>
                </div>
                <Skeleton count={4} width='100%' height='10px'/>
            </div>
            <div className='sidebar:min-w-[310px] mobile:min-w-[400px] min-w-[300px] laptop:px-8 px-4 flex justify-between'>
                <Skeleton count={5} width='100px' height='15px'/>
                <Skeleton count={5} width='100px' height='15px'/>
            </div>
        </div>
    </div>
  )
}
