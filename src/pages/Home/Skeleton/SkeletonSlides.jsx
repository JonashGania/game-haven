import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonSlides() {
  return (
    <>
      <div className='mobile:block hidden'>
          <Skeleton count={1} height='157px' width='100%' className='rounded-md'/>
          <div className='flex items-center gap-4'>
              <Skeleton count={1} height='10px' width='30px'/>
              <Skeleton count={1} height='10px' width='30px'/>
              <Skeleton count={1} height='10px' width='30px'/>
          </div>
          <Skeleton count={1} height='10px' width='100px'/>
      </div>
      <div className='mobile:hidden block'>
        <Skeleton count={1} height='180px' width='100%' className='rounded-md'/>
        <div className='flex items-center gap-4'>
            <Skeleton count={1} height='10px' width='30px'/>
            <Skeleton count={1} height='10px' width='30px'/>
            <Skeleton count={1} height='10px' width='30px'/>
        </div>
        <Skeleton count={1} height='10px' width='100px'/>
    </div>
    </>
  )
}
