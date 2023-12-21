import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonGameDetails() {
  return (
    <div>
        <Skeleton count={1} height='35px' width='300px'/>
        <div className='flex items-center gap-1 pb-4'>
            <Skeleton circle count={1} height='20px' width='20px'/>
            <Skeleton circle count={1} height='20px' width='20px'/>
            <Skeleton circle count={1} height='20px' width='20px'/>
            <Skeleton circle count={1} height='20px' width='20px'/>
            <Skeleton circle count={1} height='20px' width='20px'/>
        </div>
        <div  className='flex gap-8'>
            <div className='w-[650px]'>
                <Skeleton count={1} width='100%' height='350px' className='rounded-lg'/>
                <Skeleton count={7} width='650px' height='10px'/>
            </div>
            <div className='flex-1 px-8 flex justify-between'>
                <Skeleton count={5} width='100px' height='15px'/>
                <Skeleton count={5} width='100px' height='15px'/>
            </div>
        </div>
    </div>
  )
}
