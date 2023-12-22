import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonGames() {
  return (
    <div className='w-full'>
        <div className='w-full h-[157px]'>
            <Skeleton count={1} height='100%' width='100%' className='rounded-md'/>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Skeleton count={1} height='10px' width='50px'/>
                <Skeleton count={1} height='10px' width='50px'/>
                <Skeleton count={1} height='10px' width='50px'/>
            </div>
            <Skeleton count={1} height='20px' width='30px'/>
        </div>
        <Skeleton count={1} height='10px' width='100px'/>
    </div>
  )
}
