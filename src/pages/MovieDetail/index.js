import './movieDetail.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

    function MovieDetail() {

        const location = useLocation();
        const urlId = location.pathname.replace("/Filme/", "");
    
        const [movie, setMovie] = useState([]);
        const [actors, setActors] = useState([])
    
        async function getMovieDetail() {
            try{
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${urlId}?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR`);
                const details = await axios.get(`https://api.themoviedb.org/3/movie/${urlId}/credits?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=en-US`)
                setMovie(response.data);
                console.log(response.data)
                console.log(details.data.cast)
                setActors(details.data.cast)
            } catch(err) {
                console.log(err);
            }
        }
    
        useEffect(() => {
            getMovieDetail();
        }, []);

        return(
        <div>
            <div className="hero">
                <div className="bg"
                style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`}}
                >
                </div>
                <div className="posterPath">
                    <img src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`} alt="Poster" />
                </div>
                <div className="serieInfo">
                    <h1>{movie.title}</h1>
                    <ul>
                        {movie.genres?.map(genre => (
                            <li key={genre.id}>
                                {genre.name}
                            </li>
                        ))}
                    </ul>
                    <div className="score"><span>{movie.vote_average}</span></div>
                    <p className="serieInfoOverview">{movie.overview}</p>
                </div>
            </div>
            <div className='teste'>
                <ul>
                    {actors.map(actor => (
                    <li>
                        <img src={`https://www.themoviedb.org/t/p/original/${actor.profile_path}`} />
                        <p className='actor'>{actor.name}</p>
                        <p className='character'>{actor.character}</p>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default MovieDetail