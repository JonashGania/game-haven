import { IoIosSearch } from "react-icons/io";
import { searchQuery } from '../api/api';
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchFilterResults from "./SearchFilterResults";
import SkeletonSearchFilter from "./Skeleton/SkeletonSearchFilter";
import PropTypes from 'prop-types';

export default function MobileSearchGames({ handleCloseSearch }) {
    const [query, setQuery] = useState('');

    const { data, isLoading, error} = useQuery({
        queryKey: ['searchData', query],
        queryFn: () => searchQuery(query),
        enabled: !!query
    })
   

    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.9)] px-4 py-4'>
            <div className='py-1 px-1 relative flex items-center justify-between gap-4'>
                <div className="absolute left-4">
                    <IoIosSearch 
                        size='1.2rem'
                        color='rgb(161,161,170)' 
                    />
                </div>
                <input 
                    type="text" 
                    placeholder="Search Games" 
                    className="w-full py-3 px-2 pl-11 rounded-3xl outline-none bg-[rgb(54,54,54)] focus:bg-white text-xs focus:text-black text-neutral-400 placeholder:text-zinc-400 placeholder:text-xs"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <span 
                    className="text-white hover:underline cursor-pointer" 
                    onClick={handleCloseSearch}
                >
                    Cancel
                </span>
            </div>
            {query && (
                <div className='scrollbar-hide w-full h-[500px] overflow-y-auto mt-4 px-4'>
                    {error ? (
                        <div>Error fetching results: {error.message}</div>
                    ) : isLoading ? (
                        <SkeletonSearchFilter/>
                    ): (
                        <SearchFilterResults results={data}/>
                    )}
                </div>
            )}
        </div>
    )
}


MobileSearchGames.propTypes = {
    handleCloseSearch: PropTypes.func.isRequired,
}