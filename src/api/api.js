import axios from "axios";
import { formattedDate } from "../utils/formattedDate";

const BASE_URL = 'https://api.rawg.io/api'

export async function getGamesList(genre){
    try{
        const response = await axios.get(`https://api.rawg.io/api/games?&genres=${genre}&key=${import.meta.env.VITE_API_KEY}`);
        const genreGames = response.data.results;

        return genreGames
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

export async function getNewestGames(){
    try{
        const { formattedCurrentDate, formattedLastThirtyDays } = formattedDate();
        const dateRange = `${formattedLastThirtyDays},${formattedCurrentDate}`;

        const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=${dateRange}`);
        
        const newestGamesList = response.data.results.slice(0, 5);
        return { newestGamesList }
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}


export const getStoreTopGames = async (storeId, pageSize) => {
    const response = await axios.get(`${BASE_URL}/games?store=${storeId}&page_size=${pageSize}&key=${import.meta.env.VITE_API_KEY}`);
    const data = response.data;
    return data.results;
} 

export async function getGameDetails(gameSlug) {
    try {
        const response = await axios.get(`https://api.rawg.io/api/games/${gameSlug}?key=${import.meta.env.VITE_API_KEY}`)
        const fetch = await axios.get(`https://api.rawg.io/api/games/${gameSlug}/screenshots?key=${import.meta.env.VITE_API_KEY}`)
        const results = response.data;
        const screenShots = fetch.data.results;

        return { results, screenShots };
    } catch (error) {
        console.error('Error fetching data', error)
    }
}

export async function searchQuery(query){
    try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${query}`);
        const results = response.data.results;

        return { results }
    } catch (error) {
        console.error('Erro fetching data', error)
    }
}