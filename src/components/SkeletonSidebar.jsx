import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonSidebar() {
  return (
    <div className='flex items-center gap-3 py-3 px-3'>
        <Skeleton count={1} height='40px' width='40px' className='rounded-lg'/>
        <Skeleton count={1} height='10px' width='100px'/> 
    </div>
  )
}
