import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonSwiper() {
  return (
    <>    
      <div className='hidden sidebar:block px-4'>
        <Skeleton count={1} height='500px'  width='100%' className='rounded-2xl'/>
      </div>
      <div className='hidden mobile:block sidebar:hidden px-4'>
        <Skeleton count={1} height='350px'  width='100%' className='rounded-2xl'/>
      </div>
      <div className='bloc mobile:hidden'>
        <Skeleton count={1} height='170px'  width='100%' className='rounded-2xl'/>
      </div>
    </>
  )
}
