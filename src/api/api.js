import axios from "axios";
import { formattedDate } from "../utils/formattedDate";

export async function getGenreList(){
    try{
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`);
        const genreList = response.data.results;

        return { genreList }
    } catch(error){
        console.error("Error fetching data:", error);
    }
}

export async function getGamesList(genre){
    try{
        const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${genre}`);
        const gamesList = response.data;

        console.log(gamesList);
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

export async function getSteamTopGames() {
    try{
        const steam = [];
        const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`);
        
        const topGames = response.data.results;

        topGames.forEach((game) => {
            const stores = game.stores.map((store) => store.store.name);

            if (stores.includes('Steam')){
                steam.push(game);
            }  
        })

        return { steam, topGames }
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}


export async function getStoreTopGames(){
    try {
        const playstation = [];
        const xbox = [];

        const { formattedCurrentDate, formattedFiveYearsAgo } = formattedDate();
        const dateRange = `${formattedFiveYearsAgo},${formattedCurrentDate}`;

        const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=${dateRange}`);
        const topPlaystationGames = response.data.results;

        topPlaystationGames.forEach((game) => {
            const stores = game.stores.map((store) => store.store.name);

            if(stores.includes('PlayStation Store')){
                playstation.push(game)
            }

            if(stores.includes('Xbox Store')){
                xbox.push(game)
            }
        })

        return { playstation, xbox }
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}