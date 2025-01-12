import { data } from '../constants/constant'
import logo from '/logo.svg';

export default function Footer() {
  return (
    <footer className='w-full min-h-[100px] bg-[rgb(34,34,34)]'>
        <div className='max-w-6xl mx-auto py-10 flex flex-wrap gap-4 items-center justify-center tablet:justify-between'>
            <div className='px-4'>
                <img src={logo} alt="logo" />
                <p className='max-w-[450px] text-neutral-300 font-light text-sm pl-3'>This project is not a real Game store, Game Haven is just personal project of mine and 
                    all the games in here are not for sale. This project just simply display games on different genres using Rawg API. Enjoy!
                </p>
            </div>
            <div className='px-8'>
                <h3 className='text-white font-medium pb-2 text-lg text-center'>Useful Links</h3>
                <ul className='grid mobile:gap-3 gap-1 grid-cols-2'>
                    {data.usefulLink.map((page, index) => (
                        <li  key={index}>
                            <a href={page.link} target='_blank' rel='noreferrer' className='text-sm text-neutral-300 hover:text-white'>{page.page}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='w-full border-t border-neutral-700'>
            <div className='max-w-6xl mx-auto py-6'>
                <p className='text-xs text-neutral-300 text-center pb-3'>Developed by Jonash Gaña</p>
                <p className='text-xs text-neutral-300 text-center'>&copy; 2023 Jonash Gaña, All rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}
