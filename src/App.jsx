import { useEffect, useState } from 'react'
import { getGenreList, getGamesList } from './api/api'

function App() {
  const [genreList, setGenreList] = useState(null);
  
  useEffect(() => {
    const fetchGenreList = async () => {
      try{
        const {genreList} = await getGenreList();
        console.log(genreList)
        setGenreList(genreList);
      } catch (error) {
        console.error('Error fetching:', error);
      }
    }

    fetchGenreList();
  }, [])
  

  return (
    <div>
      {genreList && (
        <ul>
          {genreList.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
