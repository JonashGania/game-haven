import axios from "axios";

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