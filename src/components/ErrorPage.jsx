import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='w-full min-h-screen error-page flex flex-col items-center justify-center bg-[rgb(18,18,18)]'>
        <img src="/error.svg" alt="error" className=' pl-[100px]'/>
        <h1 className='text-neutral-400 text-xl pt-4'>This page could not be found.</h1>
        <p className='text-neutral-400 text-xl pb-10'>
            Return to
            <Link to={'/'} className='font-semibold text-neutral-200'> Homepage</Link>
        </p>
    </div>
  )
}
