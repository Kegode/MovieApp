
import './App.css';
import searchIcon from './Search.svg'
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
//18b9bbed

const API_URL = 'http://www.omdbapi.com?apikey=18b9bbed';
const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {searchMovies('spiderman')},
     []);
  return (
    <div className="app">
     <h1>Movie Land</h1>
     <div className='search'>
      <input placeholder='search for movies' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
      <img src={searchIcon} alt='search' onClick={()=>searchMovies(searchTerm)}/>
     </div>
     { 
        movies?.length > 0 ?(
        <div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))}
        </div>
      ): <div><h2 className='empty'>No Movie Found</h2></div>}
     
    </div>
       );
    }

export default App;
