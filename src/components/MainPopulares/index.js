import axios from 'axios';
import { useEffect, useState } from 'react';
import MiniCard from '../MiniCard';
import './mainPopulares.css';

function MainPopulares() {

    const [movies, setMovies] = useState([]);
    const [moviesLastest, setMoviesLastest] = useState([])

    async function getMovies() {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR&page=1`);
        const response2 = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR&page=1`)
        setMovies(response.data.results)
        setMoviesLastest(response2.data.results)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return(
        <div className="mainPopulares">
            <div className='main'>
                <h2>Os mais populares</h2>
                <div className='movies'>
                    {movies.map(movie => <MiniCard movie={movie} key={movie.id}/>)}
                </div>
            </div>

            <div className='main'>
                <h2>Próximos lançamentos</h2>
                <div className='movies'>
                    {moviesLastest.map(movieLastest => <MiniCard movie={movieLastest} key={movieLastest.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default MainPopulares