import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonSwiper() {
  return (
    <div>
        <Skeleton count={1} height='500px' width='888.88px' className='rounded-2xl'/>
    </div>
  )
}
