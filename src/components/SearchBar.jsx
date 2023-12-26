import { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { searchQuery } from '../api/api';
import SearchFilterResults from './SearchFilterResults';

export default function SearchGames() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function searchGames(){
            try {
                const { results } = await searchQuery(query);
                setResults(results || []);
            } 
            catch (error) {
                console.error('Error fetching data', error);
            }
        }

        if(query){
            searchGames();
        } else {
            setResults([]);
        }

    }, [query])

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
            <SearchFilterResults results={results}/>
        </div>
    )
}
