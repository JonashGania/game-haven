import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { searchQuery } from '../api/api';
import { useQuery } from '@tanstack/react-query';
import SearchFilterResults from './SearchFilterResults';
import SkeletonSearchFilter from "./Skeleton/SkeletonSearchFilter";

export default function SearchGames() {
    const [query, setQuery] = useState('');

    const { data, isLoading, error} = useQuery({
        queryKey: ['searchData', query],
        queryFn: () => searchQuery(query),
        enabled: !!query
    })


    return (
        <div   
            className='w-[500px] tablet:flex hidden items-center gap-3 relative'>   
            <div className='absolute left-3'>
                <IoIosSearch 
                    color='rgb(161,161,170)' 
                    size='1.3rem'
                />
            </div>
            <input 
                type="text" 
                placeholder='Seach Games...'
                className='bg-[rgb(54,54,54)] focus:bg-white py-3 px-4 pl-11 outline-none w-full rounded-3xl text-sm focus:text-black text-neutral-400 placeholder:text-zinc-400 placeholder:text-sm'
                onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
                <div className='scrollbar-hide absolute bg-[rgb(32,32,32)] w-full h-[250px] overflow-y-auto px-4 top-14 rounded-md'>
                    {error ? (
                        <div>Error fetching results: {error.message}</div>
                    ): isLoading ? (
                        <SkeletonSearchFilter/>
                    ): (
                        <SearchFilterResults results={data}/>
                    )}
                </div>
            )}
        </div>
    )
}
