import axios from "axios";
import { useEffect, useState } from "react";
import MiniCard from '../../components/MiniCard';
import './populares.css';

function Populares() {

    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);

    async function getMoviesPopulares(){
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR&page=${page}`);
        setMovies(response.data.results);
    }

    useEffect(() => {
        getMoviesPopulares()
    }, [page])

    return(
        <div className="populares">
            <div className="moviesPopulares">
                {movies.map(movie => <MiniCard movie={movie}/>)}
            </div>
        </div>
    )
}

export default Populares