import axios from "axios";
import { formattedDate } from "../utils/formattedDate";

const BASE_URL = 'https://api.rawg.io/api'

export const fetchGames = async (genre) => {
    const url = genre
        ? `${BASE_URL}/games?&genres=${genre}&key=${import.meta.env.VITE_API_KEY}`
        : `${BASE_URL}/games?page_size=20&key=${import.meta.env.VITE_API_KEY}`

    const response = await axios.get(url);
    return response.data.results;
}

export async function getNewestGames(){
    try{
        const { formattedCurrentDate, formattedLastThirtyDays } = formattedDate();
        const dateRange = `${formattedLastThirtyDays},${formattedCurrentDate}`;

        const response = await axios.get(`https://api.rawg.io/api/games?page_size=5&dates=${dateRange}&key=${import.meta.env.VITE_API_KEY}`);
        
        return response.data.results
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
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error)
    }
}

export async function getScreenshots(gameSlug) {
    try {
        const response = await axios.get(`https://api.rawg.io/api/games/${gameSlug}/screenshots?key=${import.meta.env.VITE_API_KEY}`)
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data', error)
    }
}

export async function searchQuery(query){
    try {
        const response = await axios.get(`https://api.rawg.io/api/games?search=${query}&key=${import.meta.env.VITE_API_KEY}`);
        return response.data.results
    } catch (error) {
        console.error('Erro fetching data', error)
    }
}