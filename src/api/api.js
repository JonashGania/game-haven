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
        console.log(newestGamesList)
        return { newestGamesList }
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

export async function getMostPlayed(){
    try{
        const response = await axios.get(`https://api.rawg.io/api/games/616677?key=${import.meta.env.VITE_API_KEY}`)
        const upcomingList = response.data;

        return {upcomingList}
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}